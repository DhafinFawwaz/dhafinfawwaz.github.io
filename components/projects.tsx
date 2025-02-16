import ProjectsJson from "@/data/projects.json";
import tagsJsonImported from "@/data/tags.json";
import { Project, Tag } from "@/types/type";
import ProjectCard from "@/components/projectcard";
import useResolutionChange from "@/hooks/useResolutiuonChange";

const tagsMap: {[key: string]: Tag} = tagsJsonImported;
const ProjectsList: Project[] = ProjectsJson;

function getDivided(arr: Project[], n: number): Project[][] {
    const divided: Project[][] = [];
    for (let i = 0; i < n; i++) divided.push([]);
    for (let i = 0; i < arr.length; i++) {
        divided[i % n].push(arr[i]);
    }
    return divided;
}

const ProjectsListDivided3 = getDivided(ProjectsList, 3);
const ProjectsListDivided2 = getDivided(ProjectsList, 2);
const ProjectsListDivided1 = getDivided(ProjectsList, 1);

const card = (item: Project, index: number) => <ProjectCard key={index} project={item} tags={item.tags.map(tag => ({
        name: tagsMap[tag].name,
        color: tagsMap[tag].color, 
        icon: tagsMap[tag].icon, 
        slug: tag
    })
)}></ProjectCard>

const mapper = (item: Project[], index: number) => <div key={index} className="flex flex-col gap-4">{item.map(card)}</div>;

export default function ProjectPage() {
    
    const screenSize = useResolutionChange(_ => {});

    function ProjectMasonry() {
        if(screenSize === "2xs") return <div className="gap-4 place-items-start hidden 2xs:grid 2xs:grid-cols-2 md:hidden">
            {ProjectsListDivided2.map(mapper)}
        </div>
        if(screenSize === "md") return <div className="gap-4 place-items-start hidden md:grid md:grid-cols-3">
            {ProjectsListDivided3.map(mapper)}
        </div>
        return <div className="gap-4 place-items-center grid grid-cols-1 2xs:hidden">
            {ProjectsListDivided1.map(mapper)}
        </div>
    }

    return <section id="project">
    <h2>Project</h2>
    <h3 className='text-zinc-400 text-sm font-medium'>Collection of projects that i built or involved in</h3>
    <br/>

    <ProjectMasonry/>

</section>
}