import styles from '../styles/projects.module.css'
import Image from 'next/image'

import { Project, projects } from '../json/projects'
import React, { ReactElement, useState } from 'react'
import { ActiveTags } from '../json/tags'

interface NewlineTextProps {
  text: string;
}

type DetailsType = {
  project: Project;
  modalActive: boolean;
  onCloseClick: Function;
  isBlur: boolean;
}

export default function Details({ project, modalActive, onCloseClick, isBlur }: DetailsType) {

  function NewlineText(props: NewlineTextProps):ReactElement {
    const text = props.text;
    return (<>{text.split('\n').map((str:string, index:number) => (
      (str.substring(0,2) === "- ") ? (
        <div key={index} className={styles.modal__description__point}>
          <div>-</div>
          <p className={styles.modal__description}>{str.split("- ")[1]}</p>
        </div>
      ):(
        <p key={index} className={styles.modal__description}>{str}</p>
      )
    ))}</>)
  }


  return (
<>
  <div className={`${styles.modal} ${modalActive ? styles.active:styles.inactive}`} onClick={() => onCloseClick()}  style={{backdropFilter: isBlur ? "blur(6px)" : "none"}}>
    
    <div className={`container ${styles.modal__header}`} onClick={(e) => e.stopPropagation()}>
      <div  className={`container ${styles.modal__title}`}>
        {project.title}
      </div>
        
      <div className={styles.modal__close} onClick={() => onCloseClick()}>
        <i className={`uil uil-times ${styles.modal__icon}`}></i>
      </div>
    </div>

    <div className={`container ${styles.modal__content}`} onClick={(e) => e.stopPropagation()}>

      <div className={styles.modal__body}>

        {(project.imageDetails.length === 4) ? (
          <div className={styles.imgs__4}>
            {project.imageDetails.map((imageDetail, i) => (
              <Image key={i} className={styles.img__4} src={`/img/projects/optimized/${project.slug}/${imageDetail.img}`} alt={imageDetail.img} width={imageDetail.width} height={imageDetail.height} placeholder = 'blur' blurDataURL={imageDetail.blurDataURL}/>
            ))}
          </div>
        ):(
          <ul className={styles.img__flex__ul}>
            {project.imageDetails.map((imageDetail, i) => (
              <li key={i} style={{ minWidth: `${imageDetail.width/ Object.values(project.imageDetails).reduce((t, {width}) => t + width, 0) * 97}%`}}> {/*97 because its subtracted by gap*/}
                <Image className={styles.img__flex__img} src={`/img/projects/optimized/${project.slug}/${imageDetail.img}`} alt={imageDetail.img} width={imageDetail.width} height={imageDetail.height} placeholder = 'blur' blurDataURL={imageDetail.blurDataURL}/>
              </li>
            ))}
          </ul>
          )
        }

        

        <NewlineText text={project.description}/>

      </div>

    </div>

    <div className={`container ${styles.modal__footer}`} onClick={(e) => e.stopPropagation()}>
        
        {(project.src !== "") ? (
          <a className={styles.modal__footer__button__container} href={project.src} target="_blank" rel="noreferrer">
            <div>Visit</div> 
          </a>
        ):(
          <div className={`${styles.modal__footer__button__container} ${styles.modal__footer__not__allowed}`}>
            <div>Visit not allowed</div> 
          </div>
        )}
          
        <div className={styles.modal__footer__button__container} onClick={() => onCloseClick()}>
          <div>Close</div> 
        </div>
      
    </div>


  </div>
</>
  )
}
