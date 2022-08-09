import React, { useState } from "react";
import SignupForm from "./SignUpForm";
import SignupFormSuccess from "./SignupFormSuccess";
const Form=()=>{
  const[formIsSunmited,setFormIsSubmited]=useState(false);
  const submitForm=()=>{
    setFormIsSubmited(true);
  };
  return(
   <div>
   {!formIsSunmited ? (<SignupForm submitForm={submitForm}/>):(<SignupFormSuccess/>)}
   </div>
  )
}
export default Form