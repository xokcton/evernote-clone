import { Grid } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React, { useState, useEffect } from 'react'
import { NotesStore, NotesStoreImpl } from '../../store/NotesStore'
import LeftBar from './LeftBar/LeftBar'
import NotesList from './NotesList/NotesList'
import RTE from './RTE/RTE'

interface NotesProps{
  notesStore: NotesStoreImpl
}

interface userItem{
  email: string
  id: number
}

const Notes: React.FC<NotesProps> = observer(({ notesStore }) => {
  const [user, setUser] = useState<userItem>(JSON.parse(localStorage.getItem("user") || ''))

  useEffect(() => {
    notesStore.getNotes(user.id)
  }, [])

  return (
    <Grid 
      container 
      spacing={0} 
      className="notesPageContainer" 
      direction="row"
      justifyContent="center"
    >
      <Grid container item xs={2} className="notesPageItem notesPageItemFirst" spacing={1} direction="column" justifyContent="flex-start">
        <LeftBar notesStore={NotesStore} />
      </Grid>
      <Grid container item xs={3} className="notesPageItem notesPageItemSecond" direction="column" justifyContent="flex-start">
        <NotesList notesStore={NotesStore} />
      </Grid>
      <Grid container item xs={7} className="notesPageItem notesPageItemThird" >
        <RTE />
      </Grid>
    </Grid>
  )
})

export default Notes
