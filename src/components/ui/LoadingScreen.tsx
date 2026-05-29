'use client'

import { useProgress } from '@react-three/drei'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

declare global {
  interface Window {
    __amgHomeLoaded?: boolean
  }
}

export default function LoadingScreen() {
  const { progress } = useProgress()
  const roundedProgress = useMemo(() => Math.min(100, Math.floor(progress)), [progress])

  const [logoRendered, setLogoRendered] = useState(false)
  const [canHide, setCanHide] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    const mountTimer = window.setTimeout(() => {
      setHasMounted(true)
    }, 0)

    return () => window.clearTimeout(mountTimer)
  }, [])

  useEffect(() => {
    if (!hasMounted) return
    if (window.__amgHomeLoaded) {
      const cachedTimer = window.setTimeout(() => {
        setCanHide(true)
      }, 0)

      return () => window.clearTimeout(cachedTimer)
    }

    const fallbackTimer = window.setTimeout(() => {
      window.__amgHomeLoaded = true
      setCanHide(true)
    }, 1800)

    return () => window.clearTimeout(fallbackTimer)
  }, [hasMounted])

  useEffect(() => {
    if (!hasMounted) return
    if (window.__amgHomeLoaded) return
    if (!logoRendered) return
    if (roundedProgress < 100) return

    const completeTimer = window.setTimeout(() => {
      window.__amgHomeLoaded = true
      setCanHide(true)
    }, 300)

    return () => window.clearTimeout(completeTimer)
  }, [hasMounted, logoRendered, roundedProgress])

  if (!hasMounted) return null
  if (canHide) return null

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,#ffffff_20%,#F3F4F6_120%)]"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/imgi_30_Logo-AMG-1024x1024.jpg"
          alt="AMG Elite Sport"
          width={200}
          height={200}
          priority
          className={`transition-opacity duration-300 ${logoRendered ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLogoRendered(true)}
        />

        <div className="w-64">
          <div className="h-1 w-full overflow-hidden bg-gray-200">
            <div
              className="h-full bg-gray-800 transition-all duration-300 ease-out"
              style={{ width: `${roundedProgress}%` }}
            />
          </div>

          <div className="mt-2 text-center text-sm font-medium tracking-widest text-gray-500">
            {roundedProgress}% CARGANDO...
          </div>
        </div>
      </div>
    </div>
  )
}