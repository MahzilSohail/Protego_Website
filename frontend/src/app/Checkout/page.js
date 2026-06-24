"use client"; 
import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cartItems, totalPrice } = useCart();
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const router = useRouter();

  // form states
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    postal: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
  const isEmpty = Object.values(form).some((value) => value.trim() === "");

  if (isEmpty) {
    alert("Please fill all shipping information first!");
    return;
  }

  const orderData = {
    ...form,
    deliveryOption,
    paymentMethod,
    cartItems: JSON.stringify(cartItems),
    totalPrice,
  };

  try {
    const res = await fetch("http://localhost:3001/checkoutorders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!res.ok) {
      alert("Something went wrong while placing order.");
      return;
    }

    alert("Order placed successfully!");
    router.push("/Confirm");
  } catch (error) {
    console.error(error);
    alert("Failed to place order.");
  }
};


  return (
    <div>
      <Navbar/>
      <div className="max-w-4xl mx-auto mt-28 px-6 pb-20">
        <h1 className="text-3xl font-semibold mb-6 text-blue-900">Checkout</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            {/* Order Summary */}
            <div className="border rounded-lg p-4 mb-6 bg-white shadow-sm">
              <h2 className="text-xl font-medium mb-3">Order Summary</h2>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b py-2">
                  <span>{item.name} × {item.quantity}</span>
                  <span>
                    Rs.{" "}
                    {(
                      Number(String(item.price).replace(/[^0-9]/g, "")) *
                      item.quantity
                    ).toLocaleString()}
                  </span>
                </div>
              ))}

              <p className="flex justify-between font-semibold text-lg mt-3">
                <span>Total:</span>
                <span>Rs. {totalPrice.toLocaleString()}</span>
              </p>
            </div>

            {/* Shipping Info */}
            <div className="border rounded-lg p-4 bg-white shadow-sm mb-6">
              <h2 className="text-xl font-medium mb-3">Shipping Information</h2>

              <form className="space-y-3">
                <input type="email" name="email" placeholder="Email" className="w-full border p-2 rounded"
                  value={form.email} onChange={handleChange} />

                <input type="text" name="name" placeholder="Full Name" className="w-full border p-2 rounded"
                  value={form.name} onChange={handleChange} />

                <input type="text" name="phone" placeholder="Phone Number" className="w-full border p-2 rounded"
                  value={form.phone} onChange={handleChange} />

                <input type="text" name="country" placeholder="Country" className="w-full border p-2 rounded"
                  value={form.country} onChange={handleChange} />

                <input type="text" name="city" placeholder="City" className="w-full border p-2 rounded"
                  value={form.city} onChange={handleChange} />

                <textarea name="address" placeholder="Complete Address"
                  className="w-full border p-2 rounded h-24"
                  value={form.address} onChange={handleChange}
                ></textarea>

                <input type="number" name="postal" placeholder="Postal Code" className="w-full border p-2 rounded"
                  value={form.postal} onChange={handleChange} />

                {/* Delivery */}
                <div className="border rounded-lg p-4 mt-6">
                  <h2 className="text-xl font-medium mb-4">Delivery Options</h2>
                  <label className="flex items-center justify-between border p-3 rounded cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="delivery"
                        value="standard"
                        checked={deliveryOption === "standard"}
                        onChange={() => setDeliveryOption("standard")}
                      />
                      <span className="font-medium">Standard Shipping</span>
                    </div>
                    <span>Rs. 249</span>
                  </label>
                </div>

                {/* Payment */}
                <div className="border rounded-lg p-4 mt-6">
                  <h2 className="text-xl font-medium mb-4">Payment</h2>

                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input type="radio" name="payment" value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                      />
                      Cash on Delivery
                    </label>

                    <label className="flex items-center gap-3">
                      <input type="radio" name="payment" value="card"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                      />
                      Debit / Credit Card
                    </label>
                  </div>
                </div>

                {/* Place Order */}
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="w-full mt-6 bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800"
                >
                  Place Order
                </button>
              </form>
            </div>
          </>
        )}
      </div>
      <Footer/>
    </div>
  );
}