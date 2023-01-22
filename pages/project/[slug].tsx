import styles from '../../styles/projects.module.css'
import Head from 'next/head'
import Image from 'next/image'

import { projects } from '../../json/projects'
import { Projects } from '../../json/projects'
import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react'
import { useRouter } from 'next/router'

export const getStaticPaths: GetStaticPaths = async () => {
  const data = projects;
  const paths = data.map(project => {
    return {
      params: {slug: project.slug.toString()}
    };
  })

  return {
    paths: paths,
    fallback: false
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  
  if(!context.params)return {
    props: {project: null},
  };
  const slug = context.params.slug;
  const data = JSON.parse(JSON.stringify(projects.filter(project => project.slug === slug)[0]));
  return {
    props: {project: data},
  };
};

interface NewlineTextProps {
  text: string;
}
export default function Details( { project }:Projects ) {
  const router = useRouter();

  function onCloseClick(){
    router.push("/#projects")
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
      <Head>
        <title>Dhafin Fawwaz | {project.title}</title>
        <meta name="keywords" content={project.title}/>
        <meta name="description" content={project.description}/>
      </Head>
      <section className={`${styles.projects} section`} style={{height:"calc(100vh - var(--mb-3))"}}>
        <div className={`${styles.modal} ${styles.active}`} onClick={() => onCloseClick()} style={{backdropFilter: "blur(6px)"}}>
                  
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
                    <Image key={i} className={styles.img__4} src={`/img/projects/optimized/${project.slug}/${img}`} alt={img} width={320} height={180} placeholder = 'blur' blurDataURL='/img/placeholder/16x9.png'/>
                  ))}
                </div>
              ):(project.imgs.length === 1) ? (
                <div className={styles.imgs__1}>
                  <Image src={`/img/projects/optimized/${project.slug}/${project.imgs[0]}`} alt={project.imgs[0]} width={1200} height={675} placeholder = 'blur' blurDataURL='/img/placeholder/16x9.png'/>
                </div>
              ):(
                <ul className={styles.img__flex__ul}>
                  {project.imgs.map((img, i) => (
                    <li key={i} className={styles.img__flex__li}>
                      <Image className={styles.img__flex__img} src={`/img/projects/optimized/${project.slug}/${img}`} alt={img} width={640} height={251} placeholder = 'blur' blurDataURL='/img/placeholder/16x9.png'/>
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
      </section>
    </>
  )
}
