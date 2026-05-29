'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Scene from './Scene'

export default function SceneWrapper() {
  return (
    /* 
      Sustituimos #FAF8F5 por #F3F4F6 (un gris neutro muy suave).
      El centro sigue siendo #ffffff para fundirse con la niebla.
    */
    <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_center,#ffffff_20%,#F3F4F6_120%)]">
      <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 25, 130], fov: 50 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}