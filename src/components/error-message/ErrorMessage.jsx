function getErrorMessage(message) {
    if (message === 'Este campo es requerido') {
      return 'Este mensaje es obligatorio para continuar.';
    }
    if (message.includes('al menos')) {
      return 'El valor ingresado es demasiado corto.';
    }
    if (message.includes('número, minúscula y una mayúscula')) {
        return 'Este campo debe tener al menos un número, una minúscula y una mayúscula.';
    }// Mensaje predeterminado si no hay una coincidencia específica
    return message;
  }
  
  function ErrorMessage({ message }) {
    if (!message) return null; // No renderiza nada si no hay mensaje
  
    return <p className="text-red-500 text-xs ml-1 mb-2">{getErrorMessage(message)}</p>;
  }
  
  export default ErrorMessage;