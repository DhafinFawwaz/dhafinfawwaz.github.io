import Head from 'next/head'

import Home from '../components/home'
import Qualification from '../components/qualification'
import Projects from '../components/projects'
import Achievement from '../components/achievement'
import { tags } from '../json/tags'



export default function Index() {

  
  // Project no filter
  const activeTag = Array.from({length: tags.length}, () => ({isActive:false, id:0}));
  
  return (
    <>
      
      <Head>
        <title>Dhafin Fawwaz Ikramullah</title>
        <meta name="keywords" content="Dhafin Fawwaz"/>
        <meta name="author" content="Dhafin Fawwaz Ikramullah"></meta>
        <meta name="description" content="Portfolio which consist of projects about Mobile Development, Game Development, and Web Development"/>
      </Head>



      <section className={`home section`} id="home">
        <Home></Home>
      </section>

      <section className={`qualification section`} id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My journey</span>
        <Qualification></Qualification>
      </section>

      <section className={`qualification section`} id="achievement">
        <h2 className="section__title">Achievement</h2>
        <span className="section__subtitle">What i achieve throughout my journey</span>
        <Achievement></Achievement>
      </section>
      
      <section className={`projects section`} id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Collection of projects that i built or involved in.</span>
        <Projects activeTags={activeTag}></Projects>
      </section>

      
    </>
  )
}

