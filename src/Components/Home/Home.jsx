import Header from "../Header"
import WelcomeMsgAndIntro from "./WelcomeMsgAndIntro"
import NewsLetter from '../NewsLetter/NewsLetter'
import ChaptersSection from "./ChaptersSection"
import FooterSection from "./FooterSection"
import RecentActivities from "./RecentActivities"


const Home  = () =>{
   return(
    <>
      <Header></Header>
      <WelcomeMsgAndIntro></WelcomeMsgAndIntro>
      <RecentActivities></RecentActivities>
      <ChaptersSection></ChaptersSection>
      <FooterSection></FooterSection>
    </>
   )
}

export default Home