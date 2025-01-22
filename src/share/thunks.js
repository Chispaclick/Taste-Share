{/*import { FirebaseDB } from "@/firebase/config";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNote } from "./shareSlice";
import { LoadNotes } from "@/helpers/loadNotes";

export const starNewNote = () => {
  return async (dispatch, getState) => {
    
    dispatch(savingNewNote())
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      description: "",
      date: new Date().getTime(),
    };

    //ORDEN UID, DOCUMENTO, COLECCION, CAMPOS
    const newDoc = doc(collection(FirebaseDB, `${uid}/user_01/notes/Pelis/2`));
     const setDocResp = await setDoc(newDoc, newNote);
      console.log({newDoc, setDocResp})

    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
    dispatch(savingNewNote())
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const {uid} = getState().auth;
    if (!uid) throw new Error ('El UID del usuario no existe')
    const notes = await LoadNotes(uid)
    dispatch(setNote(notes))

  }
}*/}


