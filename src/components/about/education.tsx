"use client";
import { motion } from "framer-motion";

export default function Education({educations}: {educations: {title: string, school: string, description: string, startDate: string, endDate: string}[]}) {
    return (
        <div className='sm:flex flex-row'>
            <motion.div 
              className='sm:w-1/4 pr-4 mb-5 sm:mb-0'
              initial="hidden"
              whileInView="visible"
              transition={{ once: true, amount: 0.5, delay: 1}}
              variants={{
                hidden: { opacity: 0, x: -50},
                visible: { opacity: 1, x: 0}
              }}
            >
                <p className='text-1xl font-bold text-center sm:text-end'>EDUCAÇÃO</p>
            </motion.div>
            <motion.div 
              className='flex-1 space-y-4'
              initial="hidden"
              whileInView="visible"
              transition={{ once: true, amount: 0.5, delay: 1}}
              variants={{
                hidden: { opacity: 0, x: 50},
                visible: { opacity: 1, x: 0}
              }}  
            >
                {educations.map((education, index) => (
                    <div className='flex flex-col'key={index}>
                        <div className='sm:flex flex-row w-full'>
                            <p className='font-bold text-center sm:text-start'>{education.school}</p>
                            <p className='grow text-center sm:text-end'>{education.startDate} - {education.endDate}</p>
                        </div>
                        <div>
                            <p className='text-center sm:text-start'>{education.title}</p>
                            <p className='text-center sm:text-start'>{education.description}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}