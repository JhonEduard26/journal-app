import { collection, doc, setDoc, getDocs } from 'firebase/firestore/lite';
import { firebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from './journalSlice';

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