/* eslint-disable */
// Your code with the problematic require() statements
/* eslint-enable */

    // <div class="flex items-center justify-center h-screen">
    //   <div class="w-full max-w-xs basis ">
    //     <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto" onSubmit={onSubmit}>
    //       <div class="mb-4">
    //         <label
    //           class="block text-gray-700 text-sm font-bold mb-2"
    //           for="username"
    //         >
    //           E-MAIL
    //         </label>
    //         <input
    //           class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="username"
    //           type="text"
    //           placeholder="Username"
    //           onChange={changeEmail}
    //         ></input>
    //          {formErrors.email && <span class="text-red-600"> {formErrors.email} </span>}
    //       </div>
    //       <div class="mb-6">
    //         <label
    //           class="block text-gray-700 text-sm font-bold mb-2"
    //           for="password"
    //         >
    //           Password
    //         </label>
    //         <input
    //           class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    //           id="password"
    //           type="password"
    //           placeholder="******************"
    //           onChange={changePassword}
    //         ></input>
    //         {formErrors.password && <span class="text-red-600"> {formErrors.password} </span>}
    //       </div>
    //       <div class="flex items-center justify-between">
          
    //         <button
    //           class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //           type="submit"
    //         >
    //           Connexion
    //         </button>
           
    //         <a
    //           class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
    //           href="#"
    //         >
    //           Mot de passe oublié ?
    //         </a>
    //       </div>
    //     </form>
    //     <p class="text-center text-gray-500 text-xs">
    //       &copy; Nom de l'application .js
    //     </p>
    //   </div>
    // </div>










































// import React from "react";
// // import axios from "axios";

// function Login() {
//     const onSubmit = (e) => {
//         e.preventDefault();

//         // axios.post('URL');
//     };

//     return (
//         <div>
//             <header>
//                 <img src="logo.png" alt="Logo" id="logo" />
//                 <nav>
//                     <ul>
//                         <li><a href="#" id="home">Home</a></li>
//                         <li><a href="#" id="join">Join</a></li>
//                         <li><a href="#" id="aboutUs">About Us</a></li>
//                     </ul>
//                 </nav>
//             </header>
//             <main>
//                 <div className="container1">
//                     <div className="welcome">Hello,<br /> welcome back!</div>
//                     <div className="container2">
//                         <p className="sign-in">Sign in</p>
//                         <input type="text" name="email" placeholder="E-mail" />
//                         <input type="password" name="password" placeholder="Password" />
//                         <p><a href="#" id="forgotPassword">Forgot password?</a></p>
//                         <button className="button" id="login" type="submit">Log in</button>
//                         <p>Not a member yet? <a href="/Register" id="createAccount">Create an account</a></p>
                        
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }

// export default Login;



/* eslint-disable */
// Your code with the problematic require() statements
/* eslint-enable */
import { useState, React } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { Appcontext } from "../App";


