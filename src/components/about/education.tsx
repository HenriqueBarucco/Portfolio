"use client";
import { motion } from "framer-motion";

export default function Education() {
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
                <div className='flex flex-col'>
                    <div className='sm:flex flex-row w-full'>
                        <p className='font-bold text-center sm:text-start'>Estácio de Sá</p>
                        <p className='grow text-center sm:text-end'>Fevereiro 2022 - Cursando 4º Semestre</p>
                    </div>
                    <div>
                        <p className='text-center sm:text-start'>Ciências da Computação</p>
                        <p className='text-center sm:text-start'>Descrição</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}