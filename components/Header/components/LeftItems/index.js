import { Button, useTheme } from '@material-ui/core'
import { useAuth } from 'Components/Auth'
import Link from 'next/link'
import React, { useEffect } from 'react'

const LeftItems = ({ login, logout, register, dashboard }) => {
  const theme = useTheme()
  const auth = useAuth()

  useEffect(() => {
    console.log(auth.isLoggedIn)
  }, [auth.isLoggedIn])

  return (
    <>
      {!auth.isLoggedIn ? (
        <div>
          <Button onClick={() => auth.login()} style={{ marginRight: '20px' }}>
            {login}
          </Button>
          <Link href="/register">
            <Button
              disableElevation
              variant="contained"
              style={theme.palette.accent}
            >
              {register}
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <Button onClick={() => auth.logout()} style={{ marginRight: '20px' }}>
            {logout}
          </Button>
          <Link href="/dashboard">
            <Button
              disableElevation
              variant="contained"
              style={theme.palette.accent}
            >
              {dashboard}
            </Button>
          </Link>
        </div>
      )}
    </>
  )
}

export default LeftItems
