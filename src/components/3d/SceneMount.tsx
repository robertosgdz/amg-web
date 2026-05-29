'use client'

import { usePathname } from 'next/navigation'
import SceneLoader from '@/components/3d/SceneLoader'

export default function SceneMount() {
  const pathname = usePathname()

  return <SceneLoader key={pathname} />
}