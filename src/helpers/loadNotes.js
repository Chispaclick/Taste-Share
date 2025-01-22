import { FirebaseDB } from "@/firebase/config";
import { collection, doc, getDocs } from "firebase/firestore/lite";



export const LoadNotes = async (uid = '') => {
    if (!uid) throw new Error ('El UID del usuario no existe');
    
    const collectionRef = collection(FirebaseDB, `${uid}/note`);
    const docs = await getDocs(collectionRef);
    
    const notes = [];
    docs.forEach(doc => {
        notes.push({id: doc.id, ...doc.data()})
    })
    console.log(notes)
    return notes;

}