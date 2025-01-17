

function UpContent({HandlerUpConten}) {
  return (
    <div>
      <button
        onClick={HandlerUpConten}
        className="bg-amber-600 w-full p-2 rounded-md font-bold hover:bg-gray-300 transition-all ease-in"
      >
        Subir Contenido
      </button>
    </div>
  );
}

export default UpContent;
