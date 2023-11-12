import Image from 'next/image'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Work from './components/work'
import Contact from './components/contact'

export default function Home() {
  return (
    <div>
      <header></header>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
      </main>
      <footer></footer>
    </div>
  )
}
