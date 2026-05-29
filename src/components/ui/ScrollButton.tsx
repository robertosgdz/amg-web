'use client'

export default function ScrollButton() {
  return (
    <div className="fixed bottom-10 right-10 z-40">
      <button 
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-black border-4 border-black ring-2 ring-gray-700 hover:bg-[#fc6a0b] hover:border-[#fc6a0b] hover:ring-[#c25005] transition-all duration-300 ease-out shadow-2xl pointer-events-auto"
        onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <svg 
          /* 
            Aquí hemos quitado 'transform' y 'group-hover:translate-y-1'.
            Ahora solo mantenemos la transición de color del stroke. 
          */
          className="w-6 h-6 transition-colors duration-300 ease-out stroke-[#fc6a0b] group-hover:stroke-white" 
          fill="none" 
          strokeWidth="3" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>
  )
}