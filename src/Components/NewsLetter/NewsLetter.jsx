import TopBar from "./TopBar"
import LatestRealease from "./LatestRealease"
import VoulmesAndSubscription from "./VoulumesAndSubscription"
import CoverImageVol16 from './Images/CoverImageVol16.png'
import volume16 from './assets/News Letter Vol - 16.pdf'
import EditorialCommittee from "./EditorialCommittee"

const latestNewsletter = [
  {id:'1', title:'GYF NEWSLETTER VOLUME-16', description: undefined, coverPage: CoverImageVol16, downloadLink: volume16}
];


const Newsletter = () =>{
   
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