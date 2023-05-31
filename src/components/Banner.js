import React from 'react';
// Icons
import {FaGithub, FaLinkedin, FaFileContract, FaEnvelope } from 'react-icons/fa';
// Type Animation
import {TypeAnimation} from 'react-type-animation';
//Motion
import {motion} from 'framer-motion';
// Variants
import {fadeIn} from '../variants';
//Resume
import PDF from '../assets/KobePhoResume.pdf';

const Banner = () => {
  return (
  <section className='min-h-[85vh] lg:min-h-[40vh] flex items-center' 
  id='home'
  >
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* TEXT */}
        <div className='flex-1 text-center font-secondary'>
          <motion.h1 
          variants={fadeIn('up', 0.3)} 
          initial='hidden' 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='text-[55px] font-bold leading-[0.8] lg:text-[105px]'
          >
            KOBE <span>PHO</span>
          </motion.h1>
            <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='mb-7 text-[36px] lg:text-[40px] font-secondary 
            font-semibold uppercase leading-[1]'
            >
              <span className='mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Developer.',
                2000,
                'Designer.',
                2000,
                'Visualizer.',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
              <motion.p 
                variants={fadeIn('up', 0.5)} 
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: false, amount: 0.7}} 
                className='text-[24px] text-semibold mb-11 max-w-lg mx-auto'
                >
                  Front-End Web Developer that is passionate about crafting immersive and user-friendly web experiences.
              </motion.p>
                  {/* SOCIALS */}
                  <motion.div 
                    variants={fadeIn('up', 0.8)} 
                    initial='hidden' 
                    whileInView={'show'} 
                    viewport={{once: false, amount: 1}}                 
                    className='flex text-[20px] gap-x-6 max-w-max mb-20 mx-auto 
                    '
                    >
                    <a href="https://github.com/kbyph" target="_blank">
                      <FaGithub size='1.8rem' color='#ffc46a' />
                    </a>
                    <a href="https://www.linkedin.com/in/kobepho/" target="_blank">
                      <FaLinkedin size='1.8rem' color='#ffa32c' />
                    </a>
                    <a href="{PDF}" target="_blank">
                      <FaFileContract size='1.8rem' color="#ff7c8e" />
                    </a>
                    <a href="mailto:kobeypho@gmail.com" target="_blank">
                      <FaEnvelope size='1.8rem' color="#e44690d2" />
                    </a>
                  </motion.div>
              </div>
            </div>
        </div>
    </section>
  );
};

export default Banner;
