import React, { useContext, useRef, useState } from 'react'
import styles from './RegisterForm.module.css'
import { FormikContainer, FormikControl } from 'Components/Formik/Components'
import PirateDialogContext from 'Layouts/AbroadExam/pages/Layouts/PirateGuide/context'
import * as Yup from 'yup'
import { motion } from 'framer-motion'
import { useAuth } from 'Components/Auth'
import { smileyList } from 'util/constants'

const initialValues = {
  emailphone: '',
  password: '',
  confirm: '',
  agreeOption: [],
}

const RegisterForm = () => {
  const { setDialog, rotateSteer, setSmiley } = useContext(PirateDialogContext)
  const {
    register,
    confirmRegister,
    resendConfirmCode,
    registerStep,
    setRegisterStep,
  } = useAuth()

  const resendCodeButton = useRef(null)
  const variants = {
    step0: { x: 0 },
    step1: { x: '-450px' },
  }

  const validationSchema = Yup.object({
    password: Yup.string().min(8, 'password-short').required('required'),
    confirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'passwords-confirm')
      .required('required'),
    agreeOption: Yup.array().required('required'),
  })

  const onSubmit = (submittedData, { resetForm }) => {
    //TODO: disable form until we get response from server
    register(submittedData)
      .then(({ dialog }) => {
        setSmiley(smileyList.teeth)
        setDialog(dialog)
        resetForm()
        rotateSteer()
        setRegisterStep(1)
      })
      .catch(({ dialog }) => {
        setSmiley(smileyList.sad)
        setDialog(dialog)
      })
  }

  const askVerificationCode = () => {
    let id = localStorage.getItem('id')
    if (!id) {
      //TODO: show a new form to provide email or mobile phone
      // navigate user to login page
    } else {
      if (resendCodeButton.current) {
        resendCodeButton.current.disabled = true
      }
      let counter = 60
      var b = setInterval(() => {
        if (resendCodeButton.current) {
          resendCodeButton.current.innerText = `Resend code in ${counter} seconds`
        }
        counter -= 1
      }, 1000)

      setTimeout(() => {
        if (resendCodeButton.current) {
          resendCodeButton.current.disabled = false
          clearInterval(b)
          resendCodeButton.current.innerText = 'Resend the code'
        }
      }, 60000)

      resendConfirmCode(id)
        .then(({ dialog }) => {
          setSmiley(smileyList.sarcastic)
          setDialog(dialog)
        })
        .catch(({ dialog }) => {
          setSmiley(smileyList.inpain)
          setDialog(dialog)
        })
    }
  }
  const onConfirm = (confirmData, { resetForm }) => {
    confirmRegister(confirmData)
      .then(({ dialog }) => {
        resetForm()
        setRegisterStep(2)
        setSmiley(smileyList.lough)
        setDialog(dialog)
      })
      .catch(({ dialog }) => {
        resetForm()
        setSmiley(smileyList.sad)
        setDialog(dialog)
      })
  }

  const checkRegisterStep = () => {
    switch (registerStep) {
      case 0:
        return 'step0'
      case 1:
        return 'step1'
      default:
        'step0'
    }
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          width: '350px',
          overflow: 'hidden',
          direction: 'ltr',
        }}
      >
        <motion.div
          animate={checkRegisterStep()}
          variants={variants}
          style={{ position: 'relative', display: 'flex' }}
        >
          <div style={{ marginRight: '100px' }}>
            <FormikContainer
              formStyle={styles.form}
              submitStyle={styles.submit_button}
              initialValues={initialValues}
              validationSchema={validationSchema}
              callback={onSubmit}
              submitLabel="Sign Up"
            >
              <FormikControl
                tabIndex={1}
                control="emailphone"
                name="emailphone"
                label=""
                type="text"
                placeholder="Email or Phone number"
              />
              <FormikControl
                tabIndex={2}
                control="password"
                name="password"
                label=""
                placeholder="Password"
              />
              <FormikControl
                control="input"
                tabIndex={3}
                type="password"
                name="confirm"
                label=""
                placeholder="Confirm password"
              />
              <FormikControl
                control="checkbox"
                tabIndex={4}
                label=""
                name="agreeOption"
                labelStyle={styles.radio_label}
                options={[
                  {
                    key: `By joining <b>AbroadExam</b>'s pirates club, you agree to our Terms of Use and Privacy Policy`,
                    value: 'value1',
                  },
                ]}
              />
            </FormikContainer>
          </div>
          <div>
            <FormikContainer
              formStyle={styles.form}
              submitStyle={styles.submit_button}
              submitLabel="Confirm"
              initialValues={{ confirm: '' }}
              callback={onConfirm}
            >
              <FormikControl
                control="verification"
                type="text"
                name="confirm"
              />
              <button
                className={styles.submit_button}
                style={{ backgroundColor: '#009AC4' }}
                onClick={(e) => {
                  e.preventDefault()
                  askVerificationCode()
                }}
                ref={resendCodeButton}
              >
                Resend the code
              </button>
            </FormikContainer>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default RegisterForm
