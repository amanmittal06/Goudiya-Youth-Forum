import vol10CoverPage from './Images/vol10CoverPage.jpg'
import styles from './NewsLetterCard.module.css'
import ReadMore from './ReadMore'
const NewsLetterCard =()=>{

    return(
        <div className={styles.cardContainer}>
            <img className={styles.coverPage} src={vol10CoverPage} alt="No img found"/>
            <div className={styles.title}>
                GYF NEWSLETTER VOLUME-10
            </div>
            <ReadMore>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, culpa impedit voluptatibus suscipit quidem sunt ducimus rem molestias voluptates deserunt doloremque voluptas eaque eligendi tempora harum! Rerum odit quaerat explicabo.</ReadMore>
            <button className={styles.downloadButton}>Download</button>
        </div>
    )

}
export default NewsLetterCard