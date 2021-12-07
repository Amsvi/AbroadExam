import { useTheme } from 'Components/Theme'
import React from 'react'
import styles from './BLContent.module.css'

const BLContent = ({ lang = 'en' }) => {
  const { darkmode } = useTheme()
  return (
    <>
      <div className={styles.img_container}>
        {/* TODO change alt */}
        <img
          className={styles.header_img}
          src="abroadexam/images/backgrounds/captainboy.svg"
          alt="AbroadExam is a very complicated platform for English learners and those who want to make progress"
        />
      </div>
      <div
        className="waves"
        style={
          lang === 'fa'
            ? {
                right: '2.5rem',
              }
            : { left: '2.5rem' }
        }
      >
        <div className="wave_one"></div>
        <div className="wave_two"></div>
        <div className="wave_three"></div>
      </div>
      <style jsx>{`
        .waves {
          position: relative;
          bottom: 40px;
          overflow: hidden;
          width: 100%;
        }
        .wave_one {
          position: relative;
          background-image: url(/abroadexam/images/backgrounds/wave-${darkmode
            ? 'dark'
            : 'light'}.svg);
          background-repeat: repeat-x;
          width: 100%;
          height: 100px;
          background-size: 30rem 70px;
          opacity: 1;
          animation-duration: 3s;
          animation: wave 6s linear infinite;
        }
        .wave_two {
          position: relative;
          bottom: 90px;
          background-image: url(/abroadexam/images/backgrounds/wave-${darkmode
            ? 'dark'
            : 'light'}.svg);
          background-repeat: repeat-x;
          width: 100%;
          height: 100px;
          background-size: 30rem 70px;
          opacity: 0.8;
          animation-duration: 7s;
          animation: wave 4s ease-in-out infinite;
        }
        .wave_three {
          position: relative;
          bottom: 12rem;
          background-image: url(/abroadexam/images/backgrounds/wave-${darkmode
            ? 'dark'
            : 'light'}.svg);
          background-repeat: repeat-x;
          width: 100%;
          height: 100px;
          opacity: 0.7;
          background-size: 30rem 70px;
          animation-duration: 7s;
          animation: wave 3s linear infinite;
        }

        @keyframes wave {
          0% {
            background-position: 0 bottom;
          }
          100% {
            background-position: 30rem bottom;
          }
        }
        @media (min-width: 960px) {
          @keyframes wave {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 30rem 0;
            }
          }
        }
      `}</style>
    </>
  )
}

export default BLContent
