import { makeAutoObservable } from "mobx"
import { getProperNotes, createNewNote, deleteSelectedNote } from "../api/api"

interface NoteItem{
  id: number
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}

export class NotesStoreImpl{
  notes: NoteItem[] = []

  constructor(){
    makeAutoObservable(this)
  } 

  getNotes = (id: number) => {
    getProperNotes(id)
      .then((data: any) => {
        data.data.forEach((element: NoteItem) => {
          this.notes.unshift(element)
        })
      })
      .catch((error) => console.log(error.response.data.message))
  }

  createNote = (data: any) => {
    createNewNote(data)
      .then((d: any) => this.notes.unshift(d.data))
      .catch((error) => console.log(error.response.data.message))
  }

  deleteNote = (id: number) => {
    deleteSelectedNote(id)
      .then((d: any) => {
        this.notes = this.notes.filter(elem => id === elem.id)
        console.log(d)
      })
      .catch((error) => console.log(error.response.data.message))
  }

}

export const NotesStore = new NotesStoreImpl()