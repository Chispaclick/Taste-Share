const { createSlice } = require("@reduxjs/toolkit");

 const tasteShareSlice = createSlice({
  name: "tasteshare",
  initialState: {
    isSaving: true,
    messageSaved: "",
    notes: [],
    active: null,
    //active: {
    //id: "ABC",
    // title: "",
    // body: "",
    // date: 123,
    //  imageURL: []

    // }
  },
  reducers: {
    addNewEmptynote: (state, action) => {},
    setActiveNote: (state, action) => {},
    setNotes: (state, actions) => {},
    setSaving: (state) => {},
    updateNote: (state, action) => {},
    deleteByNote: (state, action) => {},
  },
});

export const {
  addNewEmptynote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteByNote,
} = tasteShareSlice.actions;

export default tasteShareSlice;