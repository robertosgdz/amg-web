import Image from 'next/image'
import Link from 'next/link'
import DropdownMenu from './DropdownMenu'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 border-b border-gray-200 bg-white/95 backdrop-blur-md transition-all">
      <div className="box-border flex h-16 items-center justify-between px-8 md:px-16">
        
        {/* Lado Izquierdo: Logo */}
        <Link
          href="/"
          className="shrink-0 transition-transform duration-300 ease-out hover:scale-105"
          aria-label="Ir a inicio"
        >
          <Image
            src="/imgi_30_Logo-AMG-1024x1024.jpg"
            alt="AMG Elite Sport"
            width={60}
            height={60}
            className="h-14 w-14 object-contain md:h-22 md:w-22"
          />
        </Link>

        {/* Lado Derecho: Navegación */}
        <nav className="hidden items-center gap-8 lg:flex">
          <DropdownMenu />

          <Link
            href="/corredores"
            className="text-sm font-semibold text-gray-900 transition-colors duration-300 hover:text-[#fc6a0b]"
          >
            Running Club
          </Link>

          <Link
            href="/carthago-social-run"
            className="text-sm font-semibold text-gray-900 transition-colors duration-300 hover:text-[#fc6a0b]"
          >
            Social Run
          </Link>

          <Link
            href="/blog"
            className="text-sm font-semibold text-gray-900 transition-colors duration-300 hover:text-[#fc6a0b]"
          >
            Blog
          </Link>

          <Link
            href="/contacto"
            className="text-sm font-semibold text-gray-900 transition-colors duration-300 hover:text-[#fc6a0b]"
          >
            Contacto
          </Link>

          <div className="h-5 w-px bg-gray-300"></div>

          {/* Icono de Perfil */}
          <Link
            href="/login"
            className="text-gray-900 transition-all duration-300 ease-out hover:scale-110 hover:text-[#fc6a0b]"
            aria-label="Iniciar sesión"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </Link>
        </nav>

        {/* Menú Hamburguesa para Móviles */}
        <button className="p-2 text-gray-900 lg:hidden" aria-label="Abrir menú">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}