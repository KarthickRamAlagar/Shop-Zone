import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBagIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 py-12">
        <div className="md:w-1/2 bg-gradient-to-r from-green-200 to-yellow-200 border-2 border-green-700 p-6 rounded-lg shadow-lg">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Welcome to <span className="text-indigo-800">ShopZone</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 mb-8"
          >
            Discover amazing products at unbeatable prices. Quality you can
            trust, service you can rely on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-indigo-800 text-white rounded-lg hover:bg-indigo-900 transition-colors"
            >
              <ShoppingBagIcon className="h-5 w-5 mr-2" />
              Shop Now
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </motion.div>
        </div>

        <div className="md:w-1/2">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Shopping"
            className="rounded-xl shadow-xl w-full h-auto"
          />
        </div>
      </div>

      <div className="py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Quality Products
            </h3>
            <p className="text-gray-600">
              We source only the highest quality products from trusted
              suppliers.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Get your orders delivered quickly with our efficient shipping
              network.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Secure Payment
            </h3>
            <p className="text-gray-600">
              Your transactions are safe with our secure payment options.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
