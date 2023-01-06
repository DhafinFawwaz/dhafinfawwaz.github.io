import styles from '../styles/achievement.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ExportedImage from 'next-image-export-optimizer'

import achievement from '../json/achievement.json'
import { useState } from 'react'

achievement.reverse();

export default function Achievement() {
  const [active, setActive] = useState<string[]>(Array.from({length: achievement.length}, () => styles.inactive));

  function onAchievementClick(clickedAchievement: number){
    if(active[clickedAchievement] === styles.inactive){
      setActive(active.map((isActive: string, index: number) => 
        (clickedAchievement === index) ? styles.active : styles.inactive
      ));
    }else{
      setActive(active.map(() => styles.inactive));
    }
  }

  return (
      <ul className={`${styles.container} container grid`}>

        {achievement.map((content, index) => {
          return (
            <li className = { active[index] } key={index}>
              
              <div className={`${styles.header}`} onClick={() => onAchievementClick(index)}>
                <i className={`${content.icon} ${styles.icon}`}></i>

                <div>
                  <h3 className={`${styles.title}`}>{content.title}</h3>
                  <span className={`${styles.subtitle}`}> <b>[{content.date}]</b> - {content.subtitle}</span>
                </div>
                <i className={`uil uil-angle-down ${styles.arrow}`}></i>
              </div>

              <div className={`${styles.details} grid`}>
                <div className={styles.img__container}>
                  <ExportedImage className={styles.img} src={`/img/achievement/${content.img}`} alt={content.title} height={256} width={256} />
                </div>
                <div className={styles.description__container}>
                  <p className={styles.description}>{content.description}</p>
                </div>
              </div>
              
            </li>
          )
        })}

      </ul>
  )
}


