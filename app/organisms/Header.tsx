import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl">Expense Tracker</h1>
      <div>
        <Link href="/" className="px-2">Home</Link>
        <Link href="/expenses" className="px-2">Expenses</Link>
        <Link href="/about" className="px-2">About</Link>
      </div>
    </nav>
  );
};

export default Header;
