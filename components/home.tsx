import styles from '../styles/home.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'
import { skills } from '../json/skills'
import contact from '../json/contact.json'

export default function Home() {

  const [active, setActive] = useState<string>(styles.inactive);

  function onViewMoreClick(){
    setActive((isActive: string) => {
      if(isActive === styles.inactive){
        return styles.active;
      }
      return styles.inactive;
    })
  }

  return (
    <div className={`${styles.maxwidth_container}`}>
      <div className={`container grid ${styles.container}`}>
        <div className={`${styles.content} grid`}>

          <div className={styles.social}>
            {Object.values(contact).map((value, index) => (
              value.href === "" ? (
                <div key={index} className={styles.social__icon}>
                  <Image src={value.img} width={32} height={32} alt={value.title}/>
                </div>
              ) : (
                <a key={index} href={value.href} className={styles.social__icon} target={value.href.slice(0, 2) === "/#" ? "_self" : "_blank"} rel="noreferrer">
                  <Image src={value.img} width={32} height={32} alt={value.title}/>
                </a>
              )
            ))}
          </div>

          <div className={styles.img}>
            <Image className={styles.img__profile} src="/img/home/Profile Photo.png" alt="Profile photo" width={512} height={512} priority={true}/>
          </div>

          <div className={styles.data}>
            <h1 className={styles.title}>Dhafin Fawwaz<br/>Ikramullah</h1>
            <h4 className={styles.subtitle}>Software Engineer | Programmer</h4>
            <p className={styles.description}>{`An Indie Game Developer for fun, a particle vfx/shader enthusiast, and a math enjoyer. My current main specialities are in Mobile, Game, and Web Development which will change in the future since I'm interested in learning more. I've published a game with +1000 installs, worked inside and led teams on projects, and able to work in fast paced environment or under pressure.`}</p>

            <Link href="/pdf/Dhafin Fawwaz Ikramullah - CV.pdf" target="_blank" className="button button--flex">
              Download CV
            </Link>

            <a href="#projects" className={`button button--flex ${styles.button__project}`}>
              View Projects
            </a>

          </div>
        </div>


        <div className={`${styles.skills} container grid ${active}`}>
          
          {skills.map((skill, index) => {
            return (
              <div key={index} className={styles.skill__container}>
                <Link href={`/tag/?tag=${skill.devType.slug}`} className={styles.skill__link}>
                
                </Link>

                <div className={styles.skill}>
                
                  <h3 className={styles.skill__title}>{skill.devType.title}</h3>

                  <span className={styles.skill__subtitle}>Tools & Languages</span>
                  <ul className={styles.tools}>
                    {skill.tools.map((tool, i) => {
                      return (
                        <li key={i} className={styles.tool__icon}>
                          <Link href={`/tag/?tag=${tool.slug}`}>
                            <Image src={tool.img} alt={tool.title} width={32} height={32}/>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                  <div className={styles.tools__hider}></div>
                </div>
              
              </div>
              
            )
          })}
          <div className={`button ${styles.tools__more}`} onClick={() => onViewMoreClick()}>{ (active === styles.active) ? "View Less":"View More" }</div>
        
        </div>


        


      </div>
    </div>
    
  )
}
