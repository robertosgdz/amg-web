'use client'

import dynamic from 'next/dynamic'

// Como este archivo ya es 'use client', aquí SÍ podemos usar ssr: false
const SceneWrapper = dynamic(() => import('./SceneWrapper'), { 
  ssr: false 
})

export default function SceneLoader() {
  return <SceneWrapper />
}