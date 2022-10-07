import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { ImageGallery } from '../components'

export const NoteView = () => {
  const { active: note } = useSelector(state => state.journal)
  const [inputValues, onInputChange] = useForm(note)
  const { body, title, date } = inputValues

  const newDate = useMemo(() => {
    return new Date(date).toDateString()
  }, [date])


  return (
    <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
      <Grid item>
        <Typography fontSize={32} fontWeight="light">{newDate}</Typography>
      </Grid>

      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 26, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid
        container
        item
      >
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Enter a title"
          name="title"
          value={title}
          onChange={onInputChange}
          label="Title"
          sx={{ border: 0, mb: 1 }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          name="body"
          value={body}
          onChange={onInputChange}
          minRows={4}
          sx={{ border: 0, mb: 1 }}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  )
}