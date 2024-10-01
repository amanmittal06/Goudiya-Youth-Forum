import TopBar from "./TopBar"
import LatestRealease from "./LatestRealease"
import VoulmesAndSubscription from "./VoulumesAndSubscription"
import vol13CoverPage from './Images/CoverImageVol13.jpg'
import Vol13 from './assets/Newsletter13.pdf'
import EditorialCommittee from "./EditorialCommittee"

const latestNewsletter = [
  {id:'1', title:'GYF NEWSLETTER VOLUME-13', description: undefined, coverPage: vol13CoverPage, downloadLink: Vol13}
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