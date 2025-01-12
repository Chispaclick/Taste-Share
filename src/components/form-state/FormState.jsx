'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function FormState() {
  const [ formOpen, setFormOpen ] = useState(true)
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter(); // Hook para manejar la navegación

  const handlerFormSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario
    // Valida los campos del formulario
    if (form.name && form.email && form.password) {
      console.log("Formulario válido. Redirigiendo...");
      router.push("/wellcome"); // Redirige a la página /wellcome si pasa la validación
    } else {
      alert("Por favor, completa todos los campos."); // Muestra un mensaje de error si falta información
    }
    setFormOpen(false)
  };

  return (
    <div className={` flex flex-col place-content-center items-center bg-background w-full h-screen ${
      formOpen
          ? "visibility"
          : "hidden"
      }`}>
      <form
        className="flex flex-col animate__animated animate__fadeInUp first-letter:place-content-center items-center bg-gray-300 w-[350px] rounded-md p-4"
        onSubmit={handlerFormSubmit}
      >
        <img src="/logo_taste_share.png" className="w-24 brightness-50 m-4" />
        <fieldset
          className="border-gray-950 border-[1px] rounded-md pt-4 p-2 mb-6"
        >
          <legend className="ml-4 px-2">Log in</legend>
          <label className="w-full" htmlFor="name"></label>
          Name
          <input
            onChange={(e) => {
              setForm((prevForm) => ({
                ...prevForm,
                name: e.target.value,
              }));
            }}
            id="name"
            name="name"
            className="w-full p-2 rounded-md mt-2 mb-2"
            type="text"
            placeholder="Name"
            value={form.name}
            required
          />
          <label className="w-full p-2" htmlFor="email"></label>
          Email
          <input
            onChange={(e) => {
              setForm((prevForm) => ({
                ...prevForm,
                email: e.target.value,
              }));
            }}
            id="email"
            name="email"
            className="w-full p-2 rounded-md mt-2 mb-2"
            type="email"
            placeholder="Email"
            value={form.email}
            required
          />
          <label className="w-full p-2" htmlFor="password"></label>
          Password
          <input
            onChange={(e) => {
              setForm((prevForm) => ({
                ...prevForm,
                password: e.target.value,
              }));
            }}
            id="password"
            name="password"
            className="w-full p-2 rounded-md mt-2 my-2"
            type="password"
            placeholder="Password"
            value={form.password}
            required
          />
        </fieldset>

        <button
          type="submit"
          className="bg-background w-full p-2 mb-2 text-gray-300 rounded-md flex place-content-center items-center"
        >
          Login with Email
        </button>

        <button
          onClick={() => alert("Sign in with Google no está implementado.")}  
          type="button"
          className="bg-amber-600 w-full p-2 mb-2 text-gray-950 rounded-md flex place-content-center items-center"
        >
          Sign in with Google
        </button>
        <p className="text-sm pt-2">Don’t have an account?</p>
        <p className="text-blue-600 text-[15px] pb-4">Sign up</p>
      </form>
    </div>
  );
}

export default FormState;