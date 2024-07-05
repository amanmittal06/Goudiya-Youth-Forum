import Chapters from './Chapters'
import styles from './ChaptersSection.module.css'
const ChaptersSection = () =>{
    return(
        <div className={styles.chaptersSectionContainer}>
            <div className={styles.heading}>Join Our Chapters</div>
            <div className={styles.description}>
            Our Goudiya Youth Forum chapters offer an incredible opportunity for youth to gain clarity and understanding through the study of scriptures. Each chapter provides a supportive community where members can learn and apply principles practically, aiming for ultimate success and happiness. Join a chapter near you and embark on a transformative journey!
            </div>
            <Chapters></Chapters>
        </div>
    )
}

export default ChaptersSection