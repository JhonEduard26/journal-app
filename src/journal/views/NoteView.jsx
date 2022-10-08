import { useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid, IconButton, Stack, TextField, Typography } from '@mui/material'
import { SaveOutlined, UploadOutlined } from '@mui/icons-material'
import Swal from 'sweetalert2'

import { useForm } from '../../hooks/useForm'
import { setActiveNote, startSaveNote, startUploadingFiles } from '../../store/journal'
import { ImageGallery } from '../components'

export const NoteView = () => {
  const { active: note, messageSaved, isSaving } = useSelector(state => state.journal)
  const dispatch = useDispatch()

  const [inputValues, onInputChange] = useForm(note)
  const { body, title } = inputValues

  const newDate = useMemo(() => {
    return new Date(note.date).toDateString()
  }, [note.date])

  const fileInputRef = useRef('')

  useEffect(() => {

    if (messageSaved.length > 0) {
      Swal.fire({
        title: 'Updated',
        text: messageSaved,
        icon: 'success'
      })
    }
  }, [messageSaved])

  const onSaveNote = () => {
    dispatch(setActiveNote(inputValues))
    dispatch(startSaveNote())
  }

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return

    dispatch(startUploadingFiles(target.files))
  }

  return (
    <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
      <Grid item sx={{ justifySelf: "start" }}>
        <Typography fontSize={32} fontWeight="light">{newDate}</Typography>
      </Grid>

      <Stack direction="row">
        <input
          type="file"
          multiple
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={onFileInputChange}
        />

        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}>
          <UploadOutlined />
        </IconButton>

        <Grid item>
          <Button
            color="primary"
            disabled={isSaving}
            sx={{ padding: 2 }}
            onClick={onSaveNote}>
            <SaveOutlined sx={{ fontSize: 26, mr: 1 }} />
            Save
          </Button>
        </Grid>
      </Stack>

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

      <ImageGallery images={note.imageUrls} />
    </Grid>
  )
}