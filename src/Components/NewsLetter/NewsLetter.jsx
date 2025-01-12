import axios from "axios"
import TopBar from "./TopBar"
import LatestRealease from "./LatestRealease"
import VoulmesAndSubscription from "./VoulumesAndSubscription"
import EditorialCommittee from "./EditorialCommittee"
import { useEffect, useState } from "react"




const Newsletter = () =>{

    let [newsletter, setNewsletter] = useState([]);

    const fetchNewsletter = async() =>{
     try {
        const response = await axios.get(`https://gyf-backend.vercel.app/newsletters/latest`);
        setNewsletter(response.data);
     } catch (error) {
        console.error('Error while fetching user details:', error);
     }
    }

    useEffect(()=>{
      fetchNewsletter();
    }, [])

    const latestNewsletter = [
      {id:'1', title:`GYF NEWSLETTER VOLUME-${newsletter.volume}`, description: newsletter.description, coverPage: newsletter.coverImage, downloadLink: newsletter.address}
    ];
  
   
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