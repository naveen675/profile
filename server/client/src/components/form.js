import React,{useState} from 'react';
import LinkedInIcon from '../Images/Icons/Profile/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import GithubIcon from '../Images/Icons/Profile/iconfinder_github_317712.png';
import CodechefIcon from '../Images/Icons/Profile/codechef-1324440139527402917_32.png';
import HackerRankIcon from '../Images/Icons/Profile/iconfinder_160_Hackerrank_logo_logos_4373234.png';
 import MediumIcon from '../Images/Icons/Profile/iconfinder_Circled_Medium_svg5_5279113.png';
import TwitterIcon from '../Images/Icons/Profile/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';

function Form(props) {


    const DeveloperAdded = props.DeveloperAdded;
    const HandleClick = props.HandleClick;
  
    const [githubId, setGitId] = useState("");
    const [linkedinId, setLinkedinId] =useState("");
    const [codechefId, setCodechefId] = useState("");
    const [hackerrankId, setHackerrankId] = useState("");
    const [twiterId, setTwiterId] = useState("");
    const [mediumId, setMediumId] = useState("");
    const [isPostReqComplete, setPostReqComplete] = useState(false);


    const ClearFormData = () => {
      setGitId('');
      setHackerrankId('');
      setLinkedinId('');
      setMediumId('');
      setTwiterId('');
    }

    useState(() => {
      ClearFormData();
    },[])
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

    if(githubId === ''){
      alert('Please provide Github ID');
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };


    const SendFormData = () => {fetch(`/api/create/developer/`, requestOptions)
      .then((response) => {return response}).then(() => {setPostReqComplete(true)}).then(() => {
          
          DeveloperAdded();
          
          });
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
    <form className="devAddform" >
    
        <div className='item'>
        <label htmlFor='gitin'>
        <img src={GithubIcon} alt='github' id='giticon' />
            Github <span className='star'>*</span>
        </label>
        <br/>
         <input type='text' className='gitin' value={githubId} onChange = {(event) => setGitId(event.target.value)} />
      </div>

      <div className='item'>
        <label htmlFor='linkedin'>
            <img src={LinkedInIcon} alt='linkedin' id='linkedicon'  />
            Linkedin 
        </label >
        <br />
      
        <input type='text' className='linkedin' value={linkedinId} onChange = {(event) => setLinkedinId(event.target.value)} />
      </div>
      <div className='item'> 
        <label htmlFor='codechefin'  >
            <img src={CodechefIcon} alt='codechef' id='codecheficon' />
            Codechef
        </label >
        <br />
        <input type='text' className='codechefin' value={codechefId} onChange = {(event) => setCodechefId(event.target.value)} />
      </div>
      <div className='item'>
        <label htmlFor='hackerin'>
            <img src={HackerRankIcon} alt='hackerrank' id='hackericon' />
            HackerRank
        </label>
        <br />
        <input type='text' className='hackerin' value={hackerrankId} onChange = {(event) => setHackerrankId(event.target.value)} />
      </div>
      <div className='item'>
        <label htmlFor='twiterin'>
            <img src={TwitterIcon} alt='twitter' id='twitericon' />
            Twitter
        </label>
        <br/>
        <input type='text' className='twiterin' value={twiterId} onChange = {(event) => setTwiterId(event.target.value)} />
      </div>
      <div className='item'>
        <label htmlFor='mediumin'>
            <img src={MediumIcon} alt='medium' id='mediumicon' />
            Medium
        </label>
        <br />
        
      <input type='text' className='mediumin' value={mediumId} onChange = {(event) => setMediumId(event.target.value) }/>
    </div>
      <button id={'devformsubmit'} type='submit' onClick={HandleSubmit} >Submit</button>
      <button id={'devformcancel'} onClick={ClearFormData}> Cancel </button>
    </form>
  );
}

export default Form;
