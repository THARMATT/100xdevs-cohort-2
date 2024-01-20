import React, { useMemo, useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { homeAtom, jobAtom, messageAtom, networkAtom,  totalNotificationSelector } from './atoms'
function App(){
return(
  <RecoilRoot>
  <MainApp/>
  </RecoilRoot>)
}

export default App

function MainApp() {
const networkNotificationCount=useRecoilValue(networkAtom)
const jobNotificationCount=useRecoilValue(jobAtom)
const homeNotificationCount=useRecoilValue(homeAtom)
const messageNotificationCount=useRecoilValue(messageAtom)


  // const [home, setHome] = useState(second)
  // const [network, setNetwork] = useState(second)
  // const [jobs, SetJobs] = useState(second)
  // const [messages, setMessages] = useState(second)
// const totalNotification =useMemo(()=>{
// return networkNotificationCount+jobNotificationCount+homeNotificationCount+messageNotificationCount
// },[ networkNotificationCount,jobNotificationCount,homeNotificationCount,messageNotificationCount])

const totalNotification=useRecoilValue(totalNotificationSelector)
  return (
    <>
      <button>Home({homeNotificationCount>=100?'99+':homeNotificationCount})</button>
      <button>Network({networkNotificationCount>=100?'99+':networkNotificationCount})</button>
      <button>Jobs({jobNotificationCount>=100?'99+':jobNotificationCount})</button>
      <button >Messages({messageNotificationCount>=100?'99+':messageNotificationCount})</button>
      <button>Me({totalNotification})</button>
{/* <ButtonUpdate/> */}
    </>
  )
}

// function ButtonUpdate(){
//   const setMessageAtomCount=useSetRecoilState(messageAtom)
//   return (
//     <button onClick={()=>setMessageAtomCount(C=>C+1)}>me</button>
//   )
// }

