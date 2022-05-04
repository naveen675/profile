import Developers from './developers';
import React, { useState,useEffect} from 'react';
import Form from './form';
import Head from './head';
import SearchIcon from '../Images/Icons/Icon/search-24px.svg';
//import {Developers} from './developers';

function Home(props) {


  const [developers,setDevelopers] = useState([]);
  const [NewDeveloperAdded,setNewDeveloperAdded] = useState(false);
  const [searchWord,setSearchWord] = useState('');

  const DeveloperAdded = () => {
    setNewDeveloperAdded(true);
  }

  const HandleClick = (status) => {
    setIsAddDevClicked(status);

  }

  const WordMatch = (event) => {

    setSearchWord(event.target.value);

    
    if(searchWord === ''){

      fetchAvailableDevelopers();
    }

    

    var newDevelopers = [];
    // console.log(word);

    newDevelopers = developers.filter((developer) => {
      return (developer['id'].toLocaleLowerCase().startsWith(searchWord.toLocaleLowerCase()));
    })

    setDevelopers(newDevelopers);
      
    
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
        <Head />
        <div className='explore'>
          <h3>Explore Developer Profiles</h3>
          <hr></hr>
        </div>
        <div className='search'>
          <input type='text' className='searchBox' placeholder='Search For Developer' value={searchWord} onChange={(event) => {setSearchWord(event.target.value)}} />
          <button className='searchBtn' onClick={(event) => {WordMatch(event)}} ><img src={SearchIcon} alt="search" /></button> 
        </div>
      <Developers developers={developers}/>
      <hr></hr>
      <p>Could not find what you are looking for ?</p>
      <button onClick={() => {HandleClick(true)}} className='addDevBtn'>Add developer Info</button>
      {isAddDevClicked && <Form  DeveloperAdded={DeveloperAdded} HandleClick={HandleClick}/>}
      
    </React.Fragment>
  )
}

export default Home
