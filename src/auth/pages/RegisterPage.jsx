import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField } from '@mui/material'

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { startCreatingUserWithEmailPassword } from '../../store/auth'

const formData = {
  name: '',
  email: '',
  password: '',
}

const formValidations = {
  name: [(value) => value.length >= 1, 'Name is required'],
  email: [(value) => value.includes('@'), 'Email must have symbol "@"'],
  password: [(value) => value.length >= 6, 'Password must have more that 5 characters']
}

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { status, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])
  const [formValues, onInputChange, _, formValidation, isFormValid] = useForm(formData, formValidations)
  const { name, email, password } = formValues
  const { nameValid, emailValid, passwordValid } = formValidation

  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
    if (!isFormValid) return

    dispatch(startCreatingUserWithEmailPassword(formValues))
  }

  return (
    <AuthLayout title='Create an account'>
      <form onSubmit={onSubmit}>
        <Grid container spacing={0} sx={{ mt: 2 }}>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              autoComplete="off"
              fullWidth
              label="Full name"
              type="text"
              placeholder="Your name"
              name="name"
              value={name}
              onChange={onInputChange}
              error={!!nameValid && formSubmitted}
              helperText={formSubmitted && nameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              fullWidth
              label="Email"
              type="text"
              placeholder="youremail@mail.com"
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={formSubmitted && emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              placeholder="*********"
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={formSubmitted && passwordValid}
            />
          </Grid>

          <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" disabled={isCheckingAuthentication} fullWidth>Sign in</Button>
            </Grid>
          </Grid>

          <Grid container justifyContent="end">
            <Link component={RouterLink} to="/auth/login">
              Do you have an account? Log in
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout >
  )
}