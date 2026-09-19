import Link from 'next/link'
import ChangeDarkmode from './change-darkmode'

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-base-300 bg-base-100/90 backdrop-blur" aria-label="Navegação principal">
      <div className="navbar mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-square lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <Link href="/#sobre">Sobre mim</Link>
              </li>
              <li>
                <Link href="/projetos">Projetos</Link>
              </li>
              <li>
                <Link href="/contato">Contato</Link>
              </li>
            </ul>
          </div>
          <ul className="menu menu-horizontal gap-1 p-0 hidden lg:flex">
            <li>
              <Link href="/#sobre">Sobre mim</Link>
            </li>
            <li>
              <Link href="/projetos">Projetos</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ChangeDarkmode />
        </div>
      </div>
    </nav>
  )
}
