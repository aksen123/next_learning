import { atom, selector } from "recoil";

export const timeState = atom({
  key: 'time',
  default : {
    hour : 0,
    minute: 0
  }
})

export const timeSelector = selector({
  key: 'time Selector',
  get : ({get}) =>{
    let time = get(timeState)
    let newTime = {...time}
    newTime.hour = (time.minute / 60).toFixed(1);
    newTime.minute = time.hour * 60;
    return newTime
  }
})