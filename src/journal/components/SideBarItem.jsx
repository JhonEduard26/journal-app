import { TurnedInNot } from '@mui/icons-material'
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal'

export const SideBarItem = ({ title, body, id, date, imageUrls }) => {

  const dispatch = useDispatch()

  const onSelected = () => {
    dispatch(setActiveNote({
      id,
      title,
      body,
      date,
      imageUrls
    }))
  }

  return (
    <ListItem disablePadding onClick={onSelected}>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container direction="column">
          <ListItemText primary={title} />
          <ListItemText secondary={body} />
        </Grid>

      </ListItemButton>
    </ListItem>
  )
}