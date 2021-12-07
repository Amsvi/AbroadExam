import React, { useState } from 'react'

const items = [
  {
    id: 0,
    title: 'Current Student',
    image: 'abroadexam/images/elements/extra/current_student.svg',
    hover: 'abroadexam/images/elements/extra/hover/current_student.svg',
  },
  {
    id: 1,
    title: 'Parent or Guardian of current student',
    image: 'abroadexam/images/elements/extra/parent.svg',
    hover: 'abroadexam/images/elements/extra/hover/parent.svg',
  },
  {
    id: 2,
    title: 'Working Professional',
    image: 'abroadexam/images/elements/extra/professional.svg',
    hover: 'abroadexam/images/elements/extra/hover/professional.svg',
  },
  {
    id: 3,
    title: 'Institution Staff',
    image: 'abroadexam/images/elements/extra/staff.svg',
    hover: 'abroadexam/images/elements/extra/hover/staff.svg',
  },
  {
    id: 4,
    title: 'partner',
    image: 'abroadexam/images/elements/extra/partner.svg',
    hover: 'abroadexam/images/elements/extra/hover/partner.svg',
  },
]

const ExtraSteps = () => {
  const [hover, setHover] = useState(null)
  return (
    <div className="container">
      {items.map((item) => (
        <div
          className="item"
          onMouseOver={() => setHover(item.id)}
          onMouseLeave={() => setHover(null)}
          key={item.id}
        >
          <p>{item.title}</p>
          <div>
            <img src={hover === item.id ? item.hover : item.image} />
          </div>
        </div>
      ))}

      <style jsx>{`
        .container {
          display: flex;
          padding: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .item {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 150px;
          height: 180px;
          border-radius: 20px;
          background-color: #e8edfc;
          padding: 0 0.5rem;
          margin: 0.5rem 0.5rem;
          cursor: pointer;
          transition: all 0.3s;
        }
        .item:hover {
          width: 170px;
          height: 200px;
          background-color: #d1f3fc;
          justify-content: center;
        }
        .item:hover p {
          color: #393f4a;
        }
        .item p {
          color: #428dff;
          font-style: italic;
          font-weight: bold;
          text-transform: capitalize;
          font-size: 0.9rem;
          text-align: center;
        }
        .item img {
          width: 75px;
        }
      `}</style>
    </div>
  )
}

export default ExtraSteps
