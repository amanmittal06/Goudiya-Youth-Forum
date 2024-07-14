import { Link } from 'react-router-dom'
import styles from './AllVolumesButton.module.css'
import { FaExternalLinkAlt } from "react-icons/fa";

const AllVolumesButton =()=>{

    return(

        <div className={styles.allVolumes}>
          <p className={styles.text}><Link className={styles.allVolumesLink} to="/newsletter/archives" >Click here</Link> for previous volumes</p>
          
        </div>
    )

}
export default AllVolumesButton