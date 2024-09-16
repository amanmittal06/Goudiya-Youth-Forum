/* eslint-disable react/prop-types */
import styles from './ChapterCard.module.css'
import { MdLocationOn } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
import { useNavigate } from 'react-router-dom';



const ChapterCard = ({chapter}) =>{

    const navigate = useNavigate();

    function handleOnClick(){
        navigate('/register' , {state: {chapterValue:chapter.title}});
    }

    return(
        <div className={styles.cardContainer}>
            <img className={styles.poster} src={chapter.poster} alt="No img found"/>
            <div className={styles.chapterDescription}>
                <div className={styles.chapterTitle}>{chapter.title}</div>
                <div className={styles.address}>{chapter.address==undefined? <div><SiGooglemeet/>&nbsp;<div>Online through Google Meet</div></div> : <div><MdLocationOn></MdLocationOn>&nbsp;<div>{chapter.address}</div></div> }</div>
                <div className={styles.timming}><MdAccessTimeFilled/> <div>{chapter.timming}</div></div>
            </div>
            <button className={styles.registrationButton} onClick={()=>{handleOnClick()}}>Register</button>
            {/* <Link to={{pathname:'/register' , state: selectedChapter}} className={styles.registrationButton}>Register</Link> */}
        </div>
    )

}

export default ChapterCard