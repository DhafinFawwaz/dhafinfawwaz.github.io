import styles from '../styles/qualification.module.css'
import Link from 'next/link'
import Image from 'next/image'
import qualification from '../json/qualification.json'
import { useState } from 'react'

export default function Qualification() {
  const [active, setActive] = useState(["", styles.active, ""]);
  

  function onPageClick(clickedPage: number) {
    setActive(active.map((isActive: string, index: number) => 
      (clickedPage === index) ? styles.active : ""
    ));
  }
  function generateQualificationBox(element: Qualification){
    return (
      <>
        <h3 className={`${styles.title}`}>{element.title}</h3>
        <span className={`${styles.subtitle}`}>{element.subtitle}</span>

        <div className={`${styles.calendar}`}>
          <i className="uil uil-calendar-alt"></i>{` ${element.date}`}
        </div>
      </>
    );
  }
  function generateQualifications(element: Qualification){
    return (
      <div key={element.id} className={`${styles.data}`}>
        
        {(element.id % 2 === 0) ? (
          <>
            {(element.src === "") ? (
              <div className={styles.data__container}>
                {generateQualificationBox(element)}
              </div>
            ):(
              <a href={element.src} target={element.target} rel="noreferrer" className={styles.data__container}>
                {generateQualificationBox(element)}
              </a>
            )}

            {(element.id === 0) ? (
              <div>
                <span className={`${styles.rounder}`}></span>
              </div>
            ): (
              <div>
                <span className={`${styles.rounder}`}></span>
                <span className={`${styles.line}`}></span>
              </div>
            )}
          </>
        ) : (
          <>
            <div></div>

            {(element.id === 0) ? (
              <div>
                <span className={`${styles.rounder}`}></span>
              </div>
            ): (
              <div>
                <span className={`${styles.rounder}`}></span>
                <span className={`${styles.line}`}></span>
              </div>
            )}

            {(element.src === "") ? (
              <div className={styles.data__container}>
                {generateQualificationBox(element)}
              </div>
            ):(
              <a href={element.src} target={element.target} rel="noreferrer" className={styles.data__container}>
                {generateQualificationBox(element)}
              </a>
            )}
          </>
        )}
        
      </div>
    );
  }
  return (
    <div className={`container`}>
      <div className={`${styles.tabs}`}>

        <div className={`${styles.button} ${active[0]}`} onClick={() => onPageClick(0)}>
          <i className="uil uil-graduation-cap qualification__icon"></i><div className={`${styles.button__text}`}>Education</div>
        </div>

        <div className={`${styles.button} ${active[1]}`} onClick={() => onPageClick(1)}>
          <i className="uil uil-briefcase qualification__icon"></i><div className={`${styles.button__text}`}>Work</div>
        </div>

        <div className={`${styles.button} ${active[2]}`} onClick={() => onPageClick(2)}>
          <i className="uil uil-users-alt qualification__icon"></i><div className={`${styles.button__text}`}>Organization</div>
        </div>

      </div>

      <div className={`${styles.sections}`}>
        


        {/* <!--==================== Education ====================--> */}
        <div className={`${styles.content} ${active[0]}`} data-content id="education">
          
          <span className={`${styles.rounder} ${styles.last}`}></span>
          
          {[...qualification.education].reverse().map(generateQualifications)}
          
        </div>

        {/* <!--==================== Work ====================--> */}
        <div className={`${styles.content} ${active[1]}`} data-content id="work">
          
          <span className={`${styles.rounder} ${styles.last}`}></span>
          
          {[...qualification.work].reverse().map(generateQualifications)}
          
        </div>

        {/* <!--==================== Organization ====================--> */}
        <div className={`${styles.content} ${active[2]}`} data-content id="organization">
          
          <span className={`${styles.rounder} ${styles.last}`}></span>
          
          {[...qualification.organization].reverse().map(generateQualifications)}
          
        </div>



      </div>
    </div>
  )
}


export interface Qualification {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  target: string;
  src: string;
}
