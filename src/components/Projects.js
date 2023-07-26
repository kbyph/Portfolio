import React from 'react';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';
// Image
import Img4 from '../assets/robofriends.png';
import Img5 from '../assets/smartbrain.png';
import Img6 from '../assets/vibetopia.png';

const Projects = () => {
  return (
  <section className='section' id='projects'>
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
            PROJECTS. <br />
            </h2>
            <p className='text-[24px] text-semibold mb-14 mt-8'>
            I like to code things from scratch and bring ideas to life, utilizing the latest web technologies.
            </p>
              <a href='https://github.com/kbyph?tab=repositories' target="_blank">
                <button className='btn btn-sm mb-10'>View All Projects</button>
              </a>
          </div>
          
          {/* PROJECT 1 */}
          {/* Image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
            <a href='https://kbyph.github.io/Robofriends/' target="_blank">
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            </a>
            {/* Image */}
            <img className='group-hover:scale-125 transition-all duration-500' 
                 src={Img4} 
                 alt='' 
            />
            {/* Pre-Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>
              Front-End React Project
              </span>
            </div>
            {/* Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Robofriends</span>
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
          
          {/* PROJECT 2 */}
          {/* Image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
            <a href='https://smart-brain-react.herokuapp.com/' target="_blank">
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            </a>
            {/* Image */}
            <img className='group-hover:scale-125 transition-all duration-500' 
                 src={Img5} 
                 alt='' 
            />
            {/* Pre-Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>
              Fullstack React Project
              </span>
            </div>
            {/* Title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Smart Brain</span>
            </div>            
          </div>

            {/* PROJECT 3 */}
            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <a href='https://kbyph.github.io/Vibetopia/' target="_blank">
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              </a>
              {/* Image */}
              <img 
                   className='group-hover:scale-125 transition-all duration-500'
                   src={Img6} 
                   alt='' 
              />
              {/* Pre-Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>
              Front-End React Project
              </span>
              </div>
              {/* Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Vibetopia</span>
              </div>            
            </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Projects;
