import Hero from './components/hero'
import Skills from './components/skills'
import Work from './components/work'
import About from './components/about'
import Contact from './components/contact'
import Header from './components/header'
import Footer from './components/footer'

export default function Home() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Hero/>
        <Skills/>
        <Work/>
        <About/>
        <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
