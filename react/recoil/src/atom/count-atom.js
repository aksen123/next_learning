import { atom,selector } from "recoil"
export const countState = atom({
  key: "count",
  default: 0
})

// export const countSelector = selector({
//   key: 'test',
//   get : ({get}) =>{
//     const man = get(countState)
//     const newMan = {...man}
//     newMan.age = 123;
//     newMan.name =1234
//     return newMan
//   },
//   set: ({set}, value) =>{
    
//     set(countState, value)
//   }
// })

// selector 아톰을 통해 만들어진 값을 바탕으로 새로운 값을 만듦
//  