"use client";
import SkillIcon from './skill-icon';
import { motion } from 'framer-motion';

export default function Skills({skills}: {skills: {name: string, icon: string}[]}) {
    return (
        <div className='sm:flex flex-row'>
            <motion.div 
              className='sm:w-1/4 pr-4 mb-5 sm:mb-0'
              initial="hidden"
              whileInView="visible"
              transition={{ once: true, amount: 0.5, delay: 0.9}}
              variants={{
                hidden: { opacity: 0, x: -50},
                visible: { opacity: 1, x: 0}
              }}
            >
                <p className='text-1xl font-bold text-center sm:text-end'>HABILIDADES</p>
            </motion.div>
            <motion.div 
              className='flex-1'
              initial="hidden"
              whileInView="visible"
              transition={{ once: true, amount: 0.5, delay: 1}}
              variants={{
                hidden: { opacity: 0, x: 50},
                visible: { opacity: 1, x: 0}
              }}
            >
                <div className='flex flex-wrap flex-row gap-10 sm:gap-5 justify-center sm:justify-around'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 sm:grid-rows-3 gap-4'>
                        {skills.map((skill, index) => (
                            <div key={index} className='col-span-1 row-span-1'>
                                <SkillIcon language={skill.name} img={skill.icon} />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}