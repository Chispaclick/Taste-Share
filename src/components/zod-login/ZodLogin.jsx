'use client'
import React, { useState } from "react";
import loginSchema from "@/components/login-schema/loginSchema";

function ZodLogin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = loginSchema.safeParse(formData);

    if (result.success) {
      console.log("Formulario válido:", result.data);
      setErrors({});
      // Aquí puedes enviar los datos al backend o hacer algo con ellos
    } else {
      console.error("Errores de validación:", result.error.errors);
      const errorMap = {};
      result.error.errors.forEach((err) => {
        errorMap[err.path[0]] = err.message;
      });
      setErrors(errorMap);
    }
  };

  return (
    <div className="absolute top-0 flex flex-col place-content-center items-center bg-background w-full h-screen">
      <form
        className="flex flex-col place-content-center items-center bg-gray-300 w-[350px] rounded-md p-2"
        onSubmit={handleSubmit}
      >
        <h1 className="text-gray-950 text-3xl font-bold mb-4">Welcome</h1>

        <label className="w-full p-2" htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            className="w-full p-2 rounded-md"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </label>

        <label className="w-full p-2" htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            className="w-full p-2 rounded-md"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </label>

        <label className="w-full p-2" htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            className="w-full p-2 rounded-md mb-4"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </label>

        <button className="bg-background w-full p-2 mb-2 text-gray-300 rounded-md flex place-content-center items-center">
          Login with Email
        </button>

        <button className="bg-amber-600 w-full p-2 mb-2 text-gray-950 rounded-md flex place-content-center items-center">
          Sign in with Google
        </button>

        <p className="text-sm pt-2">Don’t have an account?</p>
        <p className="text-blue-600 text-[15px] pb-4">Sign up</p>
      </form>
    </div>
  );
}

export default ZodLogin;
