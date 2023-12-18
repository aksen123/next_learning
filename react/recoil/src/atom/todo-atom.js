import { atom,selector } from "recoil";


export const todoState = atom({
  key: 'todo state',
  default : []
})