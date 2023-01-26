import styles from '../../styles/projects.module.css'
import Head from 'next/head'
import Image from 'next/image'

import { projects } from '../../json/projects'
import { Projects } from '../../json/projects'
import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import Details from '../../components/details'

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
export default function DetailsFromURL( { project }:Projects ) {
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
        <Details project={project} modalActive={true} onCloseClick={ () => onCloseClick() } isBlur={true}/>

      </section>
    </>
  )
}
