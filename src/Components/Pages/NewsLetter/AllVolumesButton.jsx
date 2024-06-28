import styles from './AllVolumesButton.module.css'
const AllVolumesButton =()=>{

    return(

        <div className={styles.allVolumes}>
          <p className={styles.text}><a className={styles.allVolumesLink} href='#'>Click here</a> for previous volumes</p>
          
        </div>
    )

}
export default AllVolumesButton