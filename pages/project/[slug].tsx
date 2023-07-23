import styles from '../../styles/projects.module.css'
import Head from 'next/head'

import { projects } from '../../json/projects'
import { Project } from '../../json/projects'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
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

export const getStaticProps: GetStaticProps<{project: Project}> = async (context) => {
  
  if(!context.params)return {
    props: {project: null},
  };
  const slug = context.params.slug;
  const data = JSON.parse(JSON.stringify(projects.find(project => project.slug === slug)));
  return {
    props: {project: data},
  };
};

// Used when user copy the url when the project details is shown and paste it to the browser
export default function DetailsFromURL( { project } :InferGetStaticPropsType<typeof getStaticProps> ) {
  const router = useRouter();

  function onCloseClick(){
    router.push("/#projects")
  }


  return (
    <>
      <Head>
        <title>{`${project.title} | Dhafin Fawwaz Ikramullah`}</title>
        <meta name="author" content="Dhafin Fawwaz Ikramullah"></meta>
        <meta name="keywords" content={project.title}/>
        <meta name="description" content={project.description}/>
      </Head>
      <section className={`${styles.projects} section`} style={{height:"calc(100vh - var(--mb-3))"}}>
        <Details project={project} modalActive={true} onCloseClick={ () => onCloseClick() } isBlur={true}/>

      </section>
    </>
  )
}
