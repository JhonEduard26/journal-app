import { collection, doc, setDoc, getDocs, deleteDoc } from 'firebase/firestore/lite';
import { firebaseDB } from '../../firebase/config';
import { fileUpload } from '../../helpers/fileUpload';
import {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote
} from './journalSlice';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote())

    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`))
    await setDoc(newDoc, newNote)

    newNote.id = newDoc.id

    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    const notes = []
    const docs = await getDocs(collection(firebaseDB, `${uid}/journal/notes`))
    docs.forEach(doc => {
      notes.push({ id: doc.id, ...doc.data() })
    })
    dispatch(setNotes(notes))
  }
}

export const startSaveNote = () => {
  return async (dispatch, getState) => {

    dispatch(setSaving())

    const { uid } = getState().auth
    const { active: note } = getState().journal

    const noteToFirestore = { ...note }
    delete noteToFirestore.id

    const docRef = doc(firebaseDB, `${uid}/journal/notes/${note.id}`)

    await setDoc(docRef, noteToFirestore, { merge: true })

    dispatch(updateNote(note))
  }
}

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving())

    const fileUploadPromises = []
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file))
    }
    const photoUrls = await Promise.all(fileUploadPromises)
    dispatch(setPhotosToActiveNote(photoUrls))
    dispatch(startSaveNote())
  }
}

export const startDeleteNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const { active: note } = getState().journal

    const docRef = doc(firebaseDB, `${uid}/journal/notes/${note.id}`)

    await deleteDoc(docRef)

    dispatch(deleteNoteById(note.id))
  }
}