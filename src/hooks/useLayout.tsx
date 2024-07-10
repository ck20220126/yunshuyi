import { useState, useEffect, useMemo } from "react"
import { useWindowScroll, useWindowSize } from "react-use"
import { usePathname } from 'next/navigation'

export default function useLayout() {
  const { height } = useWindowSize()
  const { y: scrollY } = useWindowScroll()
  const [backgroundOpacity, setBackgroundOpacity] = useState(0)
  const pathname = usePathname()
  const immersive = useMemo(() => {
    return ['/'].includes(pathname)
  }, [pathname])

  useEffect(() => {
    if (!immersive) {
      setBackgroundOpacity(1)
      return
    }
    setBackgroundOpacity(scrollY > height ? 1 : 0)
  }, [scrollY])

  useEffect(() => {
    setBackgroundOpacity(immersive && scrollY < 50 ? 0 : 1)
  }, [immersive])

  return {
    backgroundOpacity,
    immersive,
  }
}
