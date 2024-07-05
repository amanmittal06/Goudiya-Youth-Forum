import ChapterCard from "./ChapterCard";
import GoudiyaYouthForum from './Images/GoudiyaYouthForum.png' 
import DelhiChapter from './Images/DelhiChapter.png'
import NoidaChapter from './Images/NoidaChapter.png'
import InternationalChapter from './Images/InternationalChapter.png'

const chapters = [
    {poster: DelhiChapter , title: 'GYF DELHI' , address: "Shri Raman Vihari Goudiya Math, B-3 Block, Janakpuri, New Delhi" , timming: 'Every Saturday, 4 PM - 5:30 PM'},
    {poster: NoidaChapter, title: 'GYF NOIDA' , address: "Shri Vinod Vihari Goudiya Math, Q-29, Sector-12, Noida" , timming: 'Every Sunday, 10:30 AM - 12:00 AM'},
    {poster: InternationalChapter, title: 'GYF INTERNATIONAL' , address: null , timming: 'Every Sunday, 12 PM onwards'}
];
const Chapters = () =>{

    return(
        chapters.map((chapter)=>(<ChapterCard key={chapter.title} chapter={chapter}></ChapterCard>))
    )

}

export default Chapters