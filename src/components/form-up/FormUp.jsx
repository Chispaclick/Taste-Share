'use client'
import { starNewNote } from "@/slice/thunks";
import { useDispatch } from "react-redux";

const FormUp = ({upContent}) => {


  //Aqui estamos creando la funcion para comenzar a subir 

  const dispatch = useDispatch ();

  const onClickNewNote = () => {
   dispatch(starNewNote) 
  };















  

  return (
    <div className={`absolute top-72 flex w-full place-content-center p-8 ${
      upContent
      ? "opacity-100 visible translate-y-0 "
      : "opacity-0 invisible -translate-y-full"
      }`}>
    <form
      
      className="flex flex-col items-center p-4 bg-amber-600 rounded-md w-full"
    >
      <label className="w-full mb-2">
        Title:
        <input
          type="text"
          className="w-full p-2 border rounded-md bg-gray-300"
          
   
          required
        />
      </label>
      <label className="w-full mb-2">
        Description:
        <textarea
          className="w-full p-2 border rounded-md bg-gray-300"
          
        
          
        />
      </label>
      <label className="w-full mb-4">
        Image:
        <input
          type="file"
          accept="image/*"
          className="w-full p-2 border rounded-md"
          
        />
      </label>
      <button
        onClick={onClickNewNote}
        type="submit"
        className="bg-background text-white py-2 px-4 rounded-md w-full"
      >
        Subir
      </button>
    </form>
    </div>
  );
};

export default FormUp;



{/*const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Almacena el archivo seleccionado
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Por favor selecciona una imagen.");
      return;
    }
    const result = await uploadImage(image, title, description);
    if (result.ok) {
      alert("Imagen subida exitosamente");
    } else {
      alert(`Error: ${result.errorMessage}`);
    }
  };*/}