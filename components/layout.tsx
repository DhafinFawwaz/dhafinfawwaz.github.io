import Navbar from './navbar'
import Footer from './footer'

type LayourProps = {
  children: React.ReactNode
}

export default function Layout({ children } : LayourProps) {
  return (
    <>
      <Navbar/>
      <div className={`background`}>
        <div className={`background_child`}></div>
      </div>
      { children }
      <Footer/>
    </>
  )
}
