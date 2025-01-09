import { checkingCredencials } from "@/slice/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

function useForm(valorInicial, validacion) {

  const dispatch = useDispatch()
  const [valorInput, setValorInput] = useState(valorInicial);
  const [error, setError] = useState({});

  const manejadorCambio = (evento) => {
    const { name, value } = evento.target;
    setValorInput({
      ...valorInput,
      [name]: value,
    });

    if (validacion) {
      const validadorError = validacion({
        ...valorInput,
        [name]: value,
      });
      setError(validadorError);
    }
  };

  const manejadorEnvio = (evento, callback) => {
    evento.preventDefault();
    if (Object.keys(error).length === 0) {
      callback(); // Ejecuta una función si no hay errores
    } else {
      console.error("Errores en el formulario:", error);
    }
    console.log({email, password})
    dispatch(checkingCredencials())
  };

  return {
    valorInput,
    error,
    manejadorCambio,
    manejadorEnvio,
  };
}

export default useForm;
