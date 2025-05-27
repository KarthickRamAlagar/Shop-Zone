import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Animation feedback
    const button = document.getElementById(`add-to-cart-${product.id}`);
    if (button) {
      button.classList.add('animate-ping');
      setTimeout(() => button.classList.remove('animate-ping'), 500);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/products/${product.id}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-indigo-800">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-500 mb-2">{product.description.substring(0, 60)}...</p>
        
        <div className="flex justify-between items-center mb-3">
          <span className="text-indigo-800 font-bold">₹{product.price.toFixed(2)}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${
            product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="px-3 py-1">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              +
            </button>
          </div>
          
          <motion.button
            id={`add-to-cart-${product.id}`}
            onClick={addToCart}
            disabled={product.stock <= 0}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              product.stock > 0 
                ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            } transition-colors`}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;