import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
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