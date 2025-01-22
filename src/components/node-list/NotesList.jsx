import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from "@/firebase/config";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const notesCollectionRef = collection(FirebaseDB, "notes");
      const querySnapshot = await getDocs(notesCollectionRef);

      const notesData = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .sort((a, b) => new Date(b.date) - new Date(a.date)); // Ordenar por fecha descendente

      setNotes(notesData);
    } catch (error) {
      console.error("Error al obtener las notas:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="flex-col w-full place-content-center items-center">
      {notes.length === 0 ? (
        <p className=" text-gray-300">No hay notas disponibles</p>
      ) : (
        notes.map((note) => (
          <div className="flex-col w-full place-content-center items-center   my-4">
            <div className="flex w-full place-content-end items-center p-1">
              <small className="text-blue-400 text-[10px]">
                {new Date(note.date).toLocaleString()}
              </small>
            </div>
            <div
              className="flex-col w-full place-content-center items-center border-[1px] border-gray-300 rounded-md"
              key={note.id}
            >
              <div className="flex-1 w-full">
                {note.image && (
                  <img
                    src={note.image}
                    alt={note.title}
                    className="w-full rounded-tr-md rounded-tl-md"
                  />
                )}
              </div>
              <div className="flex-1 flex-col w-full bg-amber-600 place-content-center items-center p-2">
                <h3 className="text-gray-900">{note.title}</h3>
                <p className="text-gray-900">{note.content}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
