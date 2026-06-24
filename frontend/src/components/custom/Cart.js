"use client";
import React from "react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { FaTimes, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();
  const router = useRouter();
console.log(cartItems);
  if (!isCartOpen) return null;

  return (
    <motion.div
      className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl p-5 z-[100] flex flex-col"
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      exit={{ x: 300 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center border-b pb-3">
        <h2 className="text-xl font-semibold text-blue-900">Your Cart</h2>
        <FaTimes
          className="cursor-pointer text-gray-600"
          onClick={() => setIsCartOpen(false)}
        />
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center mt-10 text-gray-500">Your cart is empty</p>
      ) : (
        <div className="flex-1 overflow-y-auto mt-4 space-y-4">
          {cartItems.flat().map((item, index) => (
            <div key={`${item.id}-${index}`} className="flex items-center justify-between border-b pb-2">
              <img src={item.image} className="w-14 h-16 rounded-lg" />

              <div className="flex-1 ml-3">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">Rs. {Number(String(item.price).replace(/[^0-9]/g, "")).toLocaleString()}</p>

                <div className="flex items-center mt-2 border rounded w-fit px-2">
                  <button onClick={() => decreaseQuantity(item.id)} className="px-2 text-lg">−</button>
                  <span className="px-2">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} className="px-2 text-lg">+</button>
                </div>
              </div>

              <FaTrash
                className="text-red-500 cursor-pointer ml-2"
                onClick={() => removeFromCart(item.id)}
              />
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-5 border-t pt-3">
          <p className="flex justify-between font-semibold text-lg">
            <span>Total:</span> <span>Rs. {totalPrice.toLocaleString()}</span>
          </p>

          <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded-lg"
            onClick={() => {
              setIsCartOpen(false); 
              router.push("/Checkout/"); 
            }}
          >
            Checkout
          </button>

          <button
            className="mt-2 w-full bg-gray-200 text-gray-800 py-2 rounded-lg"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
