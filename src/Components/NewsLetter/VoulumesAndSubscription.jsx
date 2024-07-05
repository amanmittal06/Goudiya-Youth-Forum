import styles from './VolumesAndSubscription.module.css'
import AllVolumesButton from './AllVolumesButton' 
import Subscription from './Subscription'
const VoulmesAndSubscription = () => {

    return(
        <div className={styles.volumesAndSubscriptionContainer}>
          <p className={styles.aboutHeading}>About Monthly Newsletter!</p>  
          <p className={styles.text}>
          Our monthly newsletter is your gateway to staying connected and informed about all the exciting activities and insights from the Goudiya Youth Forum.
          </p>
          <Subscription></Subscription>
          <AllVolumesButton></AllVolumesButton>
                    
        </div>

    )

}

export default VoulmesAndSubscription