import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';


function Developers(props) {
    
    const navigate = useNavigate();

    const developers = props.developers


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
