import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import EmailIcon from '@mui/icons-material/Email'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <div>
      <div className='contact'>
        <p>
          <a href='tel: 7547773743'>
            <PhoneAndroidIcon /> 754-777-3743
          </a>
        </p>
        <p>
          <a href='mailto:tjpark33026@gmail.com'>
            <EmailIcon /> tjpark33026@gmail.com
          </a>
        </p>
        <p>
          <a
            href='https://github.com/starinuris'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon /> https://github.com/starinuris
          </a>
        </p>
        <p>
          <a
            href='https://www.linkedin.com/in/thomas-park-8833b96a'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon /> https://www.linkedin.com/in/thomas-park-8833b96a/
          </a>
        </p>
      </div>
      <Navbar />
    </div>
  )
}

export default Contact
