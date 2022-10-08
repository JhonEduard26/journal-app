import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
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
      state.messageSaved = ''
    },
    savingNewNote: (state) => {
      state.isSaving = true
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {
      state.isSaving = true
      state.messageSaved = ''
    },
    updateNote: (state, action) => {
      state.isSaving = false
      state.notes = state.notes.map(note => {
        if (note.id === action.payload.id) {
          return action.payload
        }
        return note
      })
      state.messageSaved = "Correctly updated"
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