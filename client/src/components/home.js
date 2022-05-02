import Developers from './developers';
import React, { useState,useEffect} from 'react';
import Form from './form'
//import {Developers} from './developers';

function Home(props) {


  const [developers,setDevelopers] = useState([]);
  const [NewDeveloperAdded,setNewDeveloperAdded] = useState(false);

  const DeveloperAdded = () => {
    setNewDeveloperAdded(true);
  }

  const HandleClick = (status) => {
    setIsAddDevClicked(status);

  }

    const fetchAvailableDevelopers = () => {
        fetch('/api/list/developers').then(
            (response) => {return response.json()}
        ).then(
            (data) => { setDevelopers(data) }
        )
    }


    useEffect(() => {
        fetchAvailableDevelopers();
    },[NewDeveloperAdded])
  

  const[isAddDevClicked, setIsAddDevClicked] = useState(false);
  return (
      <React.Fragment>
        <input type='text' className='searchBox' />
      <Developers developers={developers}/>
      <button onClick={() => {HandleClick(true)}} className='addDevBtn'>Add Profile</button>
      {isAddDevClicked && <Form  DeveloperAdded={DeveloperAdded} HandleClick={HandleClick}/>}
    </React.Fragment>
  )
}

export default Home
