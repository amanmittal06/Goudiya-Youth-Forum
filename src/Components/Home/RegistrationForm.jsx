/* eslint-disable react/prop-types */
import styles from './RegistrationForm.module.css'
import Poster from './Images/Poster.png'
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'



const RegistrationForm = () =>{

    const location = useLocation();
    const {chapterValue = ""} = location.state;

    console.log(chapterValue);

      const initialUserData = {fullName: "" , mobile: "" , email : "" , chapter : chapterValue }

      const [userData, setUserData] = useState(initialUserData);

      function handleChange(e){
          setUserData(
            {...userData, [e.target.name]:e.target.value}
          )
      }
    
      const addUser =  async () =>{

        try{
          const user = await axios.post('https://gyf-backend.vercel.app/users' , userData);
          console.log(user);
        }
        catch(err){
          console.log(err);
        }
         
      }
    function handleSubmit(event){
      event.preventDefault();
      addUser();
      setUserData(initialUserData);
      alert('Registration Succesful');
      
    }

    return(
        <div className={styles.formContainer}>
            <div className={styles.cancelButton}><RxCross2 onClick={()=>{history.back()}}/></div>
            <img src={Poster} alt="" width="100%"/>
          <form action='#' method='post' id="registrationForm" className={styles.registrationForm}>
            
            <label className={styles.labels} htmlFor="fullName">Full name</label><br />
            <input className={styles.inputs} type="text" name='fullName' value={userData.fullName} id='fullName'placeholder='Enter your full name' required onChange={(event)=>{handleChange(event)}}/><br />
            <label className={styles.labels} htmlFor="mobile">Mobile no.</label><br />
            <input className={styles.inputs} type="tel" name='mobile' value={userData.mobile} id="mobile" placeholder='Enter your mobile no.' required onChange={(event)=>{handleChange(event)}}/><br />
            <label className={styles.labels} htmlFor="email">Email</label><br />
            <input className={styles.inputs} type="email" name='email' value={userData.email}  id="email" placeholder='Enter your email address' onChange={(event)=>{handleChange(event)}}/><br />
            <label className={styles.labels} htmlFor="chapter">Select chapter</label><br />
            <select className={styles.inputs} name='chapter' id="chapter" defaultValue={userData.chapter}  required onChange={(event)=>{handleChange(event)}}>
               <option value="" disabled >Select chapter</option>
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