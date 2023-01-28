import styles from '../styles/projects.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { Project, projects } from '../json/projects'
import React, { ReactElement, useState } from 'react'
import { ActiveTags } from '../json/tags'
import Details from './details'
import CardLink from './cardlink'

interface NewlineTextProps {
  text: string;
}

type ActiveTagsType = {
  activeTags: ActiveTags[];
}

export default function Projects({ activeTags }:ActiveTagsType) {

  const [modalActive, setModalActive] = useState<boolean>(false);
  const [project, setProject] = useState<Project>(
    {
      id: -1,
      title: "",
      slug: "",
      thumbnail: "",
      blurDataURL: "",
      tags: [],
      description: "",
      src: "",
      imageDetails: []
    }
  ); 

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
    setProject(
      {
        id: -1,
        title: "",
        slug: "",
        thumbnail: "",
        blurDataURL: "",
        tags: [],
        description: "",
        src: "",
        imageDetails: []
      }
    );
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
          
          

          
          <Image src={`/img/projects/optimized/${project.slug}/${project.thumbnail}`} alt={project.title} width={250} height={141} placeholder = 'blur' blurDataURL={project.blurDataURL}/>

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

  <Details project={project} modalActive={modalActive} onCloseClick={ () => onCloseClick() } isBlur={false}/>
 



</>
  )
}
