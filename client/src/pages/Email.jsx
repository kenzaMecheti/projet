import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Email = ({ refreshInbox }) => {
  const [email_sender, setEmailSender] = useState('');
  const [email_receiver, setEmailReceiver] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const textareaRef = useRef(null);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const autoAdjustTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // axios.post('http://localhost:5000/email/send-email/', {
    //   email_receiver: emailReceiver,
    //   email_sender: emailSender,
    //   subject: subject,
    //   content: content,
    // })
    // .then(response => {
    //   console.log(response.data);
    //   refreshInbox();
    // })
    // .catch(error => {
    //   console.error(error);
    // });

    // Reset form fields
    // setEmailSender('');
    // setEmailReceiver('');
    // setSubject('');
    // setContent('');
  //   fetch('http://localhost:5000/emails/send-email/', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     email_receiver: email_receiver,
  //     email_sender: email_sender,
  //     subject: subject, //le body de la requete http a envoyer proviennent des données introduites dans le formulaire
  //     content: content
  //   })
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error(error));

  //   setEmailSender('');
  //   setEmailReceiver('');
  //   setSubject('');
  //   setContent('');
    
  //   }
 
  // useEffect(() => {
  //   autoAdjustTextarea();
  // }, [content]);
  fetch('http://localhost:5000/emails/send-email/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email_receiver: email_receiver,
      email_sender: email_sender,
      subject: subject, //le body de la requete http a envoyer proviennent des données introduites dans le formulaire
      content: content
    })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    setEmailSender('');
    setEmailReceiver('');
    setSubject('');
    setContent('');
    
    }

  const getAllUsers = () => {

    
  
    axios.get('http://localhost:5000/emails/')
    .then(function (response) {
      setData(response.data)
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    });
  }

  useEffect(() => {
    getAllUsers()
  });

  return (
    <div>
      
      <div className="compose-email">
        <div className='newmailh'>
          <div className='Email'>New message</div>
          <div className='windowop'>
            <button><img src='arrows-maximize.svg'></img></button>
            <button><img src='square-x.svg'></img></button>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="input-container">
            <label className={`input-label ${email_sender ? 'input-filled' : ''}`}>From</label>
            <input 
              type="email" 
              value={email_sender} 
              onChange={(e) => handleInputChange(e, setEmailSender)} 
            />
          </div>
          <div className="input-container">
            <label className={`input-label ${email_receiver ? 'input-filled' : ''}`}>To</label>
            <input 
              type="email" 
              value={email_receiver} 
              onChange={(e) => handleInputChange(e, setEmailReceiver)} 
            />
          </div>
          <div className="input-container">
            <label className={`input-label ${subject ? 'input-filled' : ''}`}>Object</label>
            <input 
              type="text" 
              value={subject} 
              onChange={(e) => handleInputChange(e, setSubject)} 
            />
          </div>
          <div className="input-content">
            <label className={'label'}></label>
            <textarea 
              ref={textareaRef}
              value={content} 
              onChange={(e) => {handleInputChange(e, setContent); autoAdjustTextarea();}} 
            />
          </div>
          <div className='mailstyling'>
            <button type="submit">Send</button>
            <button className='join'><img import src='text-color.svg' alt="text-color"></img></button>
            <button className='join'><img src='file.svg' alt="file"></img></button>
            <button className='join'><img src='photo.svg' alt="photo"></img></button>
            <button className='join'><img src='mood-smile.svg' alt="mood-smile"></img></button>
          </div> 
        </form>
      </div>
    </div>
  );
};

export default Email;
