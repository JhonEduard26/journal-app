import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'
import { firebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider)
    const { displayName, uid, photoURL, email } = result.user

    return {
      ok: true,
      displayName,
      uid,
      photoURL,
      email,
    }

  } catch (error) {
    return {
      ok: false,
      message: error.message
    }
  }
}

export const registerWithEmailPassword = async ({ name, email, password }) => {
  try {

    const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password)
    const { uid, photoURL } = resp.user

    await updateProfile(firebaseAuth.currentUser, { displayName: name })

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName: name,
    }
  } catch (error) {
    return {
      ok: false,
      message: error.message
    }
  }
}

export const signInEmailPassword = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(firebaseAuth, email, password)
    const { displayName, uid, photoURL } = result.user

    return {
      ok: true,
      displayName,
      uid,
      photoURL,
      email,
    }

  } catch (error) {
    return {
      ok: false,
      message: error.message
    }
  }
}

export const logoutFirebase = async () => await signOut(firebaseAuth)