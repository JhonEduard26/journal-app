import { checkingCredentials } from './'

export const checkingAuthenticated = (email = '', password = '') => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}