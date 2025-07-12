import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import ScrollToTop from './components/ui/ScrollToTop'
import Discovery from './sections/Discovery'
import Hero from './sections/Hero'
import Relationship from './sections/Relationship'
import Testimonials from './sections/Testimonials'
import Waitlist from './sections/Waitlist'

function App() {


  return (
    <>
      <Header />
      <main>
        <Hero />
        <Discovery />
        <Relationship />
        <Testimonials />
        <Waitlist />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
