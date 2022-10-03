import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'

const formData = {
  name: 'jhon',
  email: 'jhon@mail.com',
  password: '123456',
  password2: '123456'
}

const formValidations = {
  name: [(value) => value.length >= 1, 'Name is required'],
  email: [(value) => value.includes('@'), 'Email must have symbol "@"'],
  password: [(value) => value.length >= 6, 'Password must have more that 5 characters'],
  password2: [(value) => value === formData.password, 'Password must have more that 5 characters']
}

export const RegisterPage = () => {

  const [formValues, onInputChange, _, isFormValid] = useForm(formData, formValidations)

  const { name, email, password, password2 } = formValues
  console.log(isFormValid)
  const { nameValid, emailValid, passwordValid, password2Valid } = isFormValid

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(formValues)
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
              error={!!nameValid}
              helperText={nameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              placeholder="youremail@mail.com"
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid}
              helperText={emailValid}
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
              error={!!passwordValid}
              helperText={passwordValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              fullWidth
              label="Confirm password"
              type="password"
              placeholder="*********"
              name="password2"
              value={password2}
              onChange={onInputChange}
              error={!!password2Valid}
              helperText={password2Valid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>Sign in</Button>
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