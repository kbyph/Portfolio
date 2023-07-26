import React from 'react';

// Motion
import { motion } from 'framer-motion';

// Variants
import { fadeIn } from '../variants';

// Data
const skills = [
    {
        name: 'Languages',
        description: 'HTML  ◦  CSS  ◦  Javascript  ◦  JSX  ◦  SQL  ◦  Python  ◦  SCSS  ◦  R'
    },
    {
        name: 'Frameworks & Libraries',
        description: 'React  ◦  Redux  ◦  Hooks  ◦  Node.js  ◦  Email.js  ◦  Tailwinds.css  ◦  NPM  ◦  Bootstrap  ◦  pgAdmin'
    },
    {
        name: 'Other',
        description: 'Git  ◦  Github  ◦  Rest APIs  ◦  Heroku  ◦  Postman API  ◦  Visual Studio Code  ◦  MongoDB  ◦  AWS  ◦  Tableau  ◦  PostgreSQL'
    },        
];


const Skills = () => {
    return (
        <section className='section' id='skills'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    {/* Text */}
                    <motion.div
                        variants={fadeIn('right', 0.3)} 
                        initial='hidden' 
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}  
                    >
                        <h2 className='h2 text-accent mt-2 mb-8'>Skills.</h2>
                            <h3 className='text-[24px] text-semibold max-w-[420px] mb-16 mr-16'>
                                I possess a strong foundation in various programming languages and frameworks, coupled with a solid understanding of coding principles, allowing me to tackle diverse coding challenges with creativity and efficiency.
                            </h3>
                    </motion.div>
                    {/* Skills */}
                    <motion.div 
                        variants={fadeIn('left', 0.5)} 
                        initial='hidden' 
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1'
                    >
                        {/* Skills List */}
                        <div>
                            {skills.map((skill, index) => {
                                // Destructure Skills
                                const { name, description } = skill;
                                return (
                                    <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                                    <div className='max-w-[650px]'>
                                        <h4 className='text-[22px] tracking-wider font-primary font-semibold text-gradient mb-6'>{name}</h4>
                                        <p className='text-[23px] font-secondary leading-tight'>
                                            {description}
                                        </p>
                                    </div>
                                </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;