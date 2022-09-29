import { Link as RouterLink } from 'react-router-dom'
import Google from '@mui/icons-material/Google'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>
        <Grid container spacing={0} sx={{ mt: 2 }}>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              fullWidth
              label="email"
              type="email"
              placeholder="youremail@mail.com"
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              fullWidth
              label="password"
              type="password"
              placeholder="*********"
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>Login</Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
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