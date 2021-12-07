import React from 'react'
import Logo from '../Logo'
import styles from './Header.module.css'
import Navbar from '../Navbar'
import Searchbar from '../Searchbar'
import BRContent from './components/BRContent'
import BLContent from './components/BLContent'
import LeftItems from './components/LeftItems'
import { useTheme } from 'Components/Theme'
import { useLang } from 'Components/Lang'
import { useTranslation } from 'i18n'

const Header = () => {
  const { darkmode } = useTheme()
  const { lang } = useLang()
  const { t } = useTranslation('common')
  return (
    <header
      className={styles.container}
      style={{
        backgroundImage: `url(/abroadexam/images/elements/logo-header-bg-${
          darkmode ? 'dark' : 'light'
        }.svg)`,
        backgroundPositionX: lang === 'en' ? 'left' : 'right',
      }}
    >
      <div className={styles.top_container}>
        <div className={styles.item_right}>
          <Logo />
        </div>
        <div className={styles.item_middle}>
          <Navbar />
          <Searchbar lang={lang} darkmode={darkmode} />
        </div>
        <div className={styles.item_left}>
          <LeftItems
            login={t('login')}
            logout={t('logout')}
            register={t('register')}
            dashboard={t('dashboard')}
          />
        </div>
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.bottom_right}>
          <BRContent />
        </div>
        <div className={styles.bottom_left}>
          <BLContent lang={lang} />
        </div>
      </div>
    </header>
  )
}

export default Header
