"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Main() {
    const buttonText = "Entre em contato";

    return (
        <section className='w-full'>
            <motion.div 
              className='flex flex-row space-x-4 items-center h-[calc(100vh-20px)] justify-center px-2'
              initial="hidden"
              whileInView="visible"
              transition={{ once: true, amount: 1, delay: 0.4}}
              variants={{
                hidden: { opacity: 0, y: 50},
                visible: { opacity: 1, y: 0}
              }}
            >
                <div className="avatar">
                    <div className="sm:w-44 rounded-full ring-offset-8">
                        <Image src="/avatar.jpeg" alt="Henrique Barucco" width={512} height={512} className="rounded-full" />
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl sm:text-4xl font-bold'>Henrique Barucco</h2>
                    <p>Desenvolvedor Fullstack</p>
                </div>
            </motion.div>
            <motion.div 
              className='flex align-center justify-center mb-[10rem]'
              initial="hidden"
              whileInView="visible"
              transition={{ once: true, amount: 1, delay: 0.4}}
              variants={{
                hidden: { opacity: 0, y: 50},
                visible: { opacity: 1, y: 0}
              }}
              >
                <Link href="/contato" className={`bg-call-to-action text-color-call-to-action text-center 
                mx-auto px-5 py-4 transition-[0.2] rounded-md cursor-pointer animate-bounce-slow 
                font-bold hover:bg-[var(--bs)] hover:border hover:border-collapse 
                hover:border-call-to-action
                `}>
                    {buttonText.split('').map((letter, index) => (
                        <motion.span
                          className='opacity-1 relative'
                          key={index}
                          initial={{ opacity: 1, x: -20 }}
                          animate={{ opacity: 0, x: 0 }}
                          transition={{ delay: index / 18, repeat: Infinity, duration: 2 }}>
                            {letter}
                        </motion.span>
                    ))}
                </Link>
            </motion.div>
        </section>
            
    );
}