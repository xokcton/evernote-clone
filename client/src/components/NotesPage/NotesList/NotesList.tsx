import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import NoteAddIcon from '@material-ui/icons/NoteAdd'
import Note from './Note'
import { NotesStoreImpl } from '../../../store/NotesStore'
import { observer } from 'mobx-react-lite'

interface NotesProps{
  notesStore: NotesStoreImpl
}

const NotesList: React.FC<NotesProps> = observer(({notesStore}) => {  
  return (
    <Grid container>
      <Grid item container className="notesPageItemSecondTitle" direction="row" alignItems="center" justifyContent="flex-start">
        <NoteAddIcon fontSize="large" className="notesPageItemSecondTitleIcon" />
        <Typography variant="h5" className="notesPageItemSecondTitleText">Notes</Typography>
      </Grid>
      <Grid container item className="notesPageItemSecondInfo" direction="row" alignItems="center" justifyContent="flex-start">
        { notesStore.notes.length === 1 ? `${notesStore.notes.length} note` : `${notesStore.notes.length} notes` }
      </Grid>
      {
        notesStore.notes.length ? 
        (
          <Grid item container className="notesPageItemSecondListWithBlocks" direction="column" justifyContent="flex-start" alignItems="center" >
            {
              notesStore.notes.map((elem) => <Note notesStore={notesStore} key={elem.id + Math.floor(Math.random() * 100)} title={elem.title} id={elem.id + ''} createdAt={elem.createdAt} />)
            }
          </Grid>
        ) :
        (
          <Grid item className="notesPageItemSecondList" container alignItems="center" justifyContent="center">
            <svg width="200" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 122.319 109.982 a 3.556 3.556 0 0 1 -1.79 0.995 l -12.927 2.813 c -0.247 0.054 -0.497 0.08 -0.744 0.08 a 3.54 3.54 0 0 1 -2.592 -1.137 a 3.738 3.738 0 0 1 -0.875 -3.466 l 3.25 -12.731 c 0.065 -0.254 0.163 -0.496 0.277 -0.728 h -32.83 c -1.243 0 -2.253 -1.035 -2.253 -2.308 s 1.01 -2.308 2.252 -2.308 h 37.074 L 142 59.582 V 53.56 c 0 -7.489 -5.923 -13.56 -13.23 -13.56 H 71.23 C 63.923 40 58 46.071 58 53.561 v 79.878 C 58 140.929 63.923 147 71.23 147 h 57.54 c 7.307 0 13.23 -6.071 13.23 -13.561 v -43.63 l -19.681 20.173 Z M 74.087 63.734 h 51.826 c 1.242 0 2.252 1.035 2.252 2.308 c 0 1.272 -1.01 2.308 -2.252 2.308 H 74.087 c -1.242 0 -2.252 -1.036 -2.252 -2.309 c 0 -1.272 1.01 -2.307 2.252 -2.307 Z m 51.826 59.533 H 74.087 c -1.242 0 -2.252 -1.036 -2.252 -2.309 c 0 -1.272 1.01 -2.307 2.252 -2.307 h 51.826 c 1.242 0 2.252 1.035 2.252 2.308 c 0 1.272 -1.01 2.308 -2.252 2.308 Z"
                fill="#D9D9D9"
              ></path>
              <path
                d="M 171.335 55.574 l -51.218 51.62 L 107 110 l 3.298 -12.702 l 51.218 -51.62 a 5.652 5.652 0 0 1 8.037 0 l 1.782 1.796 a 5.758 5.758 0 0 1 0 8.1 Z"
                fill="#A6A6A6"
              ></path>
              <path
                opacity=".6"
                d="M 168.417 146.602 l 2.679 1.956 a 0.935 0.935 0 0 1 0.332 1.046 l -1.031 3.172 a 0.935 0.935 0 0 0 0.333 1.046 a 0.91 0.91 0 0 0 1.084 -0.002 l 2.664 -1.978 a 0.906 0.906 0 0 1 1.083 0.004 l 2.659 1.974 a 0.915 0.915 0 0 0 1.085 0.002 a 0.939 0.939 0 0 0 0.333 -1.046 l -1.033 -3.178 a 0.94 0.94 0 0 1 0.338 -1.043 l 2.674 -1.953 a 0.934 0.934 0 0 0 0.337 -1.044 a 0.914 0.914 0 0 0 -0.878 -0.644 l -3.302 0.013 a 0.912 0.912 0 0 1 -0.741 -0.382 a 0.937 0.937 0 0 1 -0.134 -0.266 l -1.006 -3.181 a 0.917 0.917 0 0 0 -1.752 0 l -1.006 3.181 a 0.912 0.912 0 0 1 -0.874 0.648 l -3.303 -0.013 c -0.422 0.026 -0.759 0.273 -0.878 0.644 a 0.935 0.935 0 0 0 0.337 1.044 Z M 71.505 12.743 a 2.314 2.314 0 0 1 -1.65 -0.692 l -3.142 -3.185 a 2.385 2.385 0 0 1 0 -3.341 a 2.31 2.31 0 0 1 3.297 0 l 1.495 1.513 l 5.276 -5.346 a 2.31 2.31 0 0 1 3.298 0 c 0.91 0.923 0.91 2.419 0 3.342 l -6.926 7.017 a 2.309 2.309 0 0 1 -1.648 0.692 Z"
                fill="#CEDC00"
              ></path>
              <path
                opacity=".6"
                d="M 24.78 128.714 a 0.972 0.972 0 0 0 0.966 -0.979 v -6.483 h 2.886 a 0.972 0.972 0 0 0 0.966 -0.978 a 0.98 0.98 0 0 0 -0.178 -0.563 a 0.999 0.999 0 0 0 -0.105 -0.131 v 0.002 l -5.348 -5.234 a 0.949 0.949 0 0 0 -0.67 -0.273 a 0.949 0.949 0 0 0 -0.669 0.273 l -5.345 5.234 v -0.002 a 0.999 0.999 0 0 0 -0.105 0.131 a 0.98 0.98 0 0 0 -0.178 0.563 c 0 0.54 0.432 0.978 0.966 0.978 h 2.883 v 6.483 c 0 0.541 0.433 0.979 0.966 0.979 h 2.966 Z"
                fill="#00A82D"
              ></path>
            </svg>
          </Grid>
        )
      }
    </Grid>
  )
})

export default NotesList
