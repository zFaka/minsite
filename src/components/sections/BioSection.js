import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/sectionsStyle.css';


export const BioSection = () => {
  return (
    <Link to='/bio' className='del-style'>
      <h1 className='wow-at-first-sight '>
        FAKA
      </h1>
    </Link>
  )
}
