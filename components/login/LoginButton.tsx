"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

function LoginButton() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    await signIn("microsoft-entra-id");
    setLoading(false);
  };

  return (
    <button
      onClick={() => handleLogin()}
      className="w-full bg-blue-300 text-white my-5 p-3 rounded-md hover:opacity-80"
      disabled={loading}
    >
      Log In
    </button>
  );
}

export default LoginButton;
