import { signInWithGoogle } from "@/firebase/providers"
import { checkingCredencials } from "./authSlice"



export const chekingAuthentication = (email,passsword) => {
    return async(dispatch) => {
        dispatch(checkingCredencials())
        const results = await signInWithGoogle()
        console.log({results})
    }
}