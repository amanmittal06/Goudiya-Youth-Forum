import ReadMore from '../NewsLetter/ReadMore'
import Carousel from './Carousel';
import Image from './Images/Jhinjholi.jpg'
import Image2 from './Images/Jhinjholi2.jpg'
import Image3 from './Images/Jhinjholi3.jpg'
import Image4 from './Images/Jhinjholi4.jpg'
import Image5 from './Images/Jhinjholi5.jpg'
import styles from './RecentActivities.module.css'

const slides = [
  { image: Image, title: 'Slide 1' },
  { image: Image2, title: 'Slide 2' },
  { image: Image3, title: 'Slide 3' },
  { image: Image4, title: 'Slide 4' },
  { image: Image5, title: 'Slide 5' }
  // Add more slides as needed
];

const RecentActivities=()=>{

    return(
        <center className={styles.recentActivitiesContainer}>
            <div className={styles.heading}>Recent Activities</div>
            <Carousel slides={slides}></Carousel>
            <div className={styles.title}>Jhinjholi Study Tour 2024</div>
            <div className={styles.description}><ReadMore sliceSize={450}>{`The Jhiljholi Study Tour is a dedicated spiritual retreat focused on deepening participant's understanding of core Vaishnava scriptures such as Shrimad Bhagvatam, Shrii Updeshamrita Grantha by Shrila Rupa Goswami, Bhagavad Gita, and Jaiva Dharma. Guided by the senior devotee Shrila B.V. Padmanabh Maharaj, this program emphasizes sincere study and practical application of daily devotional services as performed in the traditional Matha. It is designed to foster personal spiritual growth while cultivating a sense of community, encouraging participants to move from an individualistic mindset toward a collective goal. By practicing humility, teamwork, and devotion in a structured environment, the retreat helps devotees internalize the teachings of sacred texts and live a life aligned with Vaishnava principles.`}</ReadMore></div>
        </center>
    )

}

export default RecentActivities