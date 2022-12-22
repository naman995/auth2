import React from 'react'

const Button = ({text}) => {
  return (
    <div className='mx-auto'>
      <button className='bg-gray-400 p-4 rounded-xl text-center'>{text}</button>
    </div>
  )
}

export default Button
