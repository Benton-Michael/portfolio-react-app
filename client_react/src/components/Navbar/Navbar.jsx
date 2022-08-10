import React from 'react'

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={images} alt="logo" />
        </div>
        <ul>
            {[]}
        </ul>
    </nav>
  )
}

export default Navbar