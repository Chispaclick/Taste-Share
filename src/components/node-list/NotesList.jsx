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
    <div className="flex-col w-full place-content-center items-center mt-6">
      {notes.length === 0 ? (
        <p className="text-gray-300">No hay notas disponibles</p>
      ) : (
        notes.map((note) => (
          <div className="flex-col w-full h-[250px] place-content-center items-center  border-[1px] border-gray-300 rounded-md px-4 py-2">
            <div className="flex w-full place-content-end items-center p-1">
              <small className="text-blue-400 text-sm">
                {new Date(note.date).toLocaleString()}
              </small>
            </div>
            <div
              className="flex-col w-full h-full place-content-center items-center  border-[1px] border-gray-300 rounded-md"
              key={note.id}
             
            >
              <div className="flex-1">
                {note.image && (
                  <img
                    src={note.image}
                    alt={note.title}
                    style={{ maxWidth: "100%" }}
                  />
                )}
              </div>
              <div className="flex-1 flex-col w-full place-content-center items-center">
                <h3>{note.title}</h3>
                <p>{note.content}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
