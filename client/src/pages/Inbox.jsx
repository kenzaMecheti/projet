import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { FaBoxOpen, FaCheck, FaEnvelopeOpen, FaSearch, FaTrash } from 'react-icons/fa';


function Inbox() {
  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  let [currentPage, setCurrentPage] = useState(1)

  const getAllEmails = () => {
    const options = {
      method: 'GET',
      url: `${process.env.REACT_APP_API_LINK}emails/inbox`,
      headers: { 'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage["token"]}`,
     },
      params: { pageNumber: currentPage, pageSize: 10, emailReceiver: localStorage["email"] }
    };

    axios.request(options)
      .then(function (res) {
        setData(res.data.emails)
        setTotalPages(res.data.totalPages)
        setCurrentPage(res.data.page)
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  const formatDate = (date) => {
    return date.substring(0, 10) + " " + date.substring(11, 16)
  }
  
  const getNext = () => {
    if(currentPage >= totalPages) return;
    currentPage =  Number(currentPage) + 1
    getAllEmails()
  }

  const getPrevious = () => {
    currentPage =  Number(currentPage) - 1
    if(currentPage < 1) return;
    getAllEmails()
  }

  useEffect(() => {
    getAllEmails()
  }, []);

  return (
    <div className="rounded">
      <table cellSpacing={2} cellPadding={5} border={1} className="border-collapse table-fixed w-full text-sm bg-white text-left">
        <thead>
          <th colSpan={0} className="py-2 px-4 font-semibold text-gray-200 bg-gray-200 "><FaEnvelopeOpen className="text-gray-600 text-sm"></FaEnvelopeOpen></th>
          <th colSpan={2} className="py-2 px-4 font-semibold text-gray-700 bg-gray-200">From</th>
          <th colSpan={5} className="py-2 px-4 font-semibold text-gray-700 bg-gray-200" >Subject</th>
          <th colSpan={2} className="py-2 px-4 font-semibold text-gray-700 bg-gray-200">Date</th>
          <th colspan={1} className="py-2 px-4 font-semibold text-gray-700 bg-gray-200"></th>
        </thead>
        <tbody>
          {data?.map((i) => {
            return (
              <tr>
                <td colSpan={0} className="py-2 px-4 border-b border-gray-200"><span>{i.read === 0 ? '-' : '+'}</span></td>
                <td colSpan={2} className="py-2 px-4 border-b border-gray-200">{i.email_sender}</td>
                <td colSpan={5} className="py-2 px-4 border-b border-gray-200">{i.subject}</td>
                <td colspan={2} className="py-2 px-4 border-b border-gray-200">{formatDate(i.sending_date)}</td>
                <td colspan={1} className="py-2 px-4 border-b border-gray-200 text-right">
                  <p className="flex text-xs">
                    <a href="#"><FaTrash className="text-gray-600 mx-2"></FaTrash></a>
                    <a href="#"><FaSearch className="text-gray-600 mx-2"></FaSearch></a>
                  </p>
                </td>
              </tr>
            );
          })}

        </tbody>
      </table>
      <div className=" float-right mt-2">
        <div class="flex flex-col items-center">
          <div class="inline-flex mt-2 xs:mt-0">
            <button onClick={() => getPrevious()} class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-blue-500 rounded hover:bg-gray-900">
              Prev
            </button>
            <span  class="text-sm text-gray-700 mx-3 my-1">
              Page <span class="font-semibold text-gray-900">{currentPage}</span> / <span class="font-semibold text-gray-900">{totalPages}</span>
            </span>
            <button onClick={() => getNext()} class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-blue-500 border-gray-700 rounded hover:bg-gray-900">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Inbox = () => {
//   const [emails, setEmails] = useState([]);
//   const [optionsVisible, setOptionsVisible] = useState(false);
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   const toggleDropdown = () => {
//     console.log('Dropdown toggled');
//     setDropdownVisible(!dropdownVisible);
//   };
//   const getAllEmails = () => {
//     axios.get('http://localhost:5000/GetUserEmails/')
//       .then(function (response) {
//         setEmails(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     getAllEmails();
//   }, []);

//   const toggleOptions = () => {
//     setOptionsVisible(false);
//     toggleDropdown();
//   };

//   return (
//     <div>
//       <header>
//         <div className="header-content">
//           <div className="search">
//             <input className='searchbar' type="text" placeholder="Search" />
//             <button className='searchbutton'>Search</button>
//           </div>
//           <div className="settings-button">
//             <button><img src='adjustments-horizontal.svg'></img></button>
//           </div>
//           <div className="dropdown" onClick={toggleDropdown}>
//             <img
//               className="profile-picture"
//               src="profilepic.jpg"
//               alt="Profile"
//             />
//             {dropdownVisible && (
//               <div className="dropdown-content">
//                 <p id="emailname">e-mailname@domain.com</p>
//                 <img className="profilepic" src="profilepic.jpg" alt="Profile" />
//                 <button className="manageyouraccount">Manage your account</button>
//                 <div className="listofemailacc">
//                   <button className="youracc">
//                     <img className="profilepicture" src="profilepic.jpg" alt="Profile" />
//                     <p className="text">e-mailname@domain.com</p>
//                   </button>
//                   <button id="boutton">
//                     <img className="icon" src="plus.svg" alt="Plus" />
//                     <p className="text">Add another account</p>
//                   </button>
//                   <button id="boutton">
//                     <img className="icon" src="logout.svg" alt="Logout" />
//                     <p className="text">Log out from all accounts</p>
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>
//       <div className="inbox-container">
//         <table className="inbox-table">
//           <thead>
//             <tr>
//               <th>Sender</th>
//               <th>Subject</th>
//               <th>Content</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* {emails.map((email) => (
//               <tr key={email.id}>
//                 <td>{email.email_sender}</td>
//                 <td>{email.subject}</td>
//                 <td>{email.content}</td>
//               </tr>
//             ))} */}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Inbox;
