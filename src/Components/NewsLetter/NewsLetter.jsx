import axios from "axios"
import TopBar from "./TopBar"
import LatestRealease from "./LatestRealease"
import VoulmesAndSubscription from "./VoulumesAndSubscription"
import EditorialCommittee from "./EditorialCommittee"
import { useEffect, useState } from "react"




const Newsletter = () =>{

    let [latestNewsletter, setLatestNewsletter] = useState([]);
    let [response, setResponse] = useState([]);

    const fetchNewsletter = async() =>{
     try {
        const res = await axios.get(`https://gyf-backend.vercel.app/newsletters/latest`);
        setResponse(res);
        let newsletter = [
          {id:response._id, title:`GYF NEWSLETTER VOLUME-${response.volume}`, description: response.description, coverPage: response.coverImage, downloadLink: response.address}
        ];
        setLatestNewsletter(newsletter)
     } catch (error) {
        console.error('Error while fetching user details:', error);
     }
    }

    useEffect(()=>{
      fetchNewsletter();
    }, [])

   
  
   
    return(
        <>
          <TopBar title={`MONTHLY NEWSLETTER`}></TopBar>
          <LatestRealease latestNewsletter={latestNewsletter}></LatestRealease>
          <VoulmesAndSubscription></VoulmesAndSubscription>
          <EditorialCommittee></EditorialCommittee>
        </>
    )
}

export default Newsletter