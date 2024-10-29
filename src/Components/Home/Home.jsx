import Header from "../Header"
import WelcomeMsgAndIntro from "./WelcomeMsgAndIntro"
import ChaptersSection from "./ChaptersSection"
import FooterSection from "./FooterSection"
import RecentActivities from "./RecentActivities"
import styles from './Home.module.css'
import { IoMdArrowDropup } from "react-icons/io";





const Home  = () =>{

   const handleOnClick = () =>{

    scrollTo({
      top:0,
      behavior: 'smooth'
    })

   }
   return(
    <div style={{overflow:'hidden'}}>
      <Header></Header>
      <WelcomeMsgAndIntro></WelcomeMsgAndIntro>
      <RecentActivities></RecentActivities>
      <ChaptersSection></ChaptersSection>
      <center><button className={styles.backToTop} onClick={handleOnClick}>Back To Top<IoMdArrowDropup/></button></center>
      <FooterSection></FooterSection>
    </div>
   )
}

export default Home