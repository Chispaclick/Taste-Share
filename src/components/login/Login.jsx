'use client'
import { useState } from "react";
import { signInWithGoogle, signInWithEmail } from "@/firebase/config";

const Login = ({ loginHidden }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = async () => {
    const result = await signInWithGoogle();
    if (result.ok) {
      console.log("Usuario autenticado con Google:", result);
    } else {
      console.error("Error en la autenticación con Google:", result.errorMessage);
    }
  };

  const handleEmailSignIn = async () => {
    const result = await signInWithEmail(email, password);
    if (result.ok) {
      console.log("Usuario autenticado con correo:", result);
    } else {
      console.log("Error en la autenticación con correo:", result.errorMessage);
    }
  };

  return (
    <div
      className={`absolute top-0 flex flex-col place-content-center items-center bg-background w-full h-[843px] ${
        loginHidden ? "block" : "hidden"
      }`}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col place-content-center items-center bg-gray-300 w-[350px] rounded-md p-2"
      >
        <div className="relative flex bg-gray-300 place-content-center items-center w-full">
          <h1 className="text-gray-950 text-3xl font-bold mb-4 py-10">
            Welcome
          </h1>
        </div>
        {/* Inicio de sesión con correo */}
        <label className="w-full p-2" htmlFor="email">
          Email
          <input
            id="email"
            className="w-full p-2 rounded-md"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="w-full p-2" htmlFor="password">
          Password
          <input
            id="password"
            className="w-full p-2 rounded-md mb-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type="button"
          onClick={handleEmailSignIn}
          className="bg-blue-500 w-full p-2 mb-2 text-gray-300 rounded-md flex place-content-center items-center"
        >
          Login with Email
        </button>

        {/* Inicio de sesión con Google */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="bg-amber-600 w-full p-2 mb-2 text-gray-950 rounded-md flex place-content-center items-center"
        >
          Sign in with Google
        </button>
        <p className="text-sm pt-2">Don’t have an account?</p>
        <p className="text-blue-600 text-[15px] pb-4">Sign up</p>
      </form>
    </div>
  );
};

export default Login;