import React,{ useEffect, useState} from "react";
import validation from "./validation";
const SignupForm=({submitForm})=>{ 

const[values,setValues]=useState({
    fullname:'',
    email:'',
    password:''
});
const[errors,setErrors]=useState({});
const[dataIsCorrect,setDataIsCorrect]=useState(false)
const handleChange=(event)=>{
    setValues({
        ...values,
        [event.target.name]:event.target.value
    });
    setErrors('')
};
const handleSubmit=(event)=>{
    event.preventDefault();
   setErrors(validation(values));
   setDataIsCorrect(true);
};

useEffect(()=>{
  if(Object.keys(errors).length===0 && dataIsCorrect){
    submitForm(true)
  }
},[errors]);

return(
<div className='container'>
    <div className="app-wrapper">
        <div>
            <h1 className="title">Create Account</h1>
        </div>
        <form className="form-wrapper">
            <div className="name">
                <label className="label">Full Name</label>
                <input className="input" type='text'name="fullname" value={values.fullname} onChange={handleChange}/>
                {errors.fullname && <p className="error">{errors.fullname}</p>}
            </div>
            <div className="email">
                <label className="label">Email</label>
                <input className="input" type='email'name="email" onChange={handleChange}/>
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="password">
                <label className="label">Password ??</label>
                <input className="input" type='password'name="password"  onChange={handleChange}/>
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div>
                <button className="submit" onClick={handleSubmit} >sign up</button>
            </div>
        </form>
    </div>
</div>
    )
}
export default SignupForm