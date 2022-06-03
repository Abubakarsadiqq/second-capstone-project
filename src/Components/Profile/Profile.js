import React from 'react';
import './Profile.css';
import{CgProfile} from 'react-icons/cg';
import{FaHome} from 'react-icons/fa';
import{FaApple} from 'react-icons/fa';
import{BiLogOut} from 'react-icons/bi';
import{AiOutlineTeam} from 'react-icons/ai';
import{BsPersonPlus} from 'react-icons/bs';
import Home from '../Home/Home';
import Team from '../Team/Team';
import Clients from '../Clients/Clients';
import Products from '../Product/Product';
import Login from '../Login page/Login';
import {BrowserRouter,Route,Routes,Link}from 'react-router-dom';

const Profile=()=>{

  //  let userDetails= JSON.parse(sessionStorage.getItem("userDetails"));
   return(
  <BrowserRouter>
     <Routes>
         <Route path='/' element={<Home/>} exact/>
          <Route path='/team' element={<Team/>} />
          <Route path='/clients' element={<Clients/>} />
         <Route path='/products' element={<Products/>} />
         <Route path='/login' element={<Login/>} />
     </Routes> 
       <section className='profile'>
            <h1><CgProfile /> Abubakar</h1>
               <div className='links'>
                  <ul> 
                     <li><Link to='/'> <FaHome/> Home</Link></li> 
                     <li><Link to='/team'> <AiOutlineTeam/> Team</Link></li> 
                     <li><Link to='/clients'> <BsPersonPlus/>Clients</Link></li> 
                     <li><Link to='/products'><FaApple/>Products</Link></li> 
          
                   </ul>
               </div>
               <Link to='/login'><button className='logout'><BiLogOut/> Log out</button></Link>  

         </section>
         
      </BrowserRouter>
           

    
            )
     };



export default Profile