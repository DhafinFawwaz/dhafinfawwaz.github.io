import { Project, Tag } from "@/types/type";
import Link from "next/link";

export default function Details({project, tags, nextProjectSlug, prevProjectSlug}: {project: Project, tags: Tag[], nextProjectSlug: string, prevProjectSlug: string}) {

    function projectGalery(project: Project) {

        const result: JSX.Element[] = [];

        if(project.imageDetails.length === 1){
            return <div className="w-full rounded-xl overflow-hidden bg-night-900
                    min-h-16 4xs:min-h-20 3xs:min-h-24 2xs:min-h-28 xs:min-h-36 sm:min-h-40 md:min-h-44 lg:min-h-56 
                    ">
                <img src={`/img/projects/optimized/${project.slug}/${project.imageDetails[0].img}`} alt={project.title} className="object-cover w-full"/>
            </div>
        }

        for(let i = 0; i < project.imageDetails.length; i += 2){
            const type1 = project.imageDetails[i].type;
            const type2 = project.imageDetails[i+1].type;

            const maxHeight = Math.max(project.imageDetails[i].height, project.imageDetails[i+1].height);

            const img1Width = project.imageDetails[i].width * maxHeight / project.imageDetails[i].height;
            const img2Width = project.imageDetails[i+1].width * maxHeight / project.imageDetails[i+1].height;

            const totalWidth = img1Width + img2Width;
            const percentage1 = img1Width / totalWidth * 100;
            const percentage2 = img2Width / totalWidth * 100;
            
            if(type1 === 0 && type2 === 0)
                result.push(
                <div key={i} className="w-full flex gap-2 xs:gap-4">
                    <div className="bg-night-900 rounded-xl h-full 
                    min-h-16 4xs:min-h-20 3xs:min-h-24 2xs:min-h-28 xs:min-h-36 sm:min-h-40 md:min-h-44 lg:min-h-56 
                    " style={{width: percentage1+"%"}}>
                        <img key={project.slug} src={`/img/projects/optimized/${project.slug}/${project.imageDetails[i].img}`} alt={project.title} className="rounded-xl object-cover w-full h-full"/>
                    </div>
                    <div className="bg-night-900 rounded-xl h-full
                    min-h-16 4xs:min-h-20 3xs:min-h-24 2xs:min-h-28 xs:min-h-36 sm:min-h-40 md:min-h-44 lg:min-h-56 
                    " style={{width: percentage2+"%"}}>
                        <img key={project.slug} src={`/img/projects/optimized/${project.slug}/${project.imageDetails[i+1].img}`} alt={project.title} className="rounded-xl object-cover w-full h-full"/>
                    </div>
                </div>
                );

            else 
                result.push(
                <div key={i} className="w-full flex gap-2 xs:gap-4">
                    <div className="bg-night-900 rounded-xl
                    min-h-16 4xs:min-h-20 3xs:min-h-24 2xs:min-h-28 xs:min-h-36 sm:min-h-40 md:min-h-44 lg:min-h-56 
                    " style={{width: percentage1+"%"}}>
                        <img key={project.slug} src={`/img/projects/optimized/${project.slug}/${project.imageDetails[i].img}`} alt={project.title} className="rounded-xl object-cover w-full h-full"/>
                    </div>
                    <div className="bg-night-900 rounded-xl
                    min-h-24 4xs:min-h-28 3xs:min-h-36 2xs:min-h-48 xs:min-h-56 sm:min-h-64 md:min-h-72 lg:min-h-80 
                    " style={{width: percentage2+"%"}}>
                        <img key={project.slug} src={`/img/projects/optimized/${project.slug}/${project.imageDetails[i+1].img}`} alt={project.title} className="rounded-xl object-cover w-full h-full"/>
                    </div>
                </div>
                );


            continue;

            if(type1 === 0 && type2 === 0){
                result.push(<div key={i} className="w-full flex gap-2 xs:gap-4">
                    <div className="w-full rounded-xl overflow-hidden">
                        <img src={`/img/projects/optimized/${project.slug}/${project.imageDetails[i].img}`} alt={project.title} className="object-cover w-full h-full"/>
                    </div>
                    <div className="w-full rounded-xl overflow-hidden">
                        <img src={`/img/projects/optimized/${project.slug}/${project.imageDetails[i+1].img}`} alt={project.title} className="object-cover w-full h-full"/>
                    </div>
                </div>)
            } else if(type1 === 1 && type2 === 1){
                result.push(<div  key={i}className="w-full flex gap-2 xs:gap-4">
                    <div className="w-full">
                        <img src={`/img/projects/optimized/${project.slug}/${project.imageDetails[i].img}`} alt={project.title} className="rounded-xl object-cover"/>
                    </div>
                    <div className="w-full">
                        <img src={`/img/projects/optimized/${project.slug}/${project.imageDetails[i+1].img}`} alt={project.title} className="rounded-xl object-cover"/>
                    </div>
                </div>)
            } else if(type1 === 0 && type2 === 1){
                result.push(<div key={i} className="w-full flex gap-2 xs:gap-4">
                    <div className="" style={{width: percentage1+"%"}}>
                        <img src={`/img/projects/optimized/${project.slug}/${project.imageDetails[i].img}`} alt={project.title} className="rounded-xl object-cover h-full"/>
                    </div>
                    <div className="" style={{width: percentage2+"%"}}>
                        <img src={`/img/projects/optimized/${project.slug}/${project.imageDetails[i+1].img}`} alt={project.title} className="rounded-xl object-cover h-full"/>
                    </div>
                </div>)
            } else if(type1 === 1 && type2 === 0){
                result.push(<div key={i} className="w-full flex gap-2 xs:gap-4">
                    <div className="" style={{width: percentage1+"%"}}>
                        <img src={`/img/projects/optimized/${project.slug}/${project.imageDetails[i].img}`} alt={project.title} className="rounded-xl w-full h-auto"/>
                    </div>
                    <div className="" style={{width: percentage2+"%"}}>
                        <img src={`/img/projects/optimized/${project.slug}/${project.imageDetails[i+1].img}`} alt={project.title} className="rounded-xl w-full h-auto"/>
                    </div>
                </div>)
            }
        }

        return result;
    }

    function changePageButton(text: string, href: string, iconSrc: string) {
        return <Link href={href} className="flex justify-center items-center bg-night-800 rounded-lg m-0 text-center cursor-pointer text-slate-50 border-none font-bold text-xs gap-2 w-9 h-9 ease-out-back duration-150 shadow-rim-sm ring-night-900 min-w-9
            hover:scale-105
            hover:bg-night-600
            focus:ring-4 
            active:ring-4 
            active:ease-out-expo">
            <img className="-translate-y-0.5 scale-75" src={iconSrc} alt="next"/>
        </Link>
    }

    return <>
    <div className="xs:hidden fixed bottom-0 w-full p-3 bg-night-800 shadow-rim-sm">
        
    {project.src === "" ? 
        <div className="flex w-full items-center justify-center rounded-lg m-0 text-center cursor-not-allowed text-slate-50 border-none font-bold text-xs gap-2 ease-out-back duration-150 py-2 px-4 shadow-rim-sm ring-indigo-900 bg-night-600">
            <img className="-rotate-45 scale-115" src={"https://api.iconify.design/mingcute/arrow-right-fill.svg?color=%23666666"} alt="next"/>
            <div className="text-sm translate-y-0.5 text-night-300">Visit Not Allowed</div>
        </div>
        
        :
        <a href={project.src} target="_blank" className="flex w-full items-center justify-center bg-indigo-600 rounded-lg m-0 text-center cursor-pointer text-slate-50 border-none font-bold text-xs gap-2 ease-out-back duration-150 py-2 px-4 shadow-rim-sm ring-indigo-900
            hover:scale-102
            hover:bg-indigo-700
            focus:ring-4 
            active:ring-4 
            active:ease-out-expo">
            <img className="-rotate-45 scale-115" src={"https://api.iconify.design/mingcute/arrow-right-fill.svg?color=%23ffffff"} alt="next"/>
            <div className="text-sm translate-y-0.5">Visit</div>
        </a>
    }
        
    </div>
    <section id="project">
        <div className="flex justify-between">
            {changePageButton("Previous", "/project/"+prevProjectSlug, "https://api.iconify.design/ooui/next-rtl.svg?color=%23ffffff")}
            <h2 className="text-2xl 2xs:text-3xl xs:text-4xl mx-2">{project.title}</h2>
            {changePageButton("Next", "/project/"+nextProjectSlug, "https://api.iconify.design/ooui/next-ltr.svg?color=%23ffffff")}
        </div>

        <div className="flex flex-col items-center justify-center mt-3">
            <h2 className="text-4xl font-bold"></h2>

            <div className="flex flex-col gap-2 xs:gap-4 w-full">
                {projectGalery(project)}
            </div>
            
            <div className="flex mt-2 xs:mt-4 w-full gap-2 xs:gap-4">
                <div className="grow">
                    <div className="w-full flex">
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => {
                                return <a key={index} aria-label={"find "+tag.name} href={"/tag?tag=" + tag.slug} className={`text-2xs xs:text-xs font-semibold ${tag.color} bg-night-600 px-2 rounded-lg pt-1 h-5 grow text-center z-40 hover:bg-indigo-600 active:bg-indigo-400 hover:cursor-pointer duration-75 shadow-rim-sm drop-shadow-sm focus:ring-4 ring-indigo-800
                                `}>{tag.name}</a>
                            })}
                            <div style={{flexGrow: 1000000000}}></div>
                        </div>
                    </div>
                </div>
                
                <div className="whitespace-nowrap">
                    {project.src === "" ? 
                    
                    <div className="hidden xs:flex items-center justify-center bg-night-600 rounded-lg m-0 text-center cursor-not-allowed text-slate-50 border-none font-bold text-xs gap-2 ease-out-back duration-150 py-2 shadow-rim-sm ring-night-900 px-4">
                        <img className="-rotate-45 scale-115" src={"https://api.iconify.design/mingcute/arrow-right-fill.svg?color=%23666666"} alt="next"/>
                        <div className="text-sm translate-y-0.5 text-night-300">Visit Not Allowed</div>
                    </div>
                    
                    :
                    
                    <a href={project.src} target="_blank" className="hidden xs:flex items-center justify-center bg-indigo-600 rounded-lg m-0 text-center cursor-pointer text-slate-50 border-none font-bold text-xs gap-2 ease-out-back duration-150 py-2 px-4 shadow-rim-sm ring-indigo-900
                        hover:scale-105
                        hover:bg-indigo-700
                        focus:ring-4 
                        active:ring-4 
                        active:ease-out-expo">
                        <img className="-rotate-45 scale-115" src={"https://api.iconify.design/mingcute/arrow-right-fill.svg?color=%23ffffff"} alt="next"/>
                        <div className="text-sm translate-y-0.5">Visit</div>
                    </a>
                    }
                </div>

            </div>
            
            <div className="w-full mt-2 mb-4">
                <p className="text-md font-normal text-justify">{project.description}</p>
            </div>

        </div>
    </section>
    </>
    
}