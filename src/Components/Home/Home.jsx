import Header from "../Header"
import WelcomeMsgAndIntro from "./WelcomeMsgAndIntro"
import ChaptersSection from "./ChaptersSection"
import FooterSection from "./FooterSection"
import RecentActivities from "./RecentActivities"
import styles from './Home.module.css'
import { IoMdArrowDropup } from "react-icons/io";
import Carousel from "./Carousel"

import Image from './Images/Jhinjholi.jpg'
import Image2 from './Images/Jhinjholi2.jpg'
import Image3 from './Images/Jhinjholi3.jpg'

const slides = [
  { image: Image, title: 'Slide 1' },
  { image: Image2, title: 'Slide 2' },
  { image: Image3, title: 'Slide 3' }
  // Add more slides as needed
];

const Home  = () =>{

   const handleOnClick = () =>{

    scrollTo({
      top:0,
      behavior: 'smooth'
    })

   }
   return(
    <>
      <Header></Header>
      <WelcomeMsgAndIntro></WelcomeMsgAndIntro>
      <div style= {{margin:'5%'}}><Carousel slides={slides}></Carousel></div>
      <RecentActivities></RecentActivities>
      <ChaptersSection></ChaptersSection>
      <center><button className={styles.backToTop} onClick={handleOnClick}>Back To Top<IoMdArrowDropup/></button></center>
      <FooterSection></FooterSection>
    </>
   )
}

export default Home