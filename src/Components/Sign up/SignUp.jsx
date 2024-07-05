import { RxCross2 } from "react-icons/rx";

const SignUp = () =>{

    return(
      <>  
        <RxCross2 onClick={()=>{history.back()}}/>
        Sign-up Form
      </>
    )

}

export default SignUp