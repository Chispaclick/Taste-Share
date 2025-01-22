import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from '@/firebase/config';

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
    <div>
      <h2>Lista de Notas</h2>
      {notes.length === 0 ? (
        <p>No hay notas disponibles</p>
      ) : (
        notes.map((note) => (
          <div
            key={note.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            {note.image && (
              <img
                src={note.image}
                alt={note.title}
                style={{ maxWidth: "100%" }}
              />
            )}
            <small>{new Date(note.date).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;