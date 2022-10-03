import { signInWithGoogle } from '../../firebase/providers'
import { checkingCredentials } from './'
import { login } from './'

export const checkingAuthenticated = (email = '', password = '') => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const result = await signInWithGoogle()

    if (result.ok === true) {
      dispatch(login(result))
    }
  }
}