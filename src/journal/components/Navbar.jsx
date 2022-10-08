import { useDispatch } from 'react-redux'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import LogoutOutlined from '@mui/icons-material/LogoutOutlined'
import MenuOutlined from '@mui/icons-material/MenuOutlined'

import { startLogout } from '../../store/auth'
import { purgeData } from '../../store/journal'

export const Navbar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(startLogout())
    dispatch(purgeData())
  }

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
          <IconButton color="error" onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>

      </Toolbar >
    </AppBar >
  )
}