import { useDispatch, useSelector } from "react-redux";

function UpContent({ HandlerUpConten }) {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.share);

  return (
    <div
      className={`flex-col w-full place-content-center items-center ${
        active ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div>
        <button
          disabled={isSaving}
          onClick={HandlerUpConten}
          className="bg-amber-600 w-full p-2 rounded-md font-bold  transition-all ease-in"
        >
          Subir Contenido
        </button>
      </div>
    </div>
  );
}

export default UpContent;
