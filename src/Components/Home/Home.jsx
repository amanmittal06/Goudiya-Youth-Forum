import Header from "../Header"
import WelcomeMsgAndIntro from "./WelcomeMsgAndIntro"
import ChaptersSection from "./ChaptersSection"
import FooterSection from "./FooterSection"
import RecentActivities from "./RecentActivities"
import styles from './Home.module.css'
import { IoMdArrowDropup } from "react-icons/io";
import Carousel from "./Carousel"

import Image1 from './Images/Home1.jpg'
import Image2 from './Images/Home2.jpg'
import Image3 from './Images/Home3.jpg'
import Image4 from './Images/Jhinjholi.jpg'
import Image5 from './Images/Jhinjholi2.jpg'
import Image6 from './Images/Jhinjholi3.jpg'

const slides = [
  { image: Image1, title: 'Slide 1' },
  { image: Image2, title: 'Slide 2' },
  { image: Image3, title: 'Slide 3' },
  { image: Image4, title: 'Slide 4' },
  { image: Image5, title: 'Slide 5' },
  { image: Image6, title: 'Slide 6' },
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