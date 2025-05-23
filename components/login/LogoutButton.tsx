"use client";

import { signOut } from "next-auth/react";

function LogoutButton() {
  //   const signOut = async () => {};

  return <button onClick={() => signOut()}>Log Out</button>;
}

export default LogoutButton;
