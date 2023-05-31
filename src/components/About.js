import React from 'react';
// Countup
import CountUp from 'react-countup';
// Intersection Observer
import { useInView } from 'react-intersection-observer';
//Motion
import { motion } from 'framer-motion';
// Variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* IMAGE */}
          <motion.div 
          variants={fadeIn('right', 0.3)} 
          initial='hidden' 
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}   
          className='flex-1 bg-about bg-contain bg-no-repeat h-[250px] bg-top'
          >
          </motion.div>
          {/* TEXT */}
          <motion.div 
          variants={fadeIn('left', 0.5)} 
          initial='hidden' 
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}   
          className='flex-1'
          >
            <h2 className='h2 text-accent'>
              About me.
            </h2>
            <p className='text-[20px] mb-5'>
            Welcome to my portfolio! My name is Kobe Pho and I am a graduate from UC Santa Cruz with a bachelor's degree in Environmental Studies & Economics. 
            Through my education and hands-on experience, I have developed a strong skill set in HTML, CSS, Javascript and React. 
            </p>
            <p className='text-[20px] mb-5'>
            Driven by creative challenges, I am dedicated to delivering user-friendly web designs through attention to detail, problem-solving, and innovative thinking.
            With a growth mindset, I continually seek opportunities to learn and stay updated on coding trends, bringing passion, skills, and dedication to every project.
            </p>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default About;
