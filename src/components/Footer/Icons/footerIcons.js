import React from 'react'

const FooterIcons = ({e}) => {
  return (
    <div className='mx-1 d-flex align-items-center justify-content-center Icons'>
      <a href={e.link} target='_blank'>
      <img src={e.img}/>
      </a>
    </div>
  )
}

export default FooterIcons