
import styles from './Subscription.module.css'

const Subscription =()=>{

    return(

        <div className={styles.subscription}>
          <p className={styles.text}>Subscribe now to ensure you receive all the enriching content straight to your inbox and stay connected with the Goudiya Youth Forum!</p>
          <form className={styles.subscriptionForm} action="#">
            <input className={styles.emailInput} type="email" name="email" id="email" placeholder="Enter your email"/>
            <button className={styles.subscriptionButton}>Subscribe</button>
          </form>
        </div>
    )

}
export default Subscription