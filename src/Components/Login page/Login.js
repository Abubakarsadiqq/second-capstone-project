import React,{useState,useEffect} from 'react';
import './Login.css';
import{Link} from 'react-router-dom';

function Login(){
const [data,setData]= useState({});
const [formValid,setFormValid] =useState(false);
const [form,setForm] =useState({
          email:"",
          password:""
      });
      
      useEffect(()=>{
          if(form.email !== "" &&
               form.password !==""){
               setFormValid(true);
                  }
            else{
               setFormValid(false);
      
            }
           },[form.email,
             form.password]);
      
      const handleChange=(e)=>{
          setForm({
              ...form,
               [e.target.name]:e.target.value})
      
           };
      
      const submitHandle=(e)=>{
            e.preventDefault();
             sessionStorage.setItem("userDetails",JSON.stringify({...form}));
             window.location ="/profile";
        
             } ;

        //const submit=(e)=>{
        //   e.preventDefault();
        //   setData({... form})
        // 
        //}
      
    return(
      <section className='login'>
           <h1>Admin Login Page</h1>
        <div className='login-card'>
           <form autoComplete='on' onSubmit={submitHandle}>
                 <input type="email" name='email' required placeholder='Enter email' onChange={handleChange} />
                   <input  type="password" name='password' required placeholder='enter password' onChange={handleChange} />
                    <button type="submit" >Sign In</button>
                </form>
                  <Link to='/help'> need help?</Link> 
                </div>
             
            
            </section>




         )
             };


    export default Login