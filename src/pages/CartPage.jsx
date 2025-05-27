import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBagIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import CheckoutModal from '../components/CheckoutModal';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isCouponGenerated, setIsCouponGenerated] = useState(false);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const generateCouponCode = () => {
    if (isCouponGenerated) return;
    const randomCode = `SAVE${Math.floor(Math.random() * 6) + 10}`;
    setCouponCode(randomCode);
    setIsCouponGenerated(true);
  };

  const applyCoupon = () => {
    if (isCouponApplied) {
      alert('Coupon code already applied!');
      return;
    }

    const discountValue = parseInt(couponCode.replace('SAVE', ''), 10) / 100;
    if (discountValue >= 0.1 && discountValue <= 0.15) {
      setDiscount(discountValue);
      setIsCouponApplied(true);
    } else {
      alert('Invalid coupon code');
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal * (1 - discount);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-indigo-800">Home</Link>
        <span>/</span>
        <span className="text-gray-900">Cart</span>
      </div>

      <h1 className="text-3xl font-semibold text-gray-900 mb-8">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <ShoppingBagIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</h3>
          <p className="mt-1 text-gray-500">Start shopping to add items to your cart</p>
          <div className="mt-6">
            <Link 
              to="/products" 
              className="inline-flex items-center px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-900 transition-colors"
            >
              <ArrowRightIcon className="h-5 w-5 mr-2 -rotate-180" />
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <AnimatePresence>
                    {cart.map(item => (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-16 w-16">
                              <img className="h-16 w-16 rounded-md object-cover" src={item.images[0]} alt={item.name} />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{item.name}</div>
                              <div className="text-sm text-gray-500">ID: {item.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center border rounded-lg overflow-hidden w-fit">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                              className="w-12 px-0 py-1 text-center border-0 focus:ring-0"
                              min="1"
                            />
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹{item.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ₹{(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-900 flex items-center"
                          >
                            <XMarkIcon className="h-5 w-5 mr-1" />
                            Remove
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Coupon Section */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Apply Coupon</h3>
                <div className="flex flex-col space-y-4">
                  <input
                    type="text"
                    value={couponCode}
                    readOnly
                    placeholder="Coupon code"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                    <button
                      onClick={generateCouponCode}
                      disabled={isCouponGenerated}
                      className={`px-4 py-2 rounded-lg transition-colors w-full sm:w-auto
                        ${isCouponGenerated
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-blue-500 text-white hover:bg-blue-600'}
                      `}
                    >
                      Get Coupon Code
                    </button>
                    <button
                      onClick={applyCoupon}
                      disabled={isCouponApplied}
                      className={`px-4 py-2 rounded-lg transition-colors w-full sm:w-auto
                        ${isCouponApplied
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-emerald-500 text-white hover:bg-emerald-600'}
                      `}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              {/* Summary Section */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="text-gray-900">₹{subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount ({discount * 100}%):</span>
                      <span className="text-emerald-500">-₹{(subtotal * discount).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-200 pt-3 flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total:</span>
                    <span className="text-xl font-semibold text-indigo-800">₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <motion.button
                onClick={() => setShowModal(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-indigo-800 text-white rounded-lg hover:bg-indigo-900 transition-colors flex items-center"
              >
                Proceed to Checkout
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </motion.button>
            </div>
          </div>
        </>
      )}

      <AnimatePresence>
        {showModal && (
          <CheckoutModal 
            total={total}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartPage;
