import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FirebaseApp } from "./config";

const storage = getStorage(FirebaseApp);

export const uploadImageToStorage = async (file, folder = "images") => {
  try {
    const fileName = `${folder}/${file.name}-${Date.now()}`;
    const fileRef = ref(storage, fileName);

    const snapshot = await uploadBytes(fileRef, file);
    const url = await getDownloadURL(snapshot.ref);

    return { ok: true, url };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};