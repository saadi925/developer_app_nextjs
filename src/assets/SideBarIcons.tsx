import React from 'react'

export  function CloseSideBar({
    size = 22, fill="none"
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fill} id="hide"><path d="M20 24H4c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v16c0 2.2-1.8 4-4 4zM4 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4z"></path><path d="M8 24c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v22c0 .6-.4 1-1 1zm6-11c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l3-3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-3 3c-.2.2-.4.3-.7.3z"></path><path d="M17 16c-.3 0-.5-.1-.7-.3l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3 3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"></path></svg>
  )
}


export function OpenSideBar({
    size = 22, fill="#fff"
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill='none' viewBox="0 0 128 128" id="sidebar"><rect width="97" height="97" x="15" y="16" stroke={fill} strokeWidth="7" rx="27"></rect><path stroke={fill} strokeLinecap="round" strokeWidth="7" d="M46 17L46 112"></path><path stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" d="M73 79L74.9027 77.6569C79.2802 74.5669 83.2134 70.8912 86.5923 66.7326V66.7326C87.4125 65.7231 87.4125 64.2769 86.5923 63.2674V63.2674C83.2134 59.1088 79.2802 55.4331 74.9027 52.3431L73 51"></path></svg>
  )
}




export  function PostsIcon({
  size =22 , fill="#fff"
}) {
  return (
    <svg width={size} height={size} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" id="blogger"><path d="M15.52 34a9.42 9.42 0 0 1-9.42-9.42v-9.29A9.29 9.29 0 0 1 15.38 6h4.93c4.16 0 8.23 3.61 8.23 7v1.45a2.34 2.34 0 0 0 2.34 2.34h1.46a1.56 1.56 0 0 1 1.56 1.56v6.5A9.11 9.11 0 0 1 24.79 34Zm6.38-18.93a1.75 1.75 0 0 0-1.75-1.75h-5.27a1.75 1.75 0 0 0-1.76 1.75 1.76 1.76 0 0 0 1.76 1.76h5.27a1.75 1.75 0 0 0 1.75-1.76ZM27 25a1.75 1.75 0 0 0-1.76-1.75H14.88A1.75 1.75 0 0 0 13.12 25a1.76 1.76 0 0 0 1.76 1.76h10.34A1.76 1.76 0 0 0 27 25Z"></path></svg>
  )
}

export function DashboardIcon({
  size =24 , fill="#fff"
}){
  return <svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" id="dashboard"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"></path></svg>
}

export function CategoriesIcon({
  size =32
}){
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" id="dashboard"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"></path></svg>
}