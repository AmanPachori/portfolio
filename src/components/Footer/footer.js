import React from 'react'
import {contactData} from '../Data/contact'
import FooterIcons from './Icons/footerIcons'
const Footer = () => {
  return (
    <div className='p-2 border-top d-flex justify-content-center'>
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