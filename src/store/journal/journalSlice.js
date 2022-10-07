import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
  // active: {
  // id: 'abc123',
  // title: '',
  // body: '',
  // date: 23232323,
  // imageUrls: [],
  // }
}

const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
    },
    setActiveNote: (state, action) => {
      state.active = action.payload
    },
    savingNewNote: (state) => {
      state.isSaving = true
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {

    },
    updateNote: (state, action) => {

    },
    deleteNoteById: (state, action) => {

    }
  }
})

export const {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions

export default journalSlice.reducer