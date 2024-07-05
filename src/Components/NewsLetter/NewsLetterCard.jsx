import styles from './NewsLetterCard.module.css'
import ReadMore from './ReadMore';

const NewsLetterCard =({newsletters})=>{ 

    return(
        newsletters.map((newsletter)=>(

            <div key="" className={styles.cardContainer}>
              <img className={styles.coverPage} src={newsletter.coverPage} alt="No img found"/>
              <div className={styles.title}>
                {newsletter.title}
              </div>
              <ReadMore>{newsletter.description}</ReadMore>
              <button className={styles.downloadButton}>Download</button>
            </div>

        ))
    )

}
export default NewsLetterCard