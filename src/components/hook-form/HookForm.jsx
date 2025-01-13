'use client'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
//import { useRouter } from "next/navigation";
import ErrorMessage from "@/components/error-message/ErrorMessage"; // Importa el componente personalizado

import { checkingAuthentication, startGoogleSignIn } from '@/slice/thunks';

function HookForm() {

  const [formOpen, setFormOpen] = useState(true);

  const {handleSubmit, register, formState: { errors }} = useForm();
  
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(checkingAuthentication(data.email, data.password));
};

const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
};

  

  return (
    <div
      className={`absolute top-0 z-50 flex flex-col place-content-center items-center bg-background w-full h-screen ${
        formOpen ? "visible" : "hidden"
      }`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-gray-300 w-[350px] rounded-md p-4 place-content-center items-center"
      >
        <fieldset className="border-gray-950 border-[1px] rounded-md pt-4 p-2 mb-6">
          <legend className="ml-4 px-2">
            <img src="/logo_taste_share.png" className="w-12 brightness-50 m-4" />
          </legend>
          <label htmlFor="username" className="w-full pl-2">
            Name
          </label>
          <input
            id="username"
            className="w-full p-2 rounded-md mt-2 mb-2"
            type="text"
            placeholder="Name"
            {...register("username", {
              required: "Este campo es requerido",
              minLength: {
                value: 5,
                message: "El nombre debe tener al menos 5 caracteres",
              },
            })}
          />
          {errors.username ? (
            <ErrorMessage message={errors.username?.message} />
          ) : null}

          <label htmlFor="email" className="w-full p-2">
            Email
          </label>
          <input
            id="email"
            className="w-full p-2 rounded-md mt-2 mb-2"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email ? (
            <ErrorMessage message={errors.email?.message} />
          ) : null}

          <label htmlFor="password" className="w-full p-2">
            Password
          </label>
          <input
            id="password"
            className="w-full p-2 rounded-md mt-2 mb-2"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Este campo es requerido",
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
              validate: {
                customPassword: (password) => {
                  if (
                    /[a-z]/.test(password) && // Verifica al menos una minúscula
                    /[A-Z]/.test(password) && // Verifica al menos una mayúscula
                    /[0-9]/.test(password)    // Verifica al menos un número
                  ) {
                    return true;
                  }
                  return "Este campo debe tener al menos un número, una minúscula y una mayúscula";
                },
              },
            })}
          />
          {errors.password ? (
            <ErrorMessage message={errors.password?.message} />
          ) : null}
        </fieldset>

        <button
          type="submit"
          className="bg-background w-full p-2 mb-2 text-gray-300 rounded-md flex items-center justify-center"
        
        >
          Login with Email
        </button>

        <button
          onClick={onGoogleSignIn}
          type="button"
          className="bg-amber-600 w-full p-2 mb-2 text-gray-950 rounded-md flex items-center justify-center"
        
        >
          Sign in with Google
        </button>

        <p className="text-sm pt-2">Don’t have an account?</p>
        <p className="text-blue-600 text-[15px] pb-4">Sign up</p>
      </form>
    </div>
  );
}

export default HookForm;