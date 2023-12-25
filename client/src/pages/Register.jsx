import { useState, React } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


const options = [

  {
    label: "Masculin",
    value: "masculin",
  },
  {
    label: "Féminin",
    value: "feminin",
  },
  {
    label:"Rather not to say",
  }

];

function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [gender, setGender] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const [formErrors, setFormErrors] = useState({})

  console.log('formerrors',formErrors)
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  const changeLastname = (e) => {
    setLastName(e.target.value)
  }

  const changeFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const changeUsername = (e) => {
    setUsername(e.target.value)
  }

  const changePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }

  const changeGender = (e) => {
    setGender(e.target.value)
  }

  const changeBirthDate = (e) => {
    setBirthDate(e.target.value)
  }

  const Register = () => {

    axios.post("http://localhost:5000/guest/register", {
      first_name: firstName,
      last_name: lastName,
      username: username,
      phone_number: phoneNumber,
      gender: gender,
      email: email,
      password: password,
      birth_date: birthDate
    },{withCredentials:true}).then(() => {
      window.location.href = "/login"
    }).catch((error) => {
      console.log(error)
    })

  }

  const validateEmail = (email) => {
    // Expression régulière simple pour une adresse email
    const regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return String(email)
      .toLowerCase()
      .match(

        regExp
      );
  }
 
  
 


  const onSubmit = (e) => {
    // La validation fu formulaire

    // Annuler l'envoi du formulaire avec e.preventDefault()
    e.preventDefault();
    const errors = {}
    // Validation du nom utilisateur
    if (!firstName.trim())
      errors.firstName = "First Name is required"
    else if (firstName.trim().length < 3)
      errors.firstName = "Username is too short"

    if (!lastName.trim())
      errors.lastName = "Last Name is required "
    else if (lastName.trim().length < 3)
      errors.lastName = "The name is too short"

    if (!username.trim())
      errors.username = "Username is required"
    else if (username.trim().length < 3)
      errors.username = "The Username is too short"

    if (!phoneNumber.trim())
      errors.phoneNumber = "Phone Number is required"
    else if (phoneNumber.trim().length < 9)
      errors.phoneNumber = "The Phone Numberis too short"

    if (!gender) {
        errors.gender = 'Gender is required';
    }
    if (!birthDate) {
      errors.birthDate = 'Birth Date is required';
  }
    // Validate du mot de passe
    if (!password.trim())
      errors.password = "password is required"
    else if (password.trim().length < 8)
      errors.password = "The password  Numberis too short"

    // Validation de l'émail
    if (!email.trim())
      errors.email = "email is required"
    else if (!validateEmail(email.trim()))
      errors.email = "Email incorrect"

    
    // Enregistrer les erreurs
    setFormErrors(errors);

    if (Object.keys(formErrors).length === 0)
      Register()
    else
      alert("")
  }
  console.log('formerrors',formErrors)



  return (
    <div className="pageRegister.withBackground">
            <div className='titre '>
                 <h3 className='text-container'>New here? Join us!<br /> <h6>Sign up today to become a part of our community and <br></br>enjoy all the benefits our platform has to offer.</h6></h3>
            </div>
            <div className="pageRegister">
                
                <form onSubmit={onSubmit} className="flex">
                   <div>
                   <h2>Join us</h2>

   
                    <p>
                            <label></label><br />
                            <input 
                            
                                id="first_name"
                                type="text"
                                placeholder="First Name"
                                onChange={changeFirstName}
                                value={firstName} 
                            /> 
                            
                             {formErrors.firstName && <span className="error"> {formErrors.firstName} </span>}
                           
                        </p> 
                        <p>
                            <label></label><br />
                            <input
                                id="name"
                                type="text"
                                placeholder="Last Name"
                                onChange={changeLastname}
                                value={lastName}
                            />
                            {formErrors.lastName && <span className="error"> {formErrors.lastName} </span>}
                        </p>
                    </div>
                    <p>
                        <label></label><br />
                        <input
                            id="username"
                            type="text"
                            placeholder="Username"
                            onChange={changeUsername}
                            value={username}
                        />
                        {formErrors.username && <span className="error"> {formErrors.username} </span>}
                        
                    </p>
                    <p>
                        <label></label><br />
                     
                        <select
                        
                         id="gender"
                         type="text" 
                         
                         value={gender} 
                         onChange={changeGender}>
                        {options.map((option) => (
                         <option value={option.value}>{option.label}</option>
                         ))}

                        </select>
                        
                       
                    </p>
                    <p>
                        <label></label><br/>
                        <input
                            id="phone_number"
                            type="number"
                            placeholder="Phone Number"
                            onChange={changePhoneNumber}
                            value={phoneNumber}

                            // className="input"
                            // type="number"
                            // name="phoneNumber"
                            // value={phoneNumber}
                            // onChange={(e) => setPhoneNumber(e.target.value)}
                            // className1={errors.phoneNumber ? 'error' : ''}
                        />
                        {formErrors.phoneNumber && <span className="error"> {formErrors.phoneNumber} </span>}
                    </p>
                   
                    <p>
                        <label></label><br />
                        <input
                            id="first_name"
                            type="date"
                            placeholder="Prénom"
                            onChange={changeBirthDate}
                            value={birthDate}
                        />
                      
                    </p>
                    <p>
    <label></label><br />
    <input
       id="Email address"
       type="text"
       placeholder="Email Address"
       onChange={changeEmail}
      value={email}
    />
    {formErrors.email && <span className="error"> {formErrors.email} </span>}
    
</p>
                  
                    <p>
                        <label></label><br />
                        <input
                            id="Password"
                            type="password"
                            placeholder="Password"
                            onChange={changePassword}
                            value={password}
                        />
                        {formErrors.password && <span className="error"> {formErrors.password} </span>}
                        
                    </p>
                          
                    <p>
                        {/* <label>Confirm Password</label><br />
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={errors.confirmPassword ? 'error' : ''}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "Hide" : "Show"} Password
                        </button>
                        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>} */}
                    </p>
                   
                    <p>
                        <button id="sub_btn" type="submit">Register</button>
                        <h4>Have an account? <Link to="/Login">Sign in Now .</Link></h4>
                    </p>
                </form>
                
            </div>
            <h2><Link to="/">Home </Link></h2>
        </div>

    // <div class="flex items-center justify-center h-screen text-left">
    //   <div class="w-full max-w-xs basis ">
    //     <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto" onSubmit={onSubmit}>
    //       <div class="mb-4">
    //         <label
    //           class="block text-gray-700 text-sm font-bold mb-2"
    //           for="name"
    //         >
    //           Nom
    //         </label>
    //         <input
    //           class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="name"
    //           type="text"
    //           placeholder="Nom"
    //           onChange={changeLastname}
    //           value={lastName}
    //         ></input>
    //         {formErrors.lastName && <span class="text-red-600"> {formErrors.lastName} </span>}
    //       </div>
    //       <div class="mb-3">
    //         <label
    //           class="block text-gray-700 text-sm font-bold mb-2"
    //           for="first_name"
    //         >
    //           Prénom
    //         </label>
    //         <input
    //           class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="first_name"
    //           type="text"
    //           placeholder="Prénom"
    //           onChange={changeFirstName}
    //           value={firstName}
    //         ></input>
    //         {formErrors.firstName && <span class="text-red-600"> {formErrors.firstName} </span>}
    //       </div>
    //       <div class="mb-3">
    //         <label
    //           class="block text-gray-700 text-sm font-bold mb-2"
    //           for="first_name"
    //         >
    //           Date de naissance
    //         </label>
    //         <input
    //           class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="first_name"
    //           type="date"
    //           placeholder="Prénom"
    //           onChange={changeBirthDate}
    //           value={birthDate}
    //         ></input>
    //       </div>
    //       <div class="mb-3">
    //         <label
    //           class="block text-gray-700 text-sm font-bold mb-2"
    //           for="phone_number"
    //         >
    //           Téléphone
    //         </label>
    //         <input
    //           class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="phone_number"
    //           type="text"
    //           placeholder="Prénom"
    //           onChange={changePhoneNumber}
    //           value={phoneNumber}
    //         ></input>
    //         {formErrors.phoneNumber && <span class="text-red-600"> {formErrors.phoneNumber} </span>}
    //       </div>
    //       <div class="mb-3">
    //         <label
    //           class="block text-gray-700 text-sm font-bold mb-2"
    //           for="username"
    //         >
    //           Nom utilisateur
    //         </label>
    //         <input
    //           class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="username"
    //           type="text"
    //           placeholder="Nom utilisateur"
    //           onChange={changeUsername}
    //           value={username}
    //         ></input>
    //         {formErrors.username && <span class="text-red-600"> {formErrors.username} </span>}
    //       </div>
    //       <div class="mb-3">
    //         <label
    //           class="block text-gray-700 text-sm font-bold mb-2"
    //           for="gender"
    //         >
    //           Sexe
    //         </label>
    //         <select id="gender" value={gender} onChange={changeGender}>
    //           {options.map((option) => (
    //             <option value={option.value}>{option.label}</option>
    //           ))}
    //         </select>

    //       </div>
    //       <div class="mb-3">
    //         <label
    //           class="block text-gray-700 text-sm font-bold mb-2"
    //           for="email"
    //         >
    //           Email
    //         </label>
    //         <input
    //           class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    //           id="email"
    //           type="text"
    //           placeholder=""
    //           onChange={changeEmail}
    //           value={email}
    //         ></input>
    //         {formErrors.email && <span class="text-red-600"> {formErrors.email} </span>}
    //       </div>
    //       <div class="mb-3">
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
    //           value={password}
    //         ></input>
    //         {formErrors.password && <span class="text-red-600"> {formErrors.password} </span>}
    //       </div>
    //       <div class="flex items-center justify-between">
    //         <button
    //           class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //           type="submit"
    //         >
    //           Créer un compte
    //         </button>
            
            
    //         {/* </Link> */}
    //         {/* <a
    //           class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
    //           href="#"
    //         >
    //           Se connecter
    //         </a> */}
    //       </div>
    //       <button
    //           class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //           type="submit"
    //         >
    //           Se connecter
    //         </button>
    //     </form>
    //     <p class="text-center text-gray-500 text-xs">
    //       &copy; Nom de l'application .js
    //     </p>
    //   </div>
    // </div>
  );
}

export default Register;
