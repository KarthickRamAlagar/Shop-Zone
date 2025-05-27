import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckoutModal = ({ total, onClose, productCategory }) => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError("");

    try {
      if (step === 1) {
        setStep(2);
        return;
      }

      if (paymentMethod === "whatsapp") {
        await sendWhatsAppInvoice();
        setTimeout(() => {
          onClose();
          navigate("/");
        }, 1500);
      } else if (paymentMethod === "upi") {
        initiateUPIPayment();
      } else {
        alert(`Payment of ₹${total.toFixed(2)} processed successfully!`);
        setTimeout(() => {
          onClose();
          navigate("/");
          clearCart();
        }, 1000);
      }
    } catch (err) {
      console.error("Payment error:", err);
      setError(err.message || "Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const initiateUPIPayment = () => {
    const upiUrl = `upi://pay?pa=your-merchant-id@okhdfcbank&pn=YourStore&am=${total.toFixed(
      2
    )}&cu=INR`;
    window.location.href = upiUrl;

    // Fallback redirect in case UPI app doesn't take over
    setTimeout(() => {
      onClose();
      navigate("/");
      clearCart();
    }, 3000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-20"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-white rounded-xl shadow-xl w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {step === 1 ? "Checkout Options" : "Payment Method"}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
                disabled={isProcessing}
              >
                ✕
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Would you like to receive your invoice via WhatsApp?
                  </p>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setPaymentMethod("");
                        setStep(2);
                      }}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                      disabled={isProcessing}
                    >
                      No, thanks
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPaymentMethod("whatsapp");
                        setStep(2);
                      }}
                      className="flex-1 px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200"
                      disabled={isProcessing}
                    >
                      Yes, please
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {paymentMethod === "whatsapp" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+91XXXXXXXXXX"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                        disabled={isProcessing}
                      />
                    </div>
                  )}

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Select payment method:</p>
                    <div className="space-y-2">
                      {["upi", "card", "cod"].map((method) => (
                        <label className="flex items-center space-x-2" key={method}>
                          <input
                            type="radio"
                            name="payment"
                            value={method}
                            checked={paymentMethod === method}
                            onChange={() => setPaymentMethod(method)}
                            className="h-4 w-4 text-indigo-800"
                            disabled={isProcessing}
                          />
                          <span>
                            {method === "upi"
                              ? "UPI (Google Pay, PhonePe, Paytm)"
                              : method === "card"
                              ? "Credit/Debit Card"
                              : "Cash on Delivery"}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Total Amount:</span>
                      <span className="font-bold text-indigo-800">
                        ₹{total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                      disabled={isProcessing}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className={`px-6 py-2 rounded-lg text-white ${
                        isProcessing
                          ? "bg-indigo-400 cursor-not-allowed"
                          : "bg-indigo-800 hover:bg-indigo-900"
                      }`}
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "Complete Payment"}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CheckoutModal;