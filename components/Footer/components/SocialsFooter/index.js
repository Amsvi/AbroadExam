import React from 'react'
import styles from './SocialsFooter.module.css'

const SocialsFooter = ({ darkmode = false }) => {
  return (
    <>
      <div className={styles.container_socials}>
        <p>1nd Floor, No.21, Africa Road, Tehran, IRAN</p>
        <p>+98 9123455678</p>
        <p>support@abroadexam.com</p>
        <ul style={{ marginTop: '1rem' }}>
          <li>
            <img
              src={`abroadexam/images/elements/${
                darkmode ? 'dark' : 'light'
              }/fb.svg`}
            />
          </li>
          <li>
            <img
              src={`abroadexam/images/elements/${
                darkmode ? 'dark' : 'light'
              }/twitter.svg`}
            />
          </li>
          <li>
            <img
              src={`abroadexam/images/elements/${
                darkmode ? 'dark' : 'light'
              }/linkedin.svg`}
            />
          </li>
          <li>
            <img
              src={`abroadexam/images/elements/${
                darkmode ? 'dark' : 'light'
              }/instagram.svg`}
            />
          </li>
          <li>
            <img
              src={`abroadexam/images/elements/${
                darkmode ? 'dark' : 'light'
              }/youtube.svg`}
            />
          </li>
        </ul>
      </div>
    </>
  )
}

export default SocialsFooter
