import React from 'react'
import authContext from '../Context'
import useProvideAuth from './useProvideAuth'

const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export default ProvideAuth
