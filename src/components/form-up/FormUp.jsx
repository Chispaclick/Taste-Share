'use client'
import { useState } from "react";
import { uploadImage } from "@/firebase/firebase";

const FormUp = () => {
  const [title, setTitle] = useState("");
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
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" absolute bottom-0 flex flex-col items-center p-4 bg-amber-600 rounded-t-md"
    >
      <label className="w-full mb-2">
        Title:
        <input
          type="text"
          className="w-full p-2 border rounded-md bg-gray-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label className="w-full mb-2">
        Description:
        <textarea
          className="w-full p-2 border rounded-md bg-gray-300"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label className="w-full mb-4">
        Image:
        <input
          type="file"
          accept="image/*"
          className="w-full p-2 border rounded-md"
          onChange={handleImageChange}
          required
        />
      </label>
      <button
        type="submit"
        className="bg-background text-white py-2 px-4 rounded-md w-full"
      >
        Subir
      </button>
    </form>
  );
};

export default FormUp;