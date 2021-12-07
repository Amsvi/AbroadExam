import React from 'react'
import styles from './FooterMainContent.module.css'

const FooterMainContent = () => {
  return (
    <>
      <div className={styles.footer_column}>
        <h3>Navigation</h3>
        <p>Home</p>
        <p>About Us</p>
        <p>Contacts</p>
        <p>Exams</p>
        <p>FAQ</p>
        <p>Sign Up</p>
      </div>
      <div className={styles.footer_column}>
        <h3>Exams</h3>
        <p>TOEFL</p>
        <p>IELTS</p>
        <p>GRE</p>
        <p>GMAT</p>
        <p>Placement tests</p>
        <p>etc...</p>
      </div>
      <div className={styles.footer_column}>
        <h3>Customers</h3>
        <p>Register</p>
        <p>Login</p>
        <p>Help center</p>
        <p>Prices</p>
      </div>
      <div className={styles.footer_column}>
        <h3>Partners</h3>
        <p>Contact Us</p>
        <p>What other partners say</p>
        <p>News</p>
        <p>Stats</p>
      </div>
    </>
  )
}

export default FooterMainContent
