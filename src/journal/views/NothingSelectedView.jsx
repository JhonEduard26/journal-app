import StarOutline from '@mui/icons-material/StarOutline'
import { Grid, Typography } from '@mui/material'

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={0}
      sx={{
        minHeight: 'calc(100vh - 120px)',
        backgroundColor: 'primary.main',
        borderRadius: 2,
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 80, color: 'white' }} />
      </Grid>

      <Grid item xs={12}>
        <Typography sx={{ color: 'white' }}>
          Select or create a note
        </Typography>
      </Grid>
    </Grid>
  )
}