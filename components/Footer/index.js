import React from 'react'
import CopyrightFooter from './components/CopyrightFooter'
import FooterMainContent from './components/FooterMainContent'
import Octa from './components/Octa'
import SocialsFooter from './components/SocialsFooter'
import styles from './Footer.module.css'

const Footer = ({ darkmode = false }) => {
  return (
    <>
      <footer className="footer">
        <div
          className={styles.footer_container}
          style={
            darkmode
              ? {
                  backgroundImage:
                    'url(/abroadexam/images/elements/bottom-shape-inner-dark.svg)',
                }
              : {
                  backgroundImage:
                    'url(/abroadexam/images/elements/bottom-shape-inner.svg)',
                }
          }
        >
          <div className={styles.container_top}>
            <div className={styles.container_main}>
              <FooterMainContent />
            </div>
            <SocialsFooter darkmode={darkmode} />
          </div>
          <div className={styles.container_bottom}>
            <CopyrightFooter darkmode={darkmode} />
          </div>
          <Octa />
        </div>
      </footer>
      <style jsx>
        {`
          .footer {
            position: relative;
            bottom: 0;
            display: flex;
            height: 600px;
            background-image: url(${darkmode
              ? '/abroadexam/images/backgrounds/footer-bg-dark.svg'
              : '/abroadexam/images/backgrounds/footer-bg-light.svg'});
            background-position: bottom right;
            background-size: cover;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </>
  )
}

export default Footer
