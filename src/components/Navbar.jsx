import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartLength = useSelector((state) => state.cart.cartLength);
  const router = useRouter();
  return (
    <nav className="px-4 mb-4 rounded-full flex items-center justify-between flex-wrap bg-white py-2 shadow border-solid border-1">
      <div>
        <Link href={"/dashboard"}>Dashboard</Link>
      </div>
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={() => router.push("/cart")}
      >
        {cartLength ? (
          <span className="rounded-full px-2 bg-blue-200 text-center">
            {cartLength}
          </span>
        ) : null}
        <ShoppingCart />
      </div>
    </nav>
  );
};

export default Navbar;
