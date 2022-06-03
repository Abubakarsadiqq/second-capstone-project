import React from 'react';


const Welcome = () => {
 let userName= JSON.parse(sessionStorage.getItem("userDetails"));

  return (
    <div>Welcome on board {userName.email}</div>

       )
}



export default Welcome