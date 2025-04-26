import axios from "axios"
import TopBar from "./TopBar"
import styles from "./NewsLetter.module.css"
import LatestRealease from "./LatestRealease"
import VoulmesAndSubscription from "./VoulumesAndSubscription"
import EditorialCommittee from "./EditorialCommittee"
import { useEffect, useState } from "react"




const Newsletter = () =>{

    // let [latestNewsletter, setLatestNewsletter] = useState([]);
    // let [response, setResponse] = useState([]);

    // const fetchNewsletter = async() =>{
    //  try {
    //     const res = await axios.get(`https://gyf-backend.vercel.app/newsletters/latest`);
    //     setResponse(res.data[0]);

    //  } catch (error) {
    //     console.error('Error while fetching user details:', error);
    //  }
    // }

    // useEffect(()=>{
    //   fetchNewsletter();
    // }, [])

    // useEffect(()=>{
    //   setLatestNewsletter([
    //     {id:response._id, title:`GYF NEWSLETTER VOLUME-${response.volume}`, description: response.description, coverPage: response.coverImage, downloadLink: response.address}
    //   ])
    // }, [response])

    const latestNewsletter = [
      {id:'1', title:'GYF NEWSLETTER VOLUME-16', description: undefined, coverPage: "/newsletters/CoverImages/CoverImageVol16.png", downloadLink: "/newsletters/volume16.pdf"}
    ];

   
    return(
        <>
          <TopBar title={`MONTHLY NEWSLETTER`}></TopBar>
          <div className={styles.latest}><LatestRealease latestNewsletter={latestNewsletter}></LatestRealease></div>
          {/* {response.volume!=undefined && <div className={styles.latest}><LatestRealease latestNewsletter={latestNewsletter}></LatestRealease></div>} */}
          <VoulmesAndSubscription></VoulmesAndSubscription>
          <EditorialCommittee></EditorialCommittee>
        </>
    )
}

export default Newsletter