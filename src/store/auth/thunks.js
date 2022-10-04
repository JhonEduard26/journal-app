import { registerWithEmailPassword, signInEmailPassword, signInWithGoogle, } from '../../firebase/providers'
import { checkingCredentials, login, logout } from './'

export const checkingAuthenticated = (email = '', password = '') => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const result = await signInWithGoogle()

    if (!result.ok) return dispatch(logout(result.message))

    dispatch(login(result))
  }
}

export const startCreatingUserWithEmailPassword = ({ name, email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const result = await registerWithEmailPassword({ name, email, password })
    if (!result.ok) return dispatch(logout(result))

    dispatch(login(result))
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const result = await signInEmailPassword({ email, password })
    if (!result.ok) return dispatch(logout(result))

    dispatch(login(result))
  }
}