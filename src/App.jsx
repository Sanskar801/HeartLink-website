import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import ScrollToTop from './components/ui/ScrollToTop'
import Working from './sections/Working'
import Hero from './sections/Hero'
import Breather from './sections/Breather'

function App() {


  return (
    <>
      <Header />
      <main>
        <Hero />
        <Working />
        <Breather />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App
