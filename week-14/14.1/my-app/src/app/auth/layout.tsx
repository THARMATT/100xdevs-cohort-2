import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='text-center '>
      20% off
      {children}
    </div>
  )
}

export default layout
