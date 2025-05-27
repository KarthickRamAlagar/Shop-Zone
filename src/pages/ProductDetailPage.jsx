import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../DummyData/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const nextImage = () => {
    setCurrentImageIndex(prev => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

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
  };

  if (!product) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Product not found</h2>
        <Link 
          to="/products" 
          className="mt-4 inline-block text-indigo-800 hover:underline"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-indigo-800">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-indigo-800">Products</Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Image Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-gray-100">
            <img 
              src={product.images[currentImageIndex]} 
              alt={product.name}
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
          
          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </>
          )}
          
          <div className="flex justify-center mt-4 gap-2">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex ? 'bg-indigo-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Product Details */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">{product.name}</h1>
          
          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-200 py-2">
              <span className="text-gray-700 font-medium">Price:</span>
              <span className="text-indigo-800 font-bold">₹{product.price.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between border-b border-gray-200 py-2">
              <span className="text-gray-700 font-medium">Product ID:</span>
              <span className="text-gray-900">{product.id}</span>
            </div>
            
            <div className="flex justify-between border-b border-gray-200 py-2">
              <span className="text-gray-700 font-medium">Category:</span>
              <span className="text-gray-900 capitalize">{product.category}</span>
            </div>
            
            <div className="flex justify-between border-b border-gray-200 py-2">
              <span className="text-gray-700 font-medium">Availability:</span>
              <span className={`font-medium ${
                product.stock > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            
            <div className="border-b border-gray-200 py-2">
              <p className="text-gray-700 font-medium mb-2">Description:</p>
              <p className="text-gray-900">{product.description}</p>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-between">
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
              onClick={addToCart}
              disabled={product.stock <= 0}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-medium ${
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
    </div>
  );
};

export default ProductDetailPage;