import { atom,selector } from "recoil"
export const countState = atom({
  key: "count",
  default: {age: 1, name: 'test'}
})

export const countSelector = selector({
  key: 'test',
  get : ({get}) =>{
    const man = get(countState)
    const newMan = {...man}
    newMan.age = 123;
    newMan.name =1234
    return newMan
  },
  set: ({set}, value) =>{
    value = {age:'나이', name:'이름'}
    set(countState, value)
  }
})

// selector 아톰을 통해 만들어진 값을 바탕으로 새로운 값을 만듦
//  