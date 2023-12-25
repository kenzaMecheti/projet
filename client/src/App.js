// import "./App.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Login from "./pages/Login";
// import Email from "./pages/Email";
// import Inbox from "./pages/Inbox";
// import Layout from "./pages/layout";
// import Register from "./pages/Register";
// import Home from "./pages/Home";
// import './Login.css';
// // import './Register.css';
// import './Inbox.css';
// import './Email.css';
// // import Email from "../../server/models/Email";
// // import Profile from "./pages/Profile";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//         <Route path="/Register" element={<Register />}></Route>
//           <Route path="/" element={<Login />}></Route>
//           <Route path="/Inbox" element={<Inbox />}></Route>
//           <Route path="/Email" element={<Email />}></Route>
//           {/* <Route path="profile/:userId" element={<Profile />}></Route> */}
//           <Route path="/layout" element={<layout />}>
//             <Route index element={<Home />}></Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// // import logo from './logo.svg';
// // import './pages/Login';
// // import './Login.css';
// // import './Home.css';
// // // import './Register.css';
// // import React from 'react';
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import Login from './pages/Login';
// // import Register from './pages/Register';
// // import Home from './pages/Home';
// // import Chat from './pages/Chat';
// // import './Chat.css';
// // function App() {
// //   return (

// //    <BrowserRouter>
// //    <Routes>
// //     <Route path='/Login' element={<Login/>}></Route>
// //     <Route path='/' element={<Register/>}></Route>
// //     <Route path='/Home' element={<Home/>}></Route>
// //     <Route path='/Chat' element={<Chat/>}></Route>
// //     {/* <Route path='/Chat' element={<Chat/>}></Route> */}

// //    </Routes>
// //    </BrowserRouter>

// //   );
// // }

// // export default App;
import React, { createContext } from "react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./pages/Login";
import Layout from "./pages/layout";
import Register from "./pages/Register";

import Home from "./pages/Home";
import Acceuil from "./pages/Acceuil";
import "./Login.css";
import "./Register.css";
import "./Acceuil.css";
import PersisteLogin from "./hooks/PersisteLogin";

export const Appcontext = createContext();

function App() {
  const [token, setToken] = useState("");

  return (
    <Appcontext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route exact path="/" element={<Acceuil />}></Route>

          <Route element={<PersisteLogin />}>
            <Route path="/Home" element={<Home />}></Route>
          </Route>
          {/* <Route path='/Home' element={<Home/>}></Route> */}
          {/* <Route path='/Chat' element={<Chat/>}></Route>
    
    <Route exact path="/NewMessage" element={ <NewMessage/> }></Route> */}

          {/* <Route exact path="/ForgetPasswordPage" element={ <ForgetPasswordPage/> }></Route>          */}
        </Routes>
      </BrowserRouter>
    </Appcontext.Provider>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//         <Route path="/Register" element={<Register />}></Route>
//           <Route path="/Login" element={<Login />}></Route>
//           <Route path="/" element={<LandingPage />}></Route>
//           {/* <Route path="profile/:userId" element={<Profile />}></Route> */}
//           <Route path="/layout" element={<layout />}>
//             <Route index element={<Home />}></Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;

// import logo from './logo.svg';
// import './pages/Login';
// import './Login.css';
// import './Home.css';
// // import './Register.css';
// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Home from './pages/Home';
// import Chat from './pages/Chat';
// import './Chat.css';
// function App() {
//   return (

//    <BrowserRouter>
//    <Routes>
//     <Route path='/Login' element={<Login/>}></Route>
//     <Route path='/' element={<Register/>}></Route>
//     <Route path='/Home' element={<Home/>}></Route>
//     <Route path='/Chat' element={<Chat/>}></Route>
//     {/* <Route path='/Chat' element={<Chat/>}></Route> */}

//    </Routes>
//    </BrowserRouter>

//   );
// }

// export default App;
