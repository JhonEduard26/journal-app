import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import Google from '@mui/icons-material/Google'

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'

const formData = {
  email: 'nube@google.com',
  password: '123456',
}

export const LoginPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const [formValues, onInputChange] = useForm(formData)
  const { email, password } = formValues

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(startLoginWithEmailPassword({ email, password }))
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container spacing={0} sx={{ mt: 2 }}>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              fullWidth
              label="email"
              type="email"
              value={email}
              name="email"
              onChange={onInputChange}
              placeholder="youremail@mail.com"
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              fullWidth
              label="password"
              type="password"
              value={password}
              name="password"
              onChange={onInputChange}
              placeholder="*********"
            />
          </Grid>

          <Grid item xs={12} sx={{ mb: 1, display: errorMessage ? '' : 'none' }}>
            <Alert severity="error">
              {errorMessage}
            </Alert>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" disabled={isAuthenticating} fullWidth>Login</Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" disabled={isAuthenticating} fullWidth onClick={onGoogleSignIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>
                  Google
                </Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container justifyContent="end">
            <Link component={RouterLink} to="/auth/register">
              Create an account
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}