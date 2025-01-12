import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function HookForm() {
  const [formOpen, setFormOpen] = useState(true);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handlerFormSubmit = (data) => {
    console.log(data);

    // Redirigir solo si el formulario es válido
    if (data.username && data.email && data.password) {
      console.log("Formulario válido. Redirigiendo...");
      router.push("/wellcome"); // Redirige a la página /welcome si pasa la validación
    } else {
      alert("Por favor, completa todos los campos."); // Muestra un mensaje de error si falta información
    }
    setFormOpen(false);
  };
  console.log(errors);
  return (
    <div
      className={`sticky top-0 z-30 flex flex-col place-content-center items-center bg-background w-full h-screen ${
        formOpen ? "visible" : "hidden"
      }`}
    >
      <form
        onSubmit={handleSubmit(handlerFormSubmit)}
        className="flex flex-col bg-gray-300 w-[350px] rounded-md p-4 place-content-center items-center"
      >
        <img src="/logo_taste_share.png" className="w-24 brightness-50 m-4" />
        <fieldset className="border-gray-950 border-[1px] rounded-md pt-4 p-2 mb-6">
          <legend className="ml-4 px-2">Log in</legend>
          <label htmlFor="username" className="w-full">
            Name
          </label>
          <input
            id="username"
            className="w-full p-2 rounded-md mt-2 mb-2"
            type="text"
            placeholder="Name"
            {...register("username", { minLength: 3, required: true })}
          />
          {errors.password ? <p className="text-red-500 text-xs ml-1 mb-2">Este campo es requerido</p> : null}
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
          {errors.password ? <p className="text-red-500 text-xs ml-1 mb-2">Este campo es requerido</p> : null}
          <label htmlFor="password" className="w-full p-2">
            Password
          </label>
          <input
            id="password"
            className="w-full p-2 rounded-md mt-2 mb-2"
            type="password"
            placeholder="Password"
            {...register("password", { minLength: 8, required: true })}
          />
          {errors.password ? <p className="text-red-500 text-xs ml-1 mb-2">Este campo es requerido</p> : null}
        </fieldset>

        <button
          type="submit"
          className="bg-background w-full p-2 mb-2 text-gray-300 rounded-md flex items-center justify-center"
        >
          Login with Email
        </button>

        <button
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
