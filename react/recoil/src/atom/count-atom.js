import { atom,selector, selectorFamily } from "recoil"
export const countState = atom({
  key: "count",
  default: 0
})

export const numberState = atom({
  key : 'numberTest',
  default : 1
})

export const numberSelector = selectorFamily({
  key : 'numberSelector',
  get : (value) =>({get}) =>{
    return get(countState) * value
  },
  set : (value) =>({get,set}, newValue) =>{
    let test = get(countState)
    let test2 = test * newValue * value // newValue :setter 함수로 입력받아온 값, value : 컴포넌트에서 매개변수로 넣은 값
    set(numberState, test2)
  }
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