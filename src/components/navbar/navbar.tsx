"use client";
import Link from 'next/link';
import ChangeDarkmode from './change-darkmode';
import EditDialog from '../dialog/edit-dialog';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.div 
           className="fixed navbar bg-base-100"
           initial="hidden"
           whileInView="visible"
           transition={{ once: true, amount: 0.5}}
           variants={{
             hidden: { opacity: 0, y: -50},
             visible: { opacity: 1, y: 0}
           }}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link href={'/#sobre'}>
                                Sobre mim
                            </Link>
                        </li>
                        <li>
                            <Link href={'/projetos'}>
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link href={'/contato'}>
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <li>
                        <Link href={'/#sobre'}>
                                Sobre mim
                        </Link>
                    </li>
                    <li>
                        <Link href={'/projetos'}>
                                Projetos
                        </Link>
                    </li>
                    <li>
                        <Link href={'/contato'}>
                                Contato
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end w-1/2 space-x-3">
                <ChangeDarkmode/>
                <EditDialog/>
            </div>
        </motion.div>
    );
}