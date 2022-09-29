import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import LogoutOutlined from '@mui/icons-material/LogoutOutlined'
import MenuOutlined from '@mui/icons-material/MenuOutlined'

export const Navbar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar position="fixed" sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
    }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{
            mr: 2,
            display: { sm: 'none' },
          }}
        >
          <MenuOutlined />
        </IconButton >

        <Grid container justifyContent="space-between" alignItems="center">
          <Typography>Journal App</Typography>
          <IconButton color="error">
            <LogoutOutlined />
          </IconButton>
        </Grid>

      </Toolbar >
    </AppBar >
  )
}