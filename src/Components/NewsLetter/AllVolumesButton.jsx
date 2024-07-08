import { Link } from 'react-router-dom'
import styles from './AllVolumesButton.module.css'
const AllVolumesButton =()=>{

    return(

        <div className={styles.allVolumes}>
          <p className={styles.text}><Link className={styles.allVolumesLink} to="/newsletter/archives" >Click here</Link> for previous volumes</p>
          
        </div>
    )

}
export default AllVolumesButton