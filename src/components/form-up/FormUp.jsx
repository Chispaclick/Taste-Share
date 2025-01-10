'use client'
import { useState } from "react";
import { uploadImage } from "@/firebase/config";

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
      className="flex flex-col items-center p-4 bg-amber-600 rounded-t-md"
    >
      <label className="w-full mb-2">
        Título:
        <input
          type="text"
          className="w-full p-2 border rounded-md bg-gray-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label className="w-full mb-2">
        Descripción:
        <textarea
          className="w-full p-2 border rounded-md bg-gray-300"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label className="w-full mb-4">
        Imagen:
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
        className="bg-background text-white py-2 px-4 rounded-xl w-full"
      >
        Subir
      </button>
    </form>
  );
};

export default FormUp;