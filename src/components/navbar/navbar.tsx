import Link from 'next/link';
import ChangeDarkmode from './change-darkmode';
import EditDialog from '../dialog/edit-dialog';

export default function Navbar() {
    return (
        <div className="fixed navbar bg-base-100">
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
            <div className="navbar-end space-x-3">
                <ChangeDarkmode/>
                <EditDialog/>
            </div>
        </div>
    );
}