import React from 'react'

const Auth = ({ children}) => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-yellow-600'>Welcome to ShopNest</h1>
        {children}
    </div>
  )
}

export default Auth