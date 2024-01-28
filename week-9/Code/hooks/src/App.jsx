import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  return (
    <>
      Timer is at {count}
    </>
  )
}

export default App

const  useInterval=(callback,delay)=>{
useEffect(() => {
  const intervalID=setInterval(callback,delay);
  return ()=>clearInterval(intervalID);
}, [callback,delay])

}