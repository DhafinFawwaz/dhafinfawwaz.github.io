import Image from 'next/image'

import styles from '../styles/footer.module.css'
import contact from "../json/contact.json"


export default function Footer() {
  return (
    <footer className={`section`} id="contact">
      <h2 className={`section__title ${styles.title}`}>Contact</h2>
      <span className={`section__subtitle ${styles.subtitle}`}>{"Opportunity for an internship would be nice :)"}</span>

      <div className={`container`}></div>

      <ul className={`${styles.container} container grid`}>
        
        {Object.values(contact).map((value, index) => {
          return (
            <li key={index} className={styles.content__container}>
              
              <div className={styles.content}>

                {(value.href !== "") ? (
                  <a href={value.href} className={styles.link} target="_blank" rel="noreferrer"></a>

                ): (<></>) }


                <div className={`${styles.type__container}`}>

                  <div className={styles.icon__container}>
                    <Image className={styles.icon} src={value.img} alt={value.title} width={32} height={32}/>
                  </div>

                  <div className={styles.header__container}>
                    <h3 className={`${styles.header}`}>{value.title}</h3>
                  </div>

                </div>

                <div className={styles.description__container}>
                    <h4 className={`${styles.description}`} >{value.value}</h4>
                </div>

              </div>




            </li>
          )
        })}
        
      </ul>

      <div className={`container`}>
        <p className={styles.copyright}>Copyright © 2022<br />Dhafin Fawwaz Ikramullah</p>
      </div>
    </footer>
  )
}



declare module Contact {

  export interface Gmail {
      title: string;
      value: string;
      href: string;
      img: string;
  }

  export interface Github {
      title: string;
      value: string;
      href: string;
      img: string;
  }

  export interface Linkedin {
      title: string;
      value: string;
      href: string;
      img: string;
  }

  export interface Whatsapp {
      title: string;
      value: string;
      href: string;
      img: string;
  }

  export interface Line {
      title: string;
      value: string;
      href: string;
      img: string;
  }

  export interface Instagram {
      title: string;
      value: string;
      href: string;
      img: string;
  }

  export interface Contacts {
      gmail: Gmail;
      github: Github;
      linkedin: Linkedin;
      whatsapp: Whatsapp;
      line: Line;
      instagram: Instagram;
  }

}