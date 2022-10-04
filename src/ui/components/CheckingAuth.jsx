import { CircularProgress, Grid } from '@mui/material'

export const CheckingAuth = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={0}
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main'
      }}
    >
      <Grid
        item
      >
        <CircularProgress color="warning" />
      </Grid>
    </Grid>
  )
}