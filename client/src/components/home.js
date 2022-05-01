
import Develop from './developers';
import React, { useState } from 'react';
import Form from './form'
import {Developers} from './developers';

function Home(props) {

  const [addDevloper,setAddDeveloper] = useState(1);
  const HandleClick = () => {
    setIsAddDevClicked(true);
    setAddDeveloper(addDevloper+1);

  }

  


  const[isAddDevClicked, setIsAddDevClicked] = useState(false);
  return (
      <React.Fragment>
        <input type='text' className='searchBox' />
      <Develop />
      <button onClick={HandleClick} className='addDevBtn'>Add Profile</button>
      {isAddDevClicked && <Form />}
    </React.Fragment>
  )
}

export default Home
