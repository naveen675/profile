import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';

function DevInfo() {

    const {devId} = useParams();
    const [developerData,setDeveloperData] = useState([]);
    const [dataAvailable,setDataAvailable] = useState(false);

    const GetData = () => {

        fetch(`/api/developers/${devId}`).then(
            (response) => {return response.json()}
        ).then(
            (data) => {setDeveloperData(data)}
        ).then(
            () => {
                setDataAvailable(true);
            }
        )
    };

    console.log(developerData);
    useEffect(() => {
        GetData();
    },[])

    

  


    if(dataAvailable){

    const {repos} = developerData;
    return (
        <div>
        <h1>{`${developerData.length}`}</h1>
        {/* {
            
            developerData.map((info) => {
                const {id, avatar_url} = info;
                <div key={id}>
                    <p>{id}</p>
                    </div>
            })
        } */}
        <p>{developerData['id']}</p>
        {
            repos.map((repo) => {
                const {name,html_url,description,updated_at} = repo;

                return (
                    <div>
                        <h1>Repo</h1>
                        <p>{`name : ${name}`}</p>
                        <p>{`url: ${html_url}`}</p>
                        <p>{`desc: ${description}`}</p>
                        <p>{`updated: ${updated_at}`}</p>
                        </div>
                )
            })
        }
        </div>
    )
}
return (
    <h1>Data Not Available</h1>
)
}

export default DevInfo
