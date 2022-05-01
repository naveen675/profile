import React,{useState} from 'react'


function Form() {



    const [githubId, setGitId] = useState("");
    const [linkedinId, setLinkedinId] =useState("");
    const [codechefId, setCodechefId] = useState("");
    const [hackerrankId, setHackerrankId] = useState("");
    const [twiterId, setTwiterId] = useState("");
    const [mediumId, setMediumId] = useState("");
    const [isPostReqComplete, setPostReqComplete] = useState(false);


    const HandleSubmit = (e) => {

        e.preventDefault();

        var data = {
      "github_id": githubId,
      "linkedin_id": linkedinId,
      "codechef_id": codechefId,
      "hackerrank_id": hackerrankId,
      "twitter_id": twiterId,
      "medium_id": mediumId
    }


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };


    const SendFormData = () => {fetch(`/api/create/developer/`, requestOptions)
      .then((response) => {return response.json()}).then(() => {setPostReqComplete(true)});
        // console.log(` git : ${githubId} linkedin:${linkedinId} codechef: ${codechefId} hackerran: ${hackerrankId} tritter: ${twiterId} medium: ${mediumId}`);
}


    (! isPostReqComplete) && SendFormData();
}





  
    if(isPostReqComplete){

        return (
            
            <h1>Form Submitted</h1>
        )
    }

    return (
    <form className="devAddform" onSubmit={HandleSubmit}>
    
        <div>
        <label>
        {/* <img src={giticon} alt='github' id='giticon' /> */}
            Github
        </label>
         <input type='text' className='gitin' value={githubId} onChange = {(event) => setGitId(event.target.value)} />
      </div>
      <div>
        <label >
            {/* <img src={linkedicon} alt='linkedin' id='linkedicon'  /> */}
            Linkedin
        </label >
      
        <input type='text' id='linkedin' value={linkedinId} onChange = {(event) => setLinkedinId(event.target.value)} />
      </div>
      <div>
        <label >
            {/* <img src={codecheficon} alt='codechef' id='codecheficon' /> */}
            Codechef
        </label >
        <input type='text' id='codechefin' value={codechefId} onChange = {(event) => setCodechefId(event.target.value)} />
      </div>
      <div>
        <label >
            {/* <img src={hackericon} alt='hackerrank' id='hackericon' /> */}
            HackerRank
        </label>
        <input type='text' id='hackerin' value={hackerrankId} onChange = {(event) => setHackerrankId(event.target.value)} />
      </div>
      <div>
        <label >
            {/* <img src={twitericon} alt='twitter' id='twitericon' /> */}
            Twitter
        </label>
        <input type='text' id='twiterin' value={twiterId} onChange = {(event) => setTwiterId(event.target.value)} />
      </div>
      <div>
        <label >
            {/* <img src={mediumicon} alt='medium' id='mediumicon' /> */}
            Medium
        </label>
        
      <input type='text' id='mediumin' value={mediumId} onChange = {(event) => setMediumId(event.target.value) }/>
    </div>
      <button id={'devformsubmit'} type='submit' >Submit</button>
      <button id={'devformcancel'} > Cancel </button>
    </form>
  );
}

export default Form;
