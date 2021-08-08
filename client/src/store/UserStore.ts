import { makeAutoObservable } from "mobx"
import { getCurrentUser, setCurrentUser } from "../api/api"
import jwt_decode from "jwt-decode"

export class UserStoreImpl{

  constructor(){
    makeAutoObservable(this)
  } 

  getUser = (data: any) => {
    getCurrentUser(data)
      .then((d: any) => {
        const item = this.getDecodedUser(d.data.token)
        localStorage.setItem('user', JSON.stringify(item))
      })
      .catch((error) => console.log(error.response.data.message))
  }

  setUser = (data: any) => {
    setCurrentUser(data)
      .then((d: any) => {
        const item = this.getDecodedUser(d.data.token)
        localStorage.setItem('user', JSON.stringify(item))
      })
      .catch((error) => console.log(error.response.data.message))
  }

  private getDecodedUser = (token: string) => {
    const decodedToken: any = jwt_decode(token)
    return {
      email: decodedToken.email,
      id: decodedToken.id
    }
  }

}

export const UserStore = new UserStoreImpl()