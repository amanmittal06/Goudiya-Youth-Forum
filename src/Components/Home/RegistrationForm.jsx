/* eslint-disable react/prop-types */
import styles from './RegistrationForm.module.css'
import Poster from './Images/Poster.png'
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';



const RegistrationForm = () =>{

    const location = useLocation();
    const {chapterValue = undefined} = location.state;
    console.log(chapterValue);
    
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
            <select className={styles.inputs} id="chapter" defaultValue={chapterValue}>
               {/* <option value="" disabled selected>Select chapter</option> */}
               <option value="GYF DELHI">Delhi Chapter</option>
               <option value="GYF NOIDA">Noida Chapter</option>
               <option value="GYF INTERNATIONAL">International Chapter</option>
            </select><br></br>
           
            <button className={styles.submitButton} onClick={(event)=>{handleSubmit(event)}}>Submit</button>

          </form>
        </div>
    );

}

export default RegistrationForm