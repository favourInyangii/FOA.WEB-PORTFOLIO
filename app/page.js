import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </main>
  )
}