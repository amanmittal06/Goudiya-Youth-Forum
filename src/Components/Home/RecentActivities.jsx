import Carousel from './Carousel';
import Image from './Images/Jhinjholi.jpg'
import Image2 from './Images/Jhinjholi2.jpg'
import Image3 from './Images/Jhinjholi3.jpg'
import styles from './RecentActivities.module.css'

const slides = [
  { image: Image, title: 'Slide 1' },
  { image: Image2, title: 'Slide 2' },
  { image: Image3, title: 'Slide 3' }
  // Add more slides as needed
];

const RecentActivities=()=>{

    return(
        <center className={styles.recentActivitiesContainer}>
            <div className={styles.heading}>Recent Activities</div>
            <Carousel slides={slides}></Carousel>
            <div className={styles.title}>Jhinjholi Yatra 2024</div>
            <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ratione eaque quas, nemo unde consectetur, ex laboriosam deleniti provident dolor autem distinctio suscipit sapiente libero aperiam doloremque eius, impedit consequatur?</div>
        </center>
    )

}

export default RecentActivities