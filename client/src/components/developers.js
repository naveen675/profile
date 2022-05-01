import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';


function Developers() {
    
    const navigate = useNavigate();

    const [developers,setDevelopers] = useState([]);

    const fetchAvailableDevelopers = () => {
        fetch('/api/list/developers').then(
            (response) => {return response.json()}
        ).then(
            (data) => { setDevelopers(data) }
        )
    };


    useEffect(() => {
        fetchAvailableDevelopers();
    },[])


  return (
    <div>
        <h2>Developers</h2>
        {
            developers.map((developer,index) => {
                const {id, avatar_url} = developer;

                return(
                    <div key={index}>
                        <button onClick={() => {navigate(`devinfo/${id}`)}}>{id}</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Developers
