import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id='contact'>
        <div className='container-form' >
            <form action="https://formsubmit.co/sarkarrajib2107@gmail.com" method="POST" data-aos="fade-up">
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required />
                <button type='submit' id='btn2' className='btn2'>Send</button>
            </form>
        </div>
    </section>
    
  )
}

export default Contact