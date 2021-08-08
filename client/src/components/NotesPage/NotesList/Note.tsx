import React from 'react'
import { Grid, IconButton, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import moment from 'moment'
import Modal from '../../Modal/Modal'
import { NotesStoreImpl } from '../../../store/NotesStore'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'

interface NoteAttrs{
  title: string
  id: string
  createdAt: Date
  notesStore: NotesStoreImpl
}

const Note: React.FC<NoteAttrs> = observer(({title, id, createdAt, notesStore}) => {
  const history = useHistory()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [nodeId, setNodeId] = React.useState<number>(0)

  const handleClick = (e: any) => {
    setNodeId(e.currentTarget.getAttribute("data-id"))
    setIsOpen(true)
  }

  const handleDelete = () => {
    notesStore.deleteNote(nodeId)
    setIsOpen(false)
    history.push('/auth')
  }

  const handleClose = () => setIsOpen(false)

  return (
    <>
    <Modal open={isOpen} onHandleClose={handleClose} handleAgreement={handleDelete} title="Deletion..." content="Are you sure you want to delete this item?" />
    <Grid item container direction="column" className="notesPageItemSecondListWithBlocksItem" spacing={2}>
      <Grid item container direction="row" justifyContent="center" alignItems="center">
        <Typography variant="h6" className="notesPageItemSecondListWithBlocksItemTitle">{title}</Typography>
        <IconButton data-id={id} onClick={handleClick} aria-label="delete" color="secondary" className="notesPageItemSecondListWithBlocksItemTitleButton">
          <DeleteIcon />
        </IconButton> 
      </Grid>
      <Grid item container className="notesPageItemSecondListWithBlocksItemTime" justifyContent="flex-start" alignItems="center">
        {moment(createdAt).fromNow()}
      </Grid>
    </Grid>
    </>
  )
})

export default Note
