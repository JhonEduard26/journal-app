import { collection, doc, setDoc, getDocs } from 'firebase/firestore/lite';
import { firebaseDB } from '../../firebase/config';
import { fileUpload } from '../../helpers/fileUpload';
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote
} from './journalSlice';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote())

    const { uid } = getState().auth

    const newNote = {
      title: 'hola',
      body: 'mundo',
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
  return async (dispatch, getState) => {
    dispatch(setSaving())

    const data = await fileUpload(files[0])

    console.log(data)
  }
}