import styles from '../styles/achievement.module.css'
import Link from 'next/link'
import Image from 'next/image'

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

  const blurDataURL16x9 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAIAAAC0SDtlAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABJJREFUeJxjeEIiYBjVMCg0AAB6foDQu5BAxwAAAABJRU5ErkJggg==";
  const graydark = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAANSURBVBhXY7CwsPgPAAL8AahMRHs7AAAAAElFTkSuQmCC";

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
                <div className={styles.img__container} style={{ minHeight: 210}}>
                  <Image className={styles.img} src={`/img/achievement/optimized/${content.img}`} alt={content.title} height={210} width={280} placeholder = 'blur' blurDataURL={graydark}/>
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


