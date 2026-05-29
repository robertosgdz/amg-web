'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative h-full flex items-center" // Aseguramos que ocupe la altura completa para que el hover no se corte
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-sm font-semibold text-gray-900 hover:text-[#fc6a0b] transition-colors py-5 flex items-center gap-1">
        Opositores
        <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* El menú desplegable CUADRADO */}
      <div 
        /* Quitamos rounded-lg y ajustamos el top para que pegue perfecto con el header de h-16 (top-[64px]) */
        className={`absolute top-16 left-0 w-48 bg-white border border-gray-200 shadow-sm py-2 transition-all duration-200 origin-top ${
          isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <Link href="/opositores/bomberos" className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#fc6a0b] transition-colors">
          Bomberos
        </Link>
        <Link href="/opositores/policia" className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#fc6a0b] transition-colors">
          Policía
        </Link>
        <Link href="/opositores/militar" className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#fc6a0b] transition-colors">
          Militar
        </Link>
      </div>
    </div>
  )
}