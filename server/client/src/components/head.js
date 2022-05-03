import React from 'react';
import DevImg from '../Images/Icons/Icon/undraw_dev_productivity_umsq 1.png';

function Head() {
  return (
    <div className='header'>
      <div className='item'>
          <h3 className='heading'>The Developer Repository</h3>
      </div>
      <div className='item'>
          <img src={DevImg} alt="Developer Profile" />
      </div>
    </div>
  )
}

export default Head
