import React from 'react'

const CopyrightFooter = ({ darkmode = false }) => {
  return (
    <>
      <p>Copyright 2020 AbroadExam</p>
      <img
        src={
          darkmode
            ? 'abroadexam/images/elements/leaf-dark.svg'
            : 'abroadexam/images/elements/leaf.svg'
        }
      />
      <ul>
        <li>Privacy Policy</li>
        <li>Customer Support</li>
        <li>Career</li>
      </ul>
    </>
  )
}

export default CopyrightFooter
