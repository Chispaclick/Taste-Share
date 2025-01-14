"use client";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
//import { useRouter } from "next/navigation";
 // Importa el componente personalizado+
import Link from "next/link";
import Image from "next/image";
import ErrorMessages from '@/components/error-message/ErrorMessages'
import { checkingAuthentication, startGoogleSignIn } from "@/slice/thunks";
import { startLoginWithEmailPassword } from "@/slice/thunks";

function HookForm() {
  const [formOpen, setFormOpen] = useState(true);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  //Login
  const onSubmit = (data) => {
    console.log(data);
    dispatch(checkingAuthentication(data.email, data.password));
    onEmailSignIn(data);
  };

  //Email

  const onEmailSignIn = (data) => {
    const { email, password } = data; // Extrae email y password
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  //Goolgle
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  const { status, ErrorMessage } = useSelector((state) => state.auth);

  const isCheckingAuth = useMemo(() => status === "checking", [status]);

  return (
    <div
      className={` top-0  flex flex-col place-content-center items-center bg-background w-full h-screen ${
        formOpen ? "visible" : "hidden"
      }`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col animate__animated  animate__fadeInUp transition-transform duration-500  bg-gray-300 w-[350px] rounded-md p-4 place-content-center items-center"
      >
        <fieldset className="border-gray-950 border-[1px] rounded-md pt-4 p-2 mb-6">
          <legend className="ml-4 px-2">
            <Image
              src="/logo_taste_share.png"
              alt="Logo"
              width={48}
              height={48}
              className="bg-amber-600"
            />
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
            <ErrorMessages message={errors.username?.message} />
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
            <ErrorMessages message={errors.email?.message} />
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
            <ErrorMessages message={errors.password?.message} />
          ) : null}
        </fieldset>

        <button
          type="submit"
          onClick={onEmailSignIn}
          className="bg-background w-full p-2 mb-2 text-gray-300 font-bold rounded-md flex items-center justify-center"
        >
          Login with Email
        </button>
        <p></p>

        <button
          onClick={onGoogleSignIn}
          disabled={isCheckingAuth}
          type="button"
          className="bg-amber-600 w-full p-2 mb-2 text-gray-950 font-bold rounded-md flex items-center justify-center"
        >
          Sign in with Google
        </button>

        <Link href="/register">
          <p className="text-sm p-3 text-gra-950 hover:underline transition-all ease-in">
            Create an accoun?
          </p>
        </Link>
      </form>
    </div>
  );
}

export default HookForm;
