import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Create an account'>
      <form>
        <Grid container spacing={0} sx={{ mt: 2 }}>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              fullWidth
              label="Full name"
              type="text"
              placeholder="Your name"
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              placeholder="youremail@mail.com"
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              placeholder="*********"
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              fullWidth
              label="Confirm password"
              type="password"
              placeholder="*********"
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>Sign in</Button>
            </Grid>
          </Grid>

          <Grid container justifyContent="end">
            <Link component={RouterLink} to="/auth/login">
              Do you have an account? Log in
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}