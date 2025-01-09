import { checkingCredencials } from "./authSlice"



export const chekingAuthentication = (email,passsword) => {
    return async(dispatch) => {
        dispatch(checkingCredencials())
    }
}