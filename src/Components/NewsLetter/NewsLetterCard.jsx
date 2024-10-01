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
              {newsletter.description && <ReadMore sliceSize={100}>{newsletter.description}</ReadMore>}
              <a href={newsletter.downloadLink} className={styles.downloadButton}>Download</a>
            </div>

        ))
    )

}
export default NewsLetterCard