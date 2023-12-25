import React from "react";
import { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

function Compose() {
    const [formData, setFormData] = useState({
        cc: '',
        email_receiver: '',
        email_sender: '',
        date: '',
        subject: '',
        content: ''
    });

    const [formErrors, setFormErrors] = useState({})

    const onFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    const validateEmail = (email) => {
        const regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return String(email)
          .toLowerCase()
          .match(
            regExp
          );
      }
    
    const onSubmit = (e) => {
        const errors = {}
        e.preventDefault();

        if (!formData.email_receiver.trim())
            errors.email_receiver = "Destination email required"
        else if (!validateEmail(formData.email_receiver.trim()))
            errors.email_receiver = "Email incorrect"

        if (!formData.subject.trim())
            errors.subject = "Subject required"
        else if (formData.subject.trim().length < 3)
            errors.subject = "Subject too short"

        if (!formData.content.trim())
            errors.content = "Content is empty"
        else if (formData.content.trim().length < 3)
            errors.username = "Content is too short"

        if (formData.cc.trim())
            if (!validateEmail(formData.cc.trim().length))
                errors.cc = "cc email incorrect"

        setFormErrors(errors);

        if (Object.keys(formErrors).length === 0)
            sendEmail()
        else
            return
    }

    const sendEmail = () => {
        fetch('http://localhost:5000/emails/send-email/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cc: formData.cc,
                email_receiver: formData.email_receiver,
                email_sender: localStorage["email"],
                date: new Date(),
                subject: formData.subject,
                content: formData.content
            })
        })
            .then(response => response.json())
            .catch(error => console.error(error));
    }
    return (
        <div className="text-left">
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 mx-auto w-full">
                <div className="w-1/2">
                    <label className="block text-gray-700 text-sm mb-2">
                        Destination
                        <input name="email_receiver" className="mt-3 hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" onChange={onFormChange} placeholder="e-mail_receiver" />
                        {formErrors.email_receiver && <span class="text-red-600">{formErrors.email_receiver}</span>}
                    </label>
                </div>
                <div className="w-1/2">
                    <label className="block text-gray-700 text-sm mb-2">
                        CC
                        <input name="cc" className="mt-3 hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" onChange={onFormChange} placeholder="e-mail_receiver" />
                        {formErrors.cc && <span class="text-red-600">{formErrors.cc}</span>}
                    </label>
                </div>
                <div className="w-1/2">
                    <label className="block text-gray-700 text-sm mb-2">
                        Subject
                        <input name="subject" className="mt-3 hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={onFormChange} placeholder="subject" />
                        {formErrors.subject && <span class="text-red-600">{formErrors.subject}</span>}
                    </label>
                </div>
                <div>
                    <label className="block text-gray-700 text-sm mb-4">
                        Content
                        <textarea name="content" rows="10" className="mt-3 hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-auto" onChange={onFormChange} placeholder="content">

                        </textarea>
                        {formErrors.content && <span class="text-red-600">{formErrors.content}</span>}
                    </label>
                </div>
                <div>
                    <label className="block text-gray-700 text-sm mb-2">
                        Attachment
                        <input name="attachment" className="mx-6" type="file"></input>
                    </label>
                </div>
                <button className="flex mt-6 btn-color py-2 px-4 rounded font-bold text-center text-white" type="submit" onClick={onSubmit}>Envoyer <FaPaperPlane width={12} className="mx-2 text-sm text-white"></FaPaperPlane></button>
            </form>
        </div>
    )
}

export default Compose;