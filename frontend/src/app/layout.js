import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import Cart from "@/components/custom/Cart";

export const metadata = {
  title: "Protego",
  description: "Smart safety ring that protects you anywhere.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Cart/>

          {/* <Navbar /> */}
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
