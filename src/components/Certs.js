import React from 'react';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';
// Image
import Img1 from '../assets/ucbcert.jpg';
import Img2 from '../assets/ztmcert.jpg';
import Img3 from '../assets/udycert.jpg';

const Certs = () => {
  return (
  <section className='section' id='certs'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
        variants={fadeIn('right', 0.3)} 
        initial='hidden' 
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 flex flex-col gap-y-20 mb-10 lg:mb-0'
        >
          {/* Text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>
            CERTIFICATIONS. <br />
            </h2>
            <p className='text-[24px] text-semibold mb-14 mt-8'>
              Embracing the ever-evolving world of coding, I showcase my commitment to continuous learning.
            </p>
            <a href='https://www.linkedin.com/in/kobepho/details/certifications/' target="_blank">
                <button className='btn btn-sm mb-10'>View All Certificates</button>
              </a>
          </div>
          
          {/* CERT 1 */}
          {/* Image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
            <a href='https://www.parchment.com/u/award/ca07151a6dad05455d46adf1adb1c147' target="_blank">
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            </a>
            {/* Image */}
            <img className='group-hover:scale-110 transition-all duration-500' 
                 src={Img1} 
                 alt='' 
            />
            {/* Pre-Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>
              UC Berkeley Extension
              </span>
            </div>
            {/* Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Data Analytics Bootcamp</span>
            </div>            
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn('left', 0.2)} 
        initial='hidden' 
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 flex flex-col gap-y-10'
        >
          
          {/* CERT 2 */}
          {/* Image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
            <a href='https://www.udemy.com/certificate/UC-b64efdf8-ac7e-4f3f-a648-fa33d597bba7/' target="_blank">
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            </a>
            {/* Image */}
            <img className='group-hover:scale-110 transition-all duration-500' 
                 src={Img2} 
                 alt='' 
            />
            {/* Pre-Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>
              Zero To Mastery Academy
              </span>
            </div>
            {/* Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>The Complete Web Developer in 2023</span>
            </div>            
          </div>

            {/* CERT 3 */}
            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <a href='https://www.udemy.com/certificate/UC-98f43ba1-aa44-4bc7-a0ee-d98f4bf65234/' target="_blank">
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              </a>
              {/* Image */}
              <img className='group-hover:scale-110 transition-all duration-500' 
                   src={Img3} 
                   alt='' 
              />
              {/* Pre-Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                Udemy
                </span>
              </div>
              {/* Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>The Complete Digital Marketing Course</span>
              </div>            
            </div>
            
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Certs;
