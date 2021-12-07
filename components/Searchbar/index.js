import { useTranslation } from 'i18n'
import React from 'react'
import styles from './Searchbar.module.css'

const Searchbar = ({ lang = 'en', darkmode = false }) => {
  const { t } = useTranslation('common')
  return (
    <div className={styles.container}>
      <form>
        <input type="text" placeholder={t('search')} />
        <button
          type="submit"
          style={lang === 'fa' ? { right: '-3rem' } : { left: '-3rem' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.434"
            height="20.434"
            viewBox="0 0 20.434 20.434"
          >
            <g transform="translate(1.5 1.5)">
              <path
                d="M19.445,11.972A7.472,7.472,0,1,1,11.972,4.5,7.472,7.472,0,0,1,19.445,11.972Z"
                transform="translate(-4.5 -4.5)"
                fill="none"
                stroke={darkmode ? '#A0C34D' : '#009ac4'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                d="M29.038,29.038l-4.063-4.063"
                transform="translate(-12.225 -12.225)"
                fill="none"
                stroke={darkmode ? '#A0C34D' : '#009ac4'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </g>
          </svg>
        </button>
        <select
          style={
            lang === 'fa'
              ? { backgroundPositionX: '1rem' }
              : { backgroundPositionX: '95%' }
          }
        >
          <option value={0}>{t('all-courses')}</option>
          <option value={1}>TOEFL</option>
          <option value={2}>IELTS</option>
          <option value={3}>GRE</option>
        </select>
      </form>
    </div>
  )
}

export default Searchbar
