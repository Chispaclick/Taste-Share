const { createSlice } = require("@reduxjs/toolkit");

export const shareSlice = createSlice({
  name: "share",
  initialState: {
    isSaving: true,
    messageSave: "",
    note: [],
    active: {
      // id: 'ABC',
      // title: '',
      //body: '',
      // date: '',
      // imageURL: [],
    },
  },
  reducers: {
    addNewNote: (state, action) => {},
    setActiveNote: (state, action) => {},
    setNote: (state, action) => {},
    setSaving: (state, action) => {},
    updateNote: (state, action) => {},
    deleteNoteById: (state, action) => {},
  },
});

export const {
  addNewNote,
  setActiveNote,
  setNote,
  setSaving,
  updateNote,
  deleteNoteById,
} = shareSlice.actions;
