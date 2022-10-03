import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'no-authenticated', // checking, authenticated
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = 'authenticated'
      state.uid = action.payload.uid
      state.email = action.payload.email
      state.displayName = action.payload.displayName
      state.photoURL = action.payload.photoURL
    },
    logout: (state, action) => {

    },
    checkingCredentials: (state) => {
      state.status = 'checking'
    },
  }
});

export const { login, logout, checkingCredentials } = authSlice.actions

export default authSlice.reducer