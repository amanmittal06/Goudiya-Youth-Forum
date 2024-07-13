import { Link } from "react-router-dom"
import styles from './Store.module.css'

const Store= () =>{
    return(
      
      <center className={styles.storeContainer}>
      <div className={styles.sorry}>Sorry!!</div>  
      <div className={styles.sorryMessage}>Currently we are not selling anything online.</div>
      <Link className={styles.homeButton} to='/'>Home</Link>
      </center>

    )
}

export default Store