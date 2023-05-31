import React, { useRef } from 'react';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';
// Email
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0c7pxa7', 
      'template_gt05ybb', 
      form.current, 
      '4uMd-6imABZnvMQdW'
      )
      .then(
        function(response) {
            alert("Email sent successfully!");
            form.current.reset();
        },
        function(error) {
            alert("Something went wrong..."+error);
        }
    );
}
  
  return (
  <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* TEXT */}
        <motion.div 
        variants={fadeIn('right', 0.3)} 
        initial='hidden' 
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}        
        className='flex-1 flex justify-start items-center'
        >
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
              Contact
            </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-8'>
                Let's work <br /> 
                together!
              </h2>
                <h3 className='text-[20px] max-w-[440px]'>
                If you're eager to collaborate and bring ideas to life, let's connect and have a conversation! I'm all ears and ready to explore how we can work together effectively.
                </h3>
          </div>
        </motion.div>
        {/* FORM */}
        <motion.form
        ref={form} 
        onSubmit={sendEmail}
        // 
        variants={fadeIn('left', 0.3)} 
        initial='hidden' 
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
        >
          <input 
            className='bg-transparent border-b py-3 outline-none w-full
             placeholder:text-white 
             focus:border-accent transition-all' 
            type='text'
            placeholder='Your name'
            name="user_name"
          />
          <input 
            className='bg-transparent border-b py-3 outline-none w-full
             placeholder:text-white 
             focus:border-accent transition-all' 
            type='email'
            placeholder='Your email'
            name="user_email"
          />
          <textarea 
            className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent 
            transition-all resize-none mb-12' 
            placeholder='Your message' 
          ></textarea>
          <button className='btn btn-lg'
                  type="submit"
                  value="Send">
                    Send Message
          </button>          
        </motion.form>
      </div>
    </div> 
  </section>
  );
};

export default Contact;
