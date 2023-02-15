import { HomeOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <nav className='navbar navbar-expand-sm mt-3'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#mynavbar'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='mynavbar'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item home-button'>
                <Link to='/' className='nav-link'>
                  <HomeOutlined className='button-home'/>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/skills' className='nav-link'>
                  Skills
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/workHistory' className='nav-link'>
                  Work History
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='./education' className='nav-link'>
                  Education
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='nav-link'>
                  More About Myself
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
