import React from 'react'
import { useTheme } from 'Components/Theme'
import { useLang } from 'Components/Lang'
import Link from 'next/link'

const Logo = ({ location = 'header' }) => {
  const { darkmode } = useTheme()
  const { lang } = useLang()
  let logoPath
  let logotypePath

  switch (location) {
    case 'footer':
      logoPath = `abroadexam/logo/logo.svg`
      break
    case 'header':
      logoPath = `abroadexam/logo/logo.svg`
      logotypePath = `abroadexam/logo/${lang}/logotype-${
        darkmode ? 'dark' : 'light'
      }.svg`
      break
    case 'context':
    default:
      break
  }

  return (
    <Link href="/">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <img src={logoPath} alt="abroadexam logo" />
        <img
          src={logotypePath}
          style={{ marginTop: '5px' }}
          alt="abroadexam logotype"
        />
      </div>
    </Link>
  )
}

export default Logo
