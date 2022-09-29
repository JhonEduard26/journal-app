import { Grid, Typography } from '@mui/material'

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={0}
      sx={{
        minHeight: '100vh',
        padding: 4,
        backgroundColor: 'primary.main'
      }}
    >
      <Grid
        className="box-shadow"
        item
        xs={3}
        sx={{
          width: { sm: 460 },
          padding: 3,
          borderRadius: 2,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>{title}</Typography>

        {children}

      </Grid>
    </Grid>
  )
}