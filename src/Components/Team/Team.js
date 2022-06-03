import React,{useEffect,useState} from 'react';
import './Team.css';



function Team (){
const url= process.env.REACT_APP_TEAM_URL; 
const [people,setPeople]=useState([]);

useEffect(()=>{
  fetch(url)
  .then(response => response.json())
  .then(data => setPeople(data.data));
  

    },[]);

return(
  <section className='team'>
    <h1>Team Members</h1>
    <table>
      <thead>
        <tr>
          <th>fullname</th>
          <th>email</th>
          <th>phone number</th>
          <th>gender</th>
          <th>Image</th>
        </tr>
         </thead>

        <tbody>

          {
            people ?
              people.map((person,idx)=>(
                <tr key={idx}>
              <td>
                <span>{person.firstname}</span>
                <span>{person.lastname}</span>
              </td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
              <td>{person.gender}</td>
              <td><img src={person.image} alt="abk"/></td>
             </tr>



              )) : null
            


          }
     
 </tbody>



     


    </table>


  </section>





)





}
   
















export default Team