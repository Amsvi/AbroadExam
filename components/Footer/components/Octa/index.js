import React from 'react'

const Octa = () => {
  return (
    <>
      <div className="octa">
        <img src="abroadexam/images/elements/octa.svg" />
      </div>
      <style jsx>
        {`
          .octa {
            position: absolute;
            bottom: 10rem;
            right: 30rem;
            height: 200px;
            animation: float 7s infinite ease-out;
          }

          @keyframes float {
            0% {
              transform: translateY(0);
              transform: translateX(0);
            }

            50% {
              transform: translateX(0rem) translateY(10rem);
            }

            100% {
              transform: translateY(0);
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  )
}

export default Octa
