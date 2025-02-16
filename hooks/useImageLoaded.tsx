import { useEffect, useRef, useState } from "react"

export default function useImageLoaded() {
    const [loaded, setLoaded] = useState(false)
    const ref = useRef<HTMLImageElement>(null)
  
    const onLoad = () => {
      setLoaded(true)
    }
  
    useEffect(() => {
      if (ref.current && ref.current.complete) {
        onLoad()
      }
    })
  
    return {ref, loaded, onLoad}
  }