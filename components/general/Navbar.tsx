"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import LoginButton from "../login/LoginButton";
import LogoutButton from "../login/LogoutButton";
//import { buttonVariants } from "../ui/button";

export function Navbar() {
  const { data: session, status } = useSession();
  console.log("sesseion", session);

  if (status === "loading") return <div>Loading...</div>;

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
      {session?.user?.name ? (
        <>
          <div>{session.user.email}</div>
          <p>
            <LogoutButton />
          </p>
        </>
      ) : (
        <div>
          <LoginButton />
        </div>
      )}
    </nav>
  );
}