function Login() {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const navigate =useNavigate()
   // Définir un tableau pour les erreurs
   const [formErrors, setFormErrors] = useState({})
   const {token,setToken}=useContext(Appcontext)

   const changeEmail = (e) => {
    setEmail(e.target.value)
   }

   const changePassword = (e) => {
    setPassword(e.target.value)
   }

   const onSubmit = (e) => {
    e.preventDefault();
    const errors = {}

    // Validation de l'émail
    if (!email.trim())
        errors.email = "Veuillez renseigner votre email"
    else if (!validateEmail(email.trim()))
        errors.email = "Email incorrect"

    // Validate du mot de passe
    if (!password.trim())
        errors.password = "Veuillez renseigner le mot de passe"
    else if (password.trim().length < 8)
        errors.password = "Le mot de passe est trop court"

    // Enregistrer les erreurs
    setFormErrors(errors);

    if (Object.keys(formErrors).length === 0)
         Login()
  }

  const validateEmail = (email) => {
    // Expression régulière simple pour une adresse email
    const regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return String(email)
        .toLowerCase()
        .match(
            regExp
        );
  };
  console.log('token',token)

  const Login = () => {

    axios.post("http://localhost:5000/guest/login", {
        email: email,
        password: password,
    }, 
    
    { withCredentials:true
    }
    
    ).then((res) => {
   setToken(res?.data?.accesToken)
   navigate('/Home')

    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className="page-login">
            {/* ... */}
            <h1>--- Start your journey now---<h6> Dive into the world of communication! <br></br>Join us in the realm of quick messages, lively conversations, <br></br>and seamless connections. Connect now and experience the thrill <br></br> of real-time messaging. 💬</h6></h1>
            <form onSubmit={onSubmit}>
              <p className="title">Login now </p>
                <p>
                    <label> </label><br/>
                    <input
                        type="text"
                        name="Email"
                        placeholder="username"
                        value={email}
                        onChange={changeEmail}
                        className={formErrors.email ? 'errors' : ''}
                        required
                    />
                    {formErrors.email && <span class="error">{formErrors.email}</span>}

                </p>
                <p>
                  <labe></labe>
                   
                    <br></br>
                    <input
                        type="password"
                        name="password"
                        placeholder="*******************"
                        value={password}
                        onChange={changePassword}
                        className={formErrors.password ? 'errors' : ''}
                        required
                    />
                     <a
                     className="motdepasse"
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800  "
                    href="#"
                >
                      Mot de passe oublié ?
                </a>
                    {formErrors.password && <span class="errors"> {formErrors.password} </span>}

    
                </p>
                
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                    <h4>First time? <Link to="/Register">Create an account .</Link></h4>
                    
                
                </p>
               
               
            </form>
            <h2><Link to="/">Home </Link></h2>
          
        </div>
    // <div class="flex items-center justify-center h-screen">
    //   <div class="w-full max-w-xs basis ">
    //     <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto" onSubmit={onSubmit}>
    //       <div class="mb-4">
    //         <label
    //           class="block text-gray-700 text-sm font-bold mb-2"
    //           for="username"
    //         >
    //           E-MAIL
    //         </label>
    //         <input
    //           class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="username"
    //           type="text"
    //           placeholder="Username"
    //           onChange={changeEmail}
    //         ></input>
    //          {formErrors.email && <span class="text-red-600"> {formErrors.email} </span>}
    //       </div>
    //       <div class="mb-6">
    //         <label
    //           class="block text-gray-700 text-sm font-bold mb-2"
    //           for="password"
    //         >
    //           Password
    //         </label>
    //         <input
    //           class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    //           id="password"
    //           type="password"
    //           placeholder="******************"
    //           onChange={changePassword}
    //         ></input>
    //         {formErrors.password && <span class="text-red-600"> {formErrors.password} </span>}
    //       </div>
    //       <div class="flex items-center justify-between">
          
    //         <button
    //           class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //           type="submit"
    //         >
    //           Connexion
    //         </button>
           
    //         <a
    //           class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
    //           href="#"
    //         >
    //           Mot de passe oublié ?
    //         </a>
    //       </div>
    //     </form>
    //     <p class="text-center text-gray-500 text-xs">
    //       &copy; Nom de l'application .js
    //     </p>
    //   </div>
    // </div>
  );
}

export default Login;










































// import React from "react";
// // import axios from "axios";

// function Login() {
//     const onSubmit = (e) => {
//         e.preventDefault();

//         // axios.post('URL');
//     };

//     return (
//         <div>
//             <header>
//                 <img src="logo.png" alt="Logo" id="logo" />
//                 <nav>
//                     <ul>
//                         <li><a href="#" id="home">Home</a></li>
//                         <li><a href="#" id="join">Join</a></li>
//                         <li><a href="#" id="aboutUs">About Us</a></li>
//                     </ul>
//                 </nav>
//             </header>
//             <main>
//                 <div className="container1">
//                     <div className="welcome">Hello,<br /> welcome back!</div>
//                     <div className="container2">
//                         <p className="sign-in">Sign in</p>
//                         <input type="text" name="email" placeholder="E-mail" />
//                         <input type="password" name="password" placeholder="Password" />
//                         <p><a href="#" id="forgotPassword">Forgot password?</a></p>
//                         <button className="button" id="login" type="submit">Log in</button>
//                         <p>Not a member yet? <a href="/Register" id="createAccount">Create an account</a></p>
                        
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }

// export default Login;
