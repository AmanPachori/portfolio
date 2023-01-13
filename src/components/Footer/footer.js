import React from 'react'
import {contactData} from '../Data/contact'
import FooterIcons from './Icons/footerIcons'
const Footer = () => {
  return (
    <div className='p-2 mt-5 d-flex justify-content-center align-items-center'>
     {
      contactData.map((e)=>{
        return(
          <FooterIcons e ={e}/>
        )
      })
     }
    </div>
  )
}

export default Footer