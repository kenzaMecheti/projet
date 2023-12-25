import React, { useEffect } from "react";
import useAuth from '../hooks/useAuth';
 
function Home (){
     const {id,email}=useAuth()
    
    return (
        // html 
        <div>
        <h1> {email}</h1>
        <p> bienvenue dans la page </p>
        </div>
        

    )

    }
export default Home;
// le fichier sois reconnu par les autre fichier