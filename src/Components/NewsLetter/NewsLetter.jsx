import TopBar from "./TopBar"
import LatestRealease from "./LatestRealease"
import VoulmesAndSubscription from "./VoulumesAndSubscription"
import vol10CoverPage from './Images/vol10CoverPage.jpg'
import EditorialCommittee from "./EditorialCommittee"

const latestNewsletter = [
  {id:'1', title:'GYF NEWSLETTER VOLUME-10', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, culpa impedit voluptatibus suscipit quidem sunt ducimus rem molestias voluptates deserunt doloremque voluptas eaque eligendi tempora harum! Rerum odit quaerat explicabo.', coverPage: vol10CoverPage}
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