import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState, useEffect,useRef } from "react";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    const handleBounce = () => {
      alert('Marquee bounced!');
    };

    if (marquee) {
      marquee.addEventListener('bounce', handleBounce);
    }

    return () => {
      if (marquee) {
        marquee.removeEventListener('bounce', handleBounce);
      }
    };
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, []);
  useEffect(() => {
    const handleCartUpdate = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-10 bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SZ</span>
            </div>
            <span className="text-gray-900 font-semibold text-xl">
              ShopZone
            </span>
          </Link>

          <Link to="/cart" className="relative">
            <ShoppingCartIcon className="h-8 w-8 text-gray-700" />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-indigo-800 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
              >
                {cartCount}
              </motion.span>
            )}
          </Link>
        </div>
      </nav>

      {/* Marquee Section */}
      <div className="bg-indigo-800 text-white py-2 overflow-hidden">
        <marquee
          direction="left"
          scrollamount="15"
          className="whitespace-nowrap"
          loop="5"
          ref={marqueeRef}
          onMouseOver={() => marqueeRef.current.stop()}
          onMouseOut={() => marqueeRef.current.start()}
          >
          Save up to 15% at ShopZone! &nbsp; Shop Easy with ShopZone &nbsp;
        </marquee>
      </div>
    </>
  );
};

export default Navbar;
