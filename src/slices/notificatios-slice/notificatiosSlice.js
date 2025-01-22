import { createSlice } from "@reduxjs/toolkit";

export const notificatiosSlice = createSlice({
  name: "notifications",
  initialState: {
    notification: [],
    id: null, // Un identificador único.
    message: null, // El contenido o texto de la notificación.
    type: null, // El tipo de notificación (e.g., éxito, error, advertencia, información).
    read: null, // Un booleano para indicar si la notificación ha sido leída.
    timestamp: null, // Una marca de tiempo para ordenarlas.
  },
  reducers: {
    addNotification: (state, action) => {
      state.notification = action.payload;
    },
    markAsRead: (state, action) => {
      state.read = action.payload;
    },
    markAllAsRead: (state, action) => {
      state.read = action.payload;
    },
    unreadCount: (state, action) => {
      state.read = action.payload;
    },
    removeNotification: (state, action) => {
      state.id = action.payload;
    },
    clearNotifications: (state, action) => {
      state.notification = action.payload;
    },
  },
});

export const {
  addNotification,
  markAsRead,
  markAllAsRead,
  unreadCount,
  removeNotification,
  clearNotifications,
} = notificatiosSlice.reducer;
