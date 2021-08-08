import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const getCurrentUser = (data: any) => {
  return API.post("auth/login", data)
}

export const setCurrentUser = (data: any) => {
  return API.post("auth/registration", data)
}

export const getProperNotes = (id: number) => {
  return API.get(`notes/${id}`)
}

export const createNewNote = (data: any) => {
  return API.post("notes", data)
}

export const deleteSelectedNote = (id: number) => {
  return API.delete(`notes/${id}`)
}