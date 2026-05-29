// src/app/page.tsx
import LoadingScreen from '@/components/ui/LoadingScreen'
import SceneMount from '@/components/3d/SceneMount' 
import ScrollButton from '@/components/ui/ScrollButton'
import Header from '@/components/ui/Header' // <-- Añadimos la importación

export default function Home() {
  return (
    // Sin "fixed", dejamos que haga scroll nativo
    <main className="relative w-full text-gray-900 bg-transparent">
      <LoadingScreen />

      {/* EL NUEVO HEADER */}
      <Header />

      {/* Nuestro botón interactivo ahora vive en su propio Client Component */}
      <ScrollButton />
      
      {/* EL MUNDO 3D FIJO DE FONDO */}
      <SceneMount /> 

      {/* CONTENIDO HTML 100% INDEXABLE PARA SEO */}
      <div className="relative z-10 w-full pointer-events-none">
        
        {/* 
          Bloque 1: Hero
          Le damos h-[200vh] para que dure "un par de scrolls". 
        */}
        <section className="h-[200vh] w-full pointer-events-none">
          {/* 
            sticky top-0 hace que el contenido se quede clavado en la pantalla
            mientras recorremos los 200vh del padre. 
          */}
          <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-[15vh] pb-[10vh] px-8 md:px-16 box-border">
            
            {/* Contenedor Superior: H1 */}
            <div className="w-full md:w-1/2 pointer-events-auto">
              <h1 className="text-black text-5xl md:text-6xl font-black leading-tight uppercase">
                Tu mejor versión empieza aquí
              </h1>
            </div>

            {/* Contenedor Inferior: Párrafo */}
            <div className="w-full md:w-1/2 pointer-events-auto">
              <p className="text-gray-900 text-base md:text-lg font-medium max-w-120">
                Preparación física para opositores y entrenamiento para corredores, con método y seguimiento real.
              </p>
            </div>

          </div>
        </section>

        {/* Espacio para el viaje de la cámara (Ahora ocupa 3 pantallas) */}
        <section className="h-[300vh]"></section>

        {/* Bloque 2: Las puertas (Ocupa 1 pantalla, la última) */}
        <section className="h-screen w-full flex flex-col items-center justify-center pointer-events-auto">
          <h2 className="text-3xl font-bold text-black mb-10 drop-shadow-md">AQUÍ VAN LAS DOS PUERTAS</h2>
          <div className="flex gap-10">
            <div className="w-64 h-96 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-2xl border border-gray-200">
              OPOSITORES
            </div>
            <div className="w-64 h-96 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-2xl border border-gray-200">
              CORREDORES
            </div>
          </div>
        </section>

      </div>

    </main>
  )
}