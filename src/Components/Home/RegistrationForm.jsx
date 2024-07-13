/* eslint-disable react/prop-types */
import styles from './RegistrationForm.module.css'
import Poster from './Images/Poster.png'
import { RxCross2 } from "react-icons/rx";


const RegistrationForm = () =>{
    
    function handleSubmit(event){
        event.preventDefault();
    }

    return(
        <div className={styles.formContainer}>
            <div className={styles.cancelButton}><RxCross2 onClick={()=>{history.back()}}/></div>
            <img src={Poster} alt="" width="100%"/>
          <form action="#" method='post' id="registrationForm" className={styles.registrationForm}>
            
            <label className={styles.labels} htmlFor="fullName">Full name</label><br />
            <input className={styles.inputs} type="text"  id='fullName'placeholder='Enter your full name' /><br />
            <label className={styles.labels} htmlFor="mobile">Mobile no.</label><br />
            <input className={styles.inputs} type="tel" id="mobile" placeholder='Enter your mobile no.'/><br />
            <label className={styles.labels} htmlFor="email">Email</label><br />
            <input className={styles.inputs} type="email"  id="email" placeholder='Enter your email address'/><br />
            <label className={styles.labels} htmlFor="chapter">Select chapter</label><br />
            <select className={styles.inputs} id="chapter" value="">
               <option value="" disabled selected>Select chapter</option>
               <option value="delhi">Delhi Chapter</option>
               <option value="noida">Noida Chapter</option>
               <option value="international">International Chapter</option>
            </select><br></br>
           
            <button className={styles.submitButton} onClick={(event)=>{handleSubmit(event)}}>Submit</button>

          </form>
        </div>
    );

}

export default RegistrationForm