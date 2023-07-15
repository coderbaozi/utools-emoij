import React from 'react'

interface IProps {
  children?: React.ReactNode
}
const Layout: React.FC<IProps> = ({ children }) => {
  return <div className='bg-light-300'>{children}</div>
}

export default Layout
