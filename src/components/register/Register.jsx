"use client";
import { useForm } from "react-hook-form";
import ErrorMessage from "@/components/error-message/ErrorMessage"; //
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "@/slice/thunks";
import { useMemo } from "react";

function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const { status, ErrorMessage } = useSelector((state) => state.auth);

  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const onSubmit = (data) => {
    dispatch(
      startCreatingUserWithEmailPassword(
        data.email,
        data.displayName,
        data.password
      )
    );
    console.log(data);
  };

  return (
    <div className="absolute top-0 z-50 flex flex-col place-content-center items-center bg-background w-full h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-gray-300 w-[350px] rounded-md p-4 place-content-center items-center"
      >
        <fieldset className="border-gray-950 border-[1px] rounded-md pt-4 p-2 mb-6">
          <legend className="ml-4 px-2">
            <Image
              src="/logo_taste_share.png"
              alt="Logo"
              width={48}
              height={48}
              className="brightness-50 m-4"
            />
          </legend>
          <label htmlFor="fullname" className="w-full pl-2">
            Name
          </label>
          <input
            id="fullname"
            className="w-full p-2 rounded-md mt-2 mb-2"
            type="text"
            placeholder="Name"
            {...register("fullname", {
              required: "Este campo es requerido",
              minLength: {
                value: 5,
                message: "El nombre debe tener al menos 5 caracteres",
              },
            })}
          />
          {errors.fullname ? (
            <ErrorMessage message={errors.fullname?.message} />
          ) : null}

          <label htmlFor="email-register" className="w-full p-2">
            Email
          </label>
          <input
            id="email-register"
            className="w-full p-2 rounded-md mt-2 mb-2"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email ? (
            <ErrorMessage message={errors.email?.message} />
          ) : null}

          <label htmlFor="password-register" className="w-full p-2">
            Password
          </label>
          <input
            id="password-register"
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
                    /[0-9]/.test(password) // Verifica al menos un número
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
          disabled={isCheckingAuthentication}
          type="submit"
          className="bg-amber-600 w-full p-2 mb-2 rounded-md flex items-center justify-center text-gray-950 font-bold hover:bg-background hover:text-gray-300 transition-all ease-in"
        >
          Create account
        </button>
        <div className="">
          
          <p>{ErrorMessage}</p>
        </div>
        <p className="text-sm pt-2">Do you have an account?</p>
        <Link href="/log">
          <p className="text-blue-600 text-[15px] pb-4 hover:underline">
            Sign up
          </p>
        </Link>
      </form>
    </div>
  );
}

export default Register;
