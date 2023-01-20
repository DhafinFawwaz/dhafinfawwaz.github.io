import styles from '../styles/projects.module.css'
import Image from 'next/image'

import { Project } from '../json/projects'
import { ReactElement } from 'react';

interface NewlineTextProps {
  text: string;
}

interface DetailsProps {
  project: Project,
  isActive: boolean
}

export default function Details({project, isActive}: DetailsProps) {
  function onCloseClick(){
    isActive = false;
  }

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
        <div className={`${styles.modal} ${isActive ? styles.active:styles.inactive}`} onClick={() => onCloseClick()}>
                  
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

              {(project.imgs.length === 4) ? (
                <div className={styles.imgs__4}>
                  {project.imgs.map((img:string, i:number) => (
                    <Image key={i} className={styles.img__4} src={`/img/projects/optimized/${project.slug}/${img}`} alt={img} width={384} height={384}/>
                  ))}
                </div>
              ):(project.imgs.length === 1) ? (
                <div className={styles.imgs__1}>
                  <Image src={`/img/projects/optimized/${project.slug}/${project.imgs[0]}`} alt={project.imgs[0]} width={1200} height={1200}/>
                </div>
              ):(
                <ul className={styles.img__flex__ul}>
                  {project.imgs.map((img, i) => (
                    <li key={i} className={styles.img__flex__li}>
                      <Image className={styles.img__flex__img} src={`/img/projects/optimized/${project.slug}/${img}`} alt={img} width={640} height={640}/>
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
