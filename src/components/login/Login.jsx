"use client";

import AntDesignCloseOutlined from "@/components/icons/AntDesignCloseOutlined";
import useForm from "@/app/hooks/useForm";

const Login = ({ loginHidden }) => {
  const inicial = { email: "", password: "" }; // Estado inicial
  const validacion = (valores) => {
    const errores = {};
    if (!valores.email) errores.email = "El email es obligatorio.";
    if (!valores.password) errores.password = "La contraseña es obligatoria.";
    return errores;
  };

  const { valorInput, error, manejadorCambio, manejadorEnvio } = useForm(
    inicial,
    validacion
  );

  const submitForm = () => {
    console.log("Formulario enviado con valores:", valorInput);
  };

  return (
    <div
      className={`absolute top-0 flex flex-col place-content-center items-center bg-background w-full h-[843px] ${
        loginHidden ? "block" : "hidden"
      }`}
    >
      <form
        onSubmit={(e) => manejadorEnvio(e, submitForm)}
        className="flex flex-col place-content-center items-center bg-gray-300 w-[350px] rounded-md p-2"
      >
        <div className="relative flex bg-gray-300 place-content-center items-center w-full">
          <button type="button" className="hover:border-b-red-600">
            <AntDesignCloseOutlined className="absolute right-0 top-0 mt-1 mr-1 m-2" />
          </button>
          <h1 className="text-gray-950 text-3xl font-bold mb-4 py-10">
            Welcome
          </h1>
        </div>
        <label className="w-full p-2" htmlFor="email">
          Email
          <input
            id="email"
            className="w-full p-2 rounded-md"
            type="email"
            name="email"
            placeholder="Email"
            value={valorInput.email}
            onChange={manejadorCambio}
          />
          {error.email && (
            <span className="text-red-500 text-sm">{error.email}</span>
          )}
        </label>
        <label className="w-full p-2" htmlFor="password">
          Password
          <input
            id="password"
            className="w-full p-2 rounded-md mb-4"
            type="password"
            name="password"
            placeholder="Password"
            value={valorInput.password}
            onChange={manejadorCambio}
          />
          {error.password && (
            <span className="text-red-500 text-sm">{error.password}</span>
          )}
        </label>
        <button
          type="submit"
          className="bg-background w-full p-2 mb-2 text-gray-300 rounded-md flex place-content-center items-center"
        >
          Login
        </button>
        <button className="bg-red-500 w-full p-2 mb-2 text-gray-300 rounded-md flex place-content-center items-center">
          Sign in with Google
        </button>
        <button className="bg-blue-800 w-full p-2 text-gray-300 rounded-md flex place-content-center items-center">
          Sign in with Facebook
        </button>
        <p className="text-sm pt-2">Don’t have an account? Sign up</p>
      </form>
    </div>
  );
};

export default Login;
