"use client";
import React, { useState } from "react";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    if (email === "wecare@protego.com" && password === "protegoadmin") {
      router.push("/admin/dashboard");
    } else {
      alert("Sigin Successfully!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="my-28 bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Sign In to Protego
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Email
            </label>
            <div className="flex items-center border rounded-lg px-3">
              <IoMailOutline className="text-gray-500 text-xl mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-3">
              <IoLockClosedOutline className="text-gray-500 text-xl mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="text-right">
            <Link href="#" className="text-sm text-blue-900 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-900 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;