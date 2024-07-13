import styles from "../Store/Store.module.css"
import { Link } from "react-router-dom"


const About = () =>{
    return(
      <center className={styles.storeContainer}>
      <div className={styles.sorry}>Will update soon!!</div>  
      <div className={styles.sorryMessage}></div>
      <Link className={styles.homeButton} to='/'>Home</Link>
      </center>
    )
}
export default About