import React from 'react'
import { Grid, Button, Avatar } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Modal from '../../Modal/Modal'
import { NotesStoreImpl } from '../../../store/NotesStore'
import { observer } from 'mobx-react-lite'

interface NotesProps{
  notesStore: NotesStoreImpl
}

interface userItem{
  email: string
  id: number
}

const LeftBar: React.FC<NotesProps> = observer(({ notesStore }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [user, setUser] = React.useState<userItem>(JSON.parse(localStorage.getItem("user") || ''))

  const handleClose = () => setIsOpen(false)

  const onHandleAgreement = () => {
    localStorage.removeItem("user")
    setUser({ email: '', id: 0 })
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }

  const handleCreateNote = () => {
    const newNote = {
      title: 'Untitled',
      userId: user.id
    }

    notesStore.createNote(newNote)
  }

  return (
    <>
      <Modal open={isOpen} onHandleClose={handleClose} handleAgreement={onHandleAgreement} title="Are u sure?" content="Are you sure you want to log out of your account?" />
      <Grid 
        container
        item 
        spacing={1} 
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="notesPageItemFirstBlock"
      >
        <Avatar>
          {user.email.charAt(0).toUpperCase()}
        </Avatar>
        <span className="notesPageItemFirstEmail">{user.email}</span>
        <IconButton color="secondary" aria-label="add an alarm" onClick={() => setIsOpen(true)}>
          <ExitToAppIcon />
        </IconButton>
      </Grid>
      <Button className="notesPageItemFirstCreateButton" variant="contained" color="primary" size="large" startIcon={<AddIcon />} onClick={handleCreateNote}>Create new note</Button>
    </>
  )
})

export default LeftBar
