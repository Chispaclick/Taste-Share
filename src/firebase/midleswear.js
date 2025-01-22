import { collection, addDoc } from "firebase/firestore";
import { FirebaseDB } from '@/firebase/config';

//collection: Define a qué colección se agregarán los documentos. Si no existe, Firestore la crea automáticamente.

//addDoc: Genera un ID único para cada documento y guarda los datos proporcionados.

//El try-catch maneja errores en caso de fallos (por ejemplo, permisos incorrectos).

//Crear datos y subirlos a Firebase
//---------------------------------

//función para subir datos:
export const salvarNota = async (nota) => {
  try {
    const notasColleccionRef = collection(FirebaseDB, "notas");
    const docRef = await addDoc(notasColleccionRef, nota);
    console.log("Documento creado con ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.log("Error al guardar la nota", error);
  }
};

//función para guardar una nota:
const nuevaNota = {
  title: "",
  content: "",
  data: new Date().toISOString(),
};

salvarNota(nuevaNota);

//Obtener datos desde Firebase
//----------------------------

//Función para obtener datos:

export const fetchNotas = async () => {
  try {
    const notasColleccionRef = collection(FirebaseDB, nota);
    const querySnapshot = await notasColleccionRef;
    const notas = [];

    querySnapshot.forEach((doc) => {
      notas.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.log("Error al obtener las notas:", error);
  }
};

const cargarNotas = async () => {
  const notas = await fetchNotas();
  console.log(notas);
};

cargarNotas();
