import { IconButton, Typography } from '@mui/material'
import AddOutlined from '@mui/icons-material/AddOutlined'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NoteView /> */}
      <NothingSelectedView />

      <IconButton
        size="large"
        sx={{
          position: 'fixed',
          right: 28,
          bottom: 48,
          backgroundColor: 'error.main',
          color: 'white',
          ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
        }}
      >
        <AddOutlined sx={{ fontSize: 28 }} />
      </IconButton>
    </JournalLayout>
  )
}