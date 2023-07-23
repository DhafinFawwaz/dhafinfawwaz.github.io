import Navbar from './navbar'
import Footer from './footer'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children } : LayoutProps) {
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
