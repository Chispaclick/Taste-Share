import { addNotification } from "./NotificatiosSlice";


export const notificacion = () => {
  return async (dispatch) => {
    await addNotification();
    dispatch(notificacion);
  };
};
