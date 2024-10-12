import ProjectsJson from "@/data/projects.json";
import tagsJsonImported from "@/data/tags.json";
import { Project, Tag } from "@/types/type";
import ProjectCard from "@/components/ProjectCard";

const tagsMap: {[key: string]: Tag} = tagsJsonImported;

const ProjectsList: Project[] = ProjectsJson;

export default function ProjectPage() {

    return <section id="project">
    <h2>Project</h2>
    <h3 className='text-zinc-400 text-sm font-medium'>Collection of projects that i built or involved in</h3>
    <br/>

    <div className="gap-4 grid grid-cols-1 2xs:grid-cols-2 md:grid-cols-3 place-items-center 2xs:place-items-start">
        {ProjectsList.map((item, index) => {
            return <ProjectCard key={index} project={item} tags={item.tags.map(tag => {
                return {
                        name: tagsMap[tag].name,
                        color: tagsMap[tag].color, 
                        icon: tagsMap[tag].icon, 
                        slug: tag
                    }
                }
            )}></ProjectCard>
        })}
    </div>

</section>
}