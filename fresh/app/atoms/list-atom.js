import { atom, selector } from "recoil";

export const listState = atom({
  key: 'foodList',
  default : []
})

export const listSelector = selector({
  key : 'listSElector',
  get : ({get})=>{
    let test = get(listState)
   return test.filter(el => el.count !== 0)
  }
})