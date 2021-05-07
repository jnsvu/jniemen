import { MutableRefObject, useEffect, useRef, useState } from "react"

interface UseOnScreenOptions {
  runOnce?: boolean
}

export const useOnScreen = <T extends Element>(opt: UseOnScreenOptions = {}): [boolean, MutableRefObject<T | null>] => {
  const { runOnce } = opt
  const [isIntersecting, setIntersecting] = useState(false)
  const currentElement = useRef<T>(null)
  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    })

    if (currentElement.current) {
      observer.current.observe(currentElement.current)
    }

    return () => observer.current?.disconnect()
  }, [])

  useEffect(() => {
    if (runOnce && isIntersecting) {
      observer.current?.disconnect()
    }
  }, [runOnce, isIntersecting])

  return [isIntersecting, currentElement]
}
