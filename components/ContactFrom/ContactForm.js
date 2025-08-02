import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} id="contactForm" className="contact-form" >
            <div className="input-item">
                <input
                    value={forms.name}
                    type="text"
                    name="name"
                    className='fild'
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    placeholder="Your Name" />
                <label><i className="flaticon-user"></i></label>
                {validator.message('name', forms.name, 'required|alpha_space')}
            </div>
            <div className="input-item">
                <input
                    value={forms.email}
                    type="email"
                    name="email"
                    className='fild'
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    placeholder="Your Email" />
                <label><i className="flaticon-email"></i></label>
                {validator.message('email', forms.email, 'required|email')}
            </div>
            <div className="input-item">
                <textarea
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    value={forms.message}
                    type="text"
                    className='fild textarea'
                    name="message"
                    placeholder="Message">
                </textarea>
                <label><i className="flaticon-edit"></i></label>
                {validator.message('message', forms.message, 'required')}
            </div>
            <div className="input-item submitbtn">
                <input className="fild" type="submit" value="Get In Touch" />
            </div>
        </form >
    )
}

export default ContactForm;