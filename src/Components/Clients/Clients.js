import React,{useState,useEffect} from 'react';
import './Clients.css';

const url= process.env.REACT_APP_CLIENTS_URL;
const Clients = () => {
const [clients,setClients]=useState([]);

useEffect(()=>{
     fetch(url)
     .then(res=> res.json())
     .then(data => setClients(data.data));
      

},[])


  return (
    <section className='clients'>
      <h1>CLIENTS</h1>
      <table>
        <thead>
          <th>Fullname</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Image</th>
        </thead>
        <tbody>
          {
            clients ?  clients.map((client,index)=>(
              <tr key={index}>
               <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                
                <td><img  src={client.image} alt="img"/></td>
               </tr>

                  )) : null
               }
           </tbody>

        </table>

    </section>

     )
};

export default Clients