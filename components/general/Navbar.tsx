"use client";

import Link from "next/link";
//import { buttonVariants } from "../ui/button";

export function Navbar() {
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Your<span className="text-blue-500">Account</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="/account/dashboard"
          >
            Dashboard
          </Link>
        </div>
      </div>
      <div>
        <button className="button">Log In</button>
      </div>
      {/* <div className="flex items-center gap-4">
          <button className={buttonVariants()}>Login</button>
          <button className={buttonVariants({ variant: "secondary" })}>
            Sign up
          </button>
        </div> */}
    </nav>
  );
}
