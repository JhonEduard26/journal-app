import { useDispatch, useSelector } from 'react-redux'
import { IconButton } from '@mui/material'
import AddOutlined from '@mui/icons-material/AddOutlined'

import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { startNewNote } from '../../store/journal/thunks'

export const JournalPage = () => {
  const { isSaving, active } = useSelector(state => state.journal)

  const dispatch = useDispatch()

  const onNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>
      {
        !!active
          ? <NoteView />
          : <NothingSelectedView />
      }

      <IconButton
        size="large"
        disabled={isSaving}
        sx={{
          position: 'fixed',
          right: 28,
          bottom: 48,
          backgroundColor: 'error.main',
          color: 'white',
          ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
        }}
        onClick={onNewNote}
      >
        <AddOutlined sx={{ fontSize: 28 }} />
      </IconButton>
    </JournalLayout>
  )
}