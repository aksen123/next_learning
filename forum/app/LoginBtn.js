'use client'
import {signIn, signOut} from 'next-auth/react'


export default function  LoginBtn({login}) {
  return (
    <button onClick={()=>{ login ? signOut() : signIn()}}>{login ? '로그아웃' : '로그인'}</button>

  )
}