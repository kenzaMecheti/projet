// import React, { useState, useRef, useEffect } from 'react';

// import 'remixicon/fonts/remixicon.css';
// import IconButton from '@mui/material/IconButton';
// import { Button } from '@mui/material';
// import ButtonGroup from '@mui/material/ButtonGroup';

// const Discussion = () => {
//     const [friends, setFriends] = useState([
//         { id: 1, name: 'sidisaid', online: true, image: 'url_de_l_image' },
//         { id: 2, name: 'lyna', online: false, image: 'url_de_l_image' },
//         { id: 3, name: 'amii', online: true, image: 'url_de_l_image' },
//         { id: 4, name: 'Amiami', online: true, image: 'url_de_l_image' },
//         { id: 5, name: 'isii', online: true, image: 'url_de_l_image' },
//         { id: 6, name: 'isi', online: false, image: 'url_de_l_image' },
//     ]);

//     const handleVideoCall = (friendId) => {
        
//         console.log({ friendId });
//     };

//     const [messages, setMessages] = useState([]);

//     const [inputMessage, setInputMessage] = useState('');
//     const conversationRef = useRef(null);

//     useEffect(() => {
        
//         if (conversationRef.current) {
//             conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
//         }
//     }, [messages]);

//     const handleSendMessage = () => {
//         if (inputMessage.trim() !== '') {
//             const newMessage = {
//                 text: inputMessage,
//                 sender: 'user',
//                 time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//             };
//             setMessages([...messages, newMessage]);
//             setInputMessage('');
//         }
//     };

//     const handleInsertPhoto = () => {

//     };
//     const fileInputRef = useRef(null);

//     const handleAttachFile = () => {
        
//         if (fileInputRef.current) {
//             fileInputRef.current.click();
//         }
//     };

//     return (
//         <div className="whatsapp-container">
//             <div className='vraiSideBar'>
//                 <Sidebar />
//             </div>
//             <div className="sidebar">
//                 <div className="header">
//                     <h3>lynasidisaid@gmail.com</h3>
//                 </div>
//                 <div className="friends-list">
//                     <h3>Connected Friends</h3>
//                     <ul>
//                         {friends.map((friend) => (
//                             <li key={friend.id} className={friend.online ? 'online' : 'offline'}>
//                                 <img src={friend.image} alt={friend.name} />
//                                 <span>{friend.name}</span>
//                                 {friend.online && <button onClick={() => handleVideoCall(friend.id)}><i className="ri-circle-fill"></i></button>}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>


//             <div className="main-content">
//                 <div className="header">
//                     <div>
//                         <h2>Lyna Sidisaid</h2>
//                         <h6>Online</h6>
//                     </div>
//                     <div className='navbarmessage'>
//                         <Button>
//                             <i className="ri-video-add-line"></i>
//                         </Button>
//                         <Button>
//                             <i className="ri-phone-fill"></i>
//                         </Button>
//                         <Button>
//                             <i className="ri-search-line"></i>
//                         </Button>
//                         <Button>
//                             <i className="ri-settings-5-line"></i>
//                         </Button>
//                     </div>
//                 </div>
//                 <div className="chat-container">
//                     {/* ... Other elements ... */}
//                     <div className="conversation" ref={conversationRef}>
//                         {messages.map((msg, index) => (
//                             <div
//                                 key={index}
//                                 className={`message ${msg.sender === 'user' ? 'sent' : 'received'}`}
//                             >
//                                 <p>{msg.text}</p>
//                                 <span className='time'>{msg.time}</span>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="input-area">
//                         <input
//                             type="text"
//                             value={inputMessage}
//                             placeholder="Write a Message..."
//                             onChange={(e) => setInputMessage(e.target.value)}
//                         />
//                         <ButtonGroup >
//                             <Button onClick={handleSendMessage}><i className="ri-send-plane-fill"></i></Button>
//                         </ButtonGroup>


//                         <label htmlFor="file-input">
//                             <input
//                                 id="file-input"
//                                 type="file"
//                                 accept="image/*"
//                                 style={{ display: 'none' }}
                            
//                             />
//                             <span role="img" aria-label="Attach File">

//                                 <i className="ri-folder-fill"></i>

//                             </span>
//                         </label>



//                         <IconButton><i className="ri-emotion-line"></i></IconButton>
//                         <IconButton><span role="img" aria-label="Insert Photo" onClick={handleInsertPhoto}>
//                             <i className="ri-image-line"></i>
//                         </span></IconButton>

//                     </div>
//                 </div>
//             </div>
//             <div className="contactInfo">
//                 <div className='contactInfoHaut'>
//                     <h3>Contact Infos</h3>
//                     <IconButton>
//                         <i className="ri-settings-5-line"></i>
//                     </IconButton>
//                 </div>
//                 <div>
//                     <h4>lynasidisaid@gmail.com</h4>
//                     <h4>+2130541864597</h4>
//                 </div>
//                 <IconButton>
//                     <i className="ri-video-add-line"></i>
//                 </IconButton>
//                 <IconButton>
//                     <i className="ri-phone-fill"></i>
//                 </IconButton>
//                 <div className='contactinfoMiddll'>
//                 <h4>About</h4>
//                 <h4>Hi there i am using </h4>
//                 </div>
                
//                 <div>
             
//                   <h4>Medias and docs</h4>
//                 </div>
//                 <div className='contactInfobas'>
//                     {/* <Button><i className="ri-file-reduce-line"></i>Block</Button>
//                     <Button><i className="ri-delete-bin-line"></i>Delete</Button> */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Discussion;
