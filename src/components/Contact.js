import Container from "./Container";
import { useState } from "react";
import { database } from '../firebase';
import { ref, set } from "firebase/database";

const Contact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');


    const handleSubmit = (e)=>{
        e.preventDefault();


        set(ref(database,'clients/' + name),{
            name,
            email,
            message
        }).then(()=>alert("Your message is sent!")).catch(()=>alert("Error ocurred!")).finally(()=>{
            setName('');
            setEmail('');
            setMessage('');
        })
    };


  return <div className="contact section">
    <img className="contact__img contact__img--first" src="./img/plans/plans-2.png" srcSet="./img/plans/plans-2.webp" alt="circle" />
    <img className="contact__img contact__img--second" src="./img/plans/plans-1.png" srcSet="./img/plans/plans-1.webp" alt="circle" />
    <Container>
        <div className="contact__body">
            <header className="contact__header section__header">
                <h2 className="title title--primary contact__title section__title">Contact us</h2>
            </header>
            <div className="contact__content">
                <div className="contact__additional">
                    <p className="contact__additional-text">The most popular questions are listed in the FAQs section. We are happy to help you with any of your questions, wishes and objections.</p>
                    <span className="contact__additional-subtext">Support service will contact you within 48 hours.</span>
                </div>
                <form onSubmit={handleSubmit} className="contact__form">
                    <label className="contact__form-label" for="name">How can we call you?</label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} required className="contact__form-input" id="name" type="text" placeholder="Enter your name" />
                    <label className="contact__form-label" for="email">How can we contact you?</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} required className="contact__form-input" id="email" type="email" placeholder="Enter your email" />
                    <label className="contact__form-label" for="message">How can we help you?</label>
                    <input value={message} onChange={(e)=>setMessage(e.target.value)} required className="contact__form-input" id="message" type="text" placeholder="Enter your message" />
                    <button className="btn btn--purple contact__form-btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
    </Container>
  </div>
}

export default Contact;