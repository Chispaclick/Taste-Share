import React, { useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { FirebaseDB } from "@/firebase/config";

const AddNote = () => {
  const [note, setNote] = useState({ title: "", content: "" });
  const [image, setImage] = useState(null); // Estado para la imagen
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // Límite de tamaño: 2 MB

  const handleInputChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.size > MAX_FILE_SIZE) {
      alert("La imagen supera el tamaño máximo permitido de 2 MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    if (file) reader.readAsDataURL(file); // Convertir a base64
  };

  const handleAddNote = async () => {
    if (!note.title || !note.content) {
      alert("Por favor, completa el título y el contenido.");
      return;
    }

    try {
      const notesCollectionRef = collection(FirebaseDB, "notes");
      const docRef = await addDoc(notesCollectionRef, {
        ...note,
        date: new Date().toISOString(),
        image, // Agregamos la imagen base64
      });
      console.log("Nota guardada con ID:", docRef.id);
      setNote({ title: "", content: "" }); // Limpiar campos
      setImage(null); // Limpiar imagen
    } catch (error) {
      console.error("Error al guardar la nota:", error);
    }
  };

  return (
    <div className="flex-col  w-full place-content-center items-center p-6">
      <div className="flex-col w-full place-content-center items-center mt-20 p-4 border-[1px] border-gray-300 rounded-md">
        <div className="flex-col w-full place-content-center items-center">
          <label className="flex text-gray-300" htmlFor="title">
            Title:
          </label>
          <input
            id="title"
            className="flex w-full text-gray-300 rounded-md p-1 mb-4"
            type="text"
            name="title"
            placeholder="Título"
            value={note.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-col w-full place-content-center items-center">
          <label className="flex text-gray-300" htmlFor="text-area">
            Description:
          </label>
          <textarea
            className="flex w-full text-gray-300 rounded-md p-1 mb-4"
            name="content"
            placeholder="Description"
            value={note.content}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-col w-full place-content-center items-center">
          <input
            id="text-area"
            className="text-gray-300 rounded-md mb-4"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button
          className="w-full bg-amber-600 text-gray-900 p-1 rounded-md"
          onClick={handleAddNote}
        >
          Guardar Nota
        </button>
      </div>
    </div>
  );
};

export default AddNote;
