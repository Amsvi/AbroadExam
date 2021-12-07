import { useAuth } from 'Components/Auth'
import { useLang } from 'Components/Lang'
import { useTheme } from 'Components/Theme'
import React, { useEffect, useState } from 'react'
import PirateGuide from '../Layouts/PirateGuide'
import ExtraSteps from './components/ExtraSteps'
import RegisterForm from './components/RegisterForm'

const RegisterPage = () => {
  const { darkmode } = useTheme()
  const { lang } = useLang()
  const { registerStep } = useAuth()
  const [title, setTitle] = useState('So you wanna be a pirate')

  useEffect(() => {
    switch (registerStep) {
      case 1:
        setTitle('Verify your identity - Step 2/5')
        break
      case 2:
        setTitle('Which best describes you? - Step 3/5')
        break
      default:
        setTitle("Let's join our crew in 5 easy steps")
        break
    }
  }, [registerStep])

  return (
    <PirateGuide>
      <div className="container">
        <div className="title">
          <img
            src={`abroadexam/images/elements/${
              darkmode ? 'dark' : 'light'
            }/seagull.svg`}
            alt="ae seagull"
          />
          <p style={{ textAlign: lang === 'fa' ? 'right' : 'left' }}>{title}</p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {registerStep < 2 ? <RegisterForm /> : <ExtraSteps />}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 500px;
            width: 100%;
          }
          .title {
            background-image: url(/abroadexam/images/backgrounds/${darkmode
              ? 'dark'
              : 'light'}/dialogue2.svg);
            background-size: cover;
            padding: 0 2rem;
            max-width: 700px;
            display: flex;
            justify-content: center;
          }

          .title img {
            position: absolute;
            margin-top: -5.8rem;
            transform: scaleX(${lang === 'en' ? 1 : -1});
          }

          .title p {
            transition: color 0.3s;
            color: ${darkmode ? '#428dff' : '#D1F3FC'};
            font-size: 1.5rem;
            width: 100%;
            display: flex;
            justify-content: flex-start;
          }
        `}
      </style>
    </PirateGuide>
  )
}

export default RegisterPage
