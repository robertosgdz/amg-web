// src/components/3d/Pista.jsx
import { useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

export function Pista(props) {
  // Aquí es donde Drei carga tu archivo public/pista.glb
  const { scene } = useGLTF('/pista.glb')
  const { gl } = useThree()

  useEffect(() => {
    // 1. Obtenemos el máximo soporte de la tarjeta gráfica del usuario
    const maxAniso = gl.capabilities.getMaxAnisotropy()

    scene.traverse((obj) => {
      // 2. Buscamos todas las mallas que tengan material
      if (obj.isMesh && obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
        
        mats.forEach((mat) => {
          // 3. Aplicamos anisotropía AL MAPA DE COLOR
          if (mat.map) {
            mat.map.anisotropy = maxAniso
            mat.map.needsUpdate = true
          }
          // 4. Aplicamos anisotropía también AL MATERIAL en sí
          mat.needsUpdate = true 
        })
      }
    })
  }, [scene, gl])

  return <primitive object={scene} {...props} />
}

// Pre-cargamos el modelo para que no haya tirones
useGLTF.preload('/pista.glb')