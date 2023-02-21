import '@/styles/globals.css'
import AdPage from '@/components/ad'
import { useState, useEffect } from 'react'
export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])
  return  <Component {...pageProps} />
}
