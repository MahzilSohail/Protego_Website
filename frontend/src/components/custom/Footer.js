import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Protego</h4>
            <p className="text-sm text-gray-300">
              Quality products, honest prices. Delivering to your door.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-3 text-white">Products</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">All Products</li>
              <li className="hover:text-white cursor-pointer">Best Sellers</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3 text-white">Company</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3 text-white">Support</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Shipping & Returns</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2025 Protego. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-3 md:mt-0">
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
