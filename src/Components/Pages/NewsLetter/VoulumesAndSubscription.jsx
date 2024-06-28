import styles from './VolumesAndSubscription.module.css'
import AllVolumesButton from './AllVolumesButton' 
import Subscription from './Subscription'
const VoulmesAndSubscription = () => {

    return(
        <div className={styles.volumesAndSubscriptionContainer}>
          <p className={styles.aboutHeading}>About Monthly Newsletter!</p>  
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem architecto quis soluta facilis earum assumenda quisquam commodi reprehender.
          </p>
          <Subscription></Subscription>
          <AllVolumesButton></AllVolumesButton>
                    
        </div>

    )

}

export default VoulmesAndSubscription