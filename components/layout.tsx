import Navbar from './navbar'
import Footer from './footer'

type LayourProps = {
  children: React.ReactNode
}

export default function Layout({ children } : LayourProps) {
  return (
    <>
      <Navbar/>
      { children }
      <Footer/>
    </>
  )
}
