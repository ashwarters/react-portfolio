import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact(){
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    };

    return(
        <section className="contact-container">
        <h1 className="contact-title">Contact</h1>
        <h5 className="contact-text">For any available postions, projects, or advice please drop a message here!</h5>

        <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="name-form">Name:</label>
                <input className="form-control" type="text" defaultValue={name} onChange={handleChange} name="Name" />
            </div>
            <div>
                <label htmlFor="email" className="email-form">Email address:</label>
                <input className="form-control" type="email" defaultValue={email} name="Email" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="message" className="message-form">Message:</label>
                <textarea className="form-control" name="A short message" defaultValue={message} onChange={handleChange} rows="5" />
            </div>
            {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button className="btn-info" type="submit">Submit</button>
        </form>
        <h6>You can also <a href="mailto:ashwarters@gmail.com">email me directly!</a></h6>

    </section>
    )
}

export default Contact;