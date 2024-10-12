import ProjectsJson from "@/data/projects.json";
import tagsJsonImported from "@/data/tags.json";
import { Tag, Project } from "@/types/type";
import Details from "@/components/Details";
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router'
import NavbarPage from "@/components/Navbar";

const tagsJson: {[key: string]: Tag} = tagsJsonImported;
const ProjectsData: Project[] = ProjectsJson;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = ProjectsData;
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

export const getStaticProps: GetStaticProps<{project: Project, nextProject: Project, prevProject: Project}> = async (context) => {
  
  // if(!context.params)return {
  //   props: {project: null, nextProject: null, prevProject: null},
  // };
  // const data = JSON.parse(JSON.stringify(ProjectsData.find(project => project.slug === slug)));

  const slug = context.params!.slug;

  let idx = -1;
  for(let i = 0; i < ProjectsData.length; i++){
    if(ProjectsData[i].slug === slug){
      idx = i;
      break;
    }
  }

  const data = ProjectsData[idx];
  const nextProjectSlug = ProjectsData[(idx + 1) % ProjectsData.length];
  const prevProjectSlug = ProjectsData[(idx - 1 + ProjectsData.length) % ProjectsData.length];
  
  return {
    props: {
      project: data,
      nextProject: nextProjectSlug,
      prevProject: prevProjectSlug
    },
  };
};

export default function DetailsFromURL( { project, nextProject, prevProject } :InferGetStaticPropsType<typeof getStaticProps> ) {
  return (<>
    <Head>
      <title>{project.title+" | Dhafin Fawwaz Ikramullah"}</title>
      <meta name="keywords" content="Dhafin Fawwaz"/>
      <meta name="author" content="Dhafin Fawwaz Ikramullah"></meta>
      <meta name="description" content={project.description}/>
    </Head>
    <main className="w-full flex justify-center">
      <div className="max-w-4xl w-full">
        <Details project={project} tags={project.tags.map(tagKey => {
          return {
            name: tagsJson[tagKey].name,
            color: tagsJson[tagKey].color,
            icon: tagsJson[tagKey].icon,
            slug: tagKey
          }
        })} nextProjectSlug={nextProject.slug} prevProjectSlug={prevProject.slug}/>
      </div>
    </main>
  </>  
  );
}
