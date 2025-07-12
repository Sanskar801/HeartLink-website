import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import { RelationshipModule } from './components/RelationshipModule'
import Discovery from './sections/Discovery'
import Hero from './sections/Hero'
import Relationship from './sections/Relationship'
import Testimonials from './sections/Testimonials'
import Waitlist from './sections/Waitlist'

function App() {


  return (
    <>
      <Header />
      <Hero />
      <Discovery />
      <Relationship />
      <Testimonials />
      <Waitlist />
      <Footer />
    </>
  )
}

export default App
