import Link from "next/link";
import { Project, Tag } from "@/types/type";

export default function ProjectCard({project, tags, onTagClicked, activeTag}: {project: Project, tags: Tag[], onTagClicked?: (tag: Tag) => void, activeTag?: {[key: string]: boolean}}) {
    
    // function removeHash() {
    //     if (window.location.hash) {
    //         history.replaceState(null, null, window.location.pathname + "#" + project.slug);
    //     }
    // }
    
    return <div id={project.slug} className="flex flex-col bg-night-900 rounded-xl overflow-hidden max-w-72 w-full drop-shadow-lg ease-out-back duration-150 hover:scale-106 active:scale-108 active:bg-night-800 relative">
        <Link href={`/project/${project.slug}`} className="z-30 w-full hover:cursor-pointer absolute h-full"></Link>
        <div className="relative h-40 2xs:h-32 sm:h-40 bg-night-800">
            <img src={`/img/projects/optimized/${project.slug}/${project.thumbnail}`} alt={project.title} className="w-full h-full object-cover"/>
        </div>
        <div className="p-4">
            <h3 className="font-bold z-40 text-slate-50 text-left text-xl sm:text-2xl sm:leading-7">{project.title}</h3>
            <p className="font-semibold text-zinc-400 text-sm leading-4 mt-1">{project.subtitle}</p>
            <ul className="flex flex-wrap gap-1 mt-3 tag-list">

                {/* tag page */}
                {onTagClicked ? 
                <>
                    {tags.map((tag, index) => {
                        if(!activeTag![tag.slug!])
                            return <button key={index} onClick={() => onTagClicked(tag)} className={`text-2xs xs:text-xs font-semibold bg-night-600 px-2 rounded-lg py-0.5 grow text-center z-40 hover:bg-indigo-600 active:bg-indigo-700 hover:cursor-pointer duration-75 shadow-rim-sm drop-shadow-sm focus:ring-4 ring-indigo-800`}>{tag.name}</button>
                        else
                            return <button key={index} onClick={() => onTagClicked(tag)} className={`text-2xs xs:text-xs font-semibold bg-indigo-600 px-2 rounded-lg py-0.5 grow text-center z-40 hover:bg-indigo-700 active:bg-indigo-800 hover:cursor-pointer duration-75 shadow-rim-sm drop-shadow-sm focus:ring-4 ring-indigo-800`}>{tag.name}</button>

                    })}
                </>
                :
                <>
                    {/* home page */}
                    {tags.map((tag, index) => {
                        return <a key={index} href={"/tag?tag=" + tag.slug} className={`text-2xs xs:text-xs font-semibold ${tag.color} bg-night-600 px-2 rounded-lg py-0.5 grow text-center z-40 hover:bg-indigo-600 active:bg-indigo-700 hover:cursor-pointer duration-75 shadow-rim-sm drop-shadow-sm focus:ring-4 ring-indigo-800`}>{tag.name}</a>
                    })}
                </>
                }
            </ul>
        </div>
    </div>
}