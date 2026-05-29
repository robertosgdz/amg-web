// src/components/3d/Scene.jsx
import { Center } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Pista } from './Pista'

function CameraRig() {
  const lookAtTarget = new THREE.Vector3(0, 0, 0)

  useFrame((state) => {
    // Calculamos el progreso del scroll de forma nativa (de 0 a 1)
    const scrollY = window.scrollY
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const offset = maxScroll > 0 ? scrollY / maxScroll : 0

    const camX = 0 
    let camY, camZ, lookY, lookZ 

    if (offset <= 0.2) {
      const p = offset / 0.2
      camY = THREE.MathUtils.lerp(25, 2, p)
      camZ = THREE.MathUtils.lerp(130, 125, p) 
      lookY = THREE.MathUtils.lerp(0, 2, p)
      lookZ = THREE.MathUtils.lerp(120, 115, p) 
    } else {
      const p = (offset - 0.2) / 0.8
      camY = 2
      camZ = THREE.MathUtils.lerp(125, -125, p)
      lookY = 2
      lookZ = camZ - 10
    }

    // Suavizamos el movimiento de la cámara para que no sea brusco al hacer scroll rápido
    state.camera.position.lerp(new THREE.Vector3(camX, camY, camZ), 0.1)
    
    // Suavizamos también adónde mira la cámara
    lookAtTarget.lerp(new THREE.Vector3(camX, lookY, lookZ), 0.1)
    state.camera.lookAt(lookAtTarget)
  })

  return null
}

export default function Scene() {
  return (
    <>
      <fog attach="fog" args={['#ffffff', 10, 80]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]} intensity={2.2} castShadow />
      <directionalLight position={[-3, 4, -2]} intensity={2} />
      
      <CameraRig />

      <Center position={[0, 0, 15]}>
        <Pista scale={[2, 2, 2]} rotation={[0, Math.PI / 2, 0]} /> 
      </Center>

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -0.1, 0]}>
        <planeGeometry args={[200, 200]} />
        <shadowMaterial opacity={0.6} color="#000000" />
      </mesh>
    </>
  )
}