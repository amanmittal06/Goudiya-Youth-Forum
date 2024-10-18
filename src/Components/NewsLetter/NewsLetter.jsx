import TopBar from "./TopBar"
import LatestRealease from "./LatestRealease"
import VoulmesAndSubscription from "./VoulumesAndSubscription"
import LatestReleaseCover from './Images/LatestRelease.jpg'
import LatestRelease from './assets/LatestRelease.pdf'
import EditorialCommittee from "./EditorialCommittee"

const latestNewsletter = [
  {id:'1', title:'GYF NEWSLETTER VOLUME-14', description: undefined, coverPage: LatestReleaseCover, downloadLink: LatestRelease}
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