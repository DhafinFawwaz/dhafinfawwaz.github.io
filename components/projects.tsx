import styles from '../styles/projects.module.css'
import Link from 'next/link'
import Image from 'next/image'
// import ExportedImage from 'next-image-export-optimizer'

import { Project, projects } from '../json/projects'
import React, { ReactElement, useState } from 'react'
import { ActiveTags } from '../json/tags'
import Details from './details'

interface NewlineTextProps {
  text: string;
}

type ActiveTagsType = {
  activeTags: ActiveTags[];
}

export default function Projects({ activeTags }:ActiveTagsType) {

  const [modalActive, setModalActive] = useState<boolean>(false);
  const [project, setProject] = useState<Project>(projects[1]); //projects[1] has smaller size so its the default

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


  function onProjectClick(clickedProject: number){
    setProject(projects[clickedProject]);
    setModalActive(true);
  }
  function onCloseClick(){
    window.history.replaceState(null, '', '/')
    setModalActive(false);
  }
  
  let filteredProjects = projects.filter(project => (
    project.tags.some(tag => (
      (activeTags.some(activeTag => (
        (activeTag.id === tag.id) && (activeTag.isActive)
      )))
    ))
  ))

  if(!activeTags.some(activeTag => activeTag.isActive === true))filteredProjects = projects;



  

  return (
<>
  <ul className={`${styles.container} container grid`}>
    
    {filteredProjects.map((project, index) => (


      <li key={index} className={styles.content__container}>
        
        <div className={styles.content}>

          <Link scroll={false} as={`/project/${project.slug}`} href={`?title=${project.slug}`} className={styles.link} onClick={() => onProjectClick(index)}></Link>
          <Image src={`/img/projects/optimized/${project.slug}/${project.thumbnail}`} alt={project.title} width={640} height={640}/>

          <div className={styles.description}>

            <div>
              <h3 className={`${styles.title}`}>{project.title}</h3>
            </div>

            <div className={styles.tag__container}>
              {project.tags.map((tag, i) => (
                <Link key={i} href={`/tag/?tag=${tag.slug}`}
                
                style={{backgroundColor: tag.bgColor, color: tag.textColor}} 
                
                className={styles.tag}>

                  {tag.title}
                  
                </Link>)

              )}

            </div>
          </div>

        </div>


      </li>

    ))}
  </ul>


  <div className={`${styles.modal} ${modalActive ? styles.active:styles.inactive}`} onClick={() => onCloseClick()}>
                  
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
