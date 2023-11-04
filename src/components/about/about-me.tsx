"use client";
import { motion } from "framer-motion";

export default function AboutMe({about}: {about: string}) {
    return (
        <div className='sm:flex flex-row'>
            <motion.div 
              className='sm:w-1/4 pr-4 mb-5 sm:mb-0'
              initial="hidden"
              whileInView="visible"
              transition={{ once: true, amount: 0.5, delay: 0.8}}
              variants={{
                hidden: { opacity: 0, x: -50},
                visible: { opacity: 1, x: 0}
              }}>
                <p className='text-2xl font-bold text-center sm:text-end'>SOBRE MIM</p>
            </motion.div>
            <motion.div 
              className='flex-1'
              initial="hidden"
              whileInView="visible"
              transition={{ once: true, amount: 0.5, delay: 0.9}}
              variants={{
                hidden: { opacity: 0, x: 50},
                visible: { opacity: 1, x: 0}
              }}
            >
                <p className="text-center sm:text-start">
                    Sou um Desenvolvedor Full Stack apaixonado por tecnologia com uma habilidade comprovada em trabalhar em equipe, resolução de problemas e comunicação eficaz. Sempre buscando oportunidades para aprimorar minhas habilidades e oferecer soluções inovadoras para atender às expectativas dos clientes. Com uma mentalidade de crescimento constante, eu estou sempre em busca de novos desafios e oportunidades para expandir meus conhecimentos e habilidades.
                </p>
            </motion.div>
        </div>
    );
}