import React from 'react'

const FooterIcons = ({e}) => {
  return (
    <div className='mx-2 Icons'>
      <a href={e.link} target='_blank'>
      <img src={e.img}/>
      </a>
    </div>
  )
}

export default FooterIcons