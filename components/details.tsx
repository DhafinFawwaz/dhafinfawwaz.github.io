import useImageLoaded from "@/hooks/useImageLoaded";
import useResolutionChange from "@/hooks/useResolutiuonChange";
import useWindowWidth from "@/hooks/useDebouncedWindowWidth";
import { Project, Tag } from "@/types/type";
import Link from "next/link";
import { RefObject, useEffect, useRef, useState } from "react";

const createImageSrc = (projectSlug: string, imageName: string) => `/img/projects/optimized/${projectSlug}/${imageName}`

function ImageButton({ imgSrc, alt, onClick, percentage, availableHeight, className }: { imgSrc: string, alt: string, onClick: (imgSrc: string) => void, percentage: number, availableHeight: number, className: string }) {
    
    const {ref, loaded, onLoad} = useImageLoaded()
    
    if(loaded) {
        const style = {width: percentage+"%"};
        return <div onClick={() => onClick(imgSrc)} className={className} style={style}>
            <img onLoad={onLoad} ref={ref} src={imgSrc} alt={alt} className="rounded-xl object-cover w-full h-full group-hover:scale-95 duration-150 ease-out-back-expo"/>
        </div>
    } else {
        const style = {width: percentage+"%", height: availableHeight+"px"};
        const extraClass = "animate-pulse bg-zinc-800";
        return <div onClick={() => onClick(imgSrc)} className={className + extraClass} style={style}>
            <img onLoad={onLoad} ref={ref} src={imgSrc} alt={alt} className="rounded-xl object-cover w-full h-full group-hover:scale-95 duration-150 ease-out-back-expo"/>
        </div>
    }
}

function ProjectGalery(project: Project, onClick: (imgSrc: string) => void, containerRef: RefObject<HTMLDivElement>
) {
    const resolution = useResolutionChange(_ => {}, ["xs"]);
    const [refValue, setRefValue] = useState<HTMLDivElement>();
    const [containerSize, setContainerSize] = useState({
        spaceWidth: 0,
        gap: 0
    });
    useEffect(() => {
        setRefValue(containerRef.current!);
    }, [containerRef.current]);
    useEffect(() => {
        if (refValue) {
            const spaceWidth = containerRef.current?.clientWidth;
            const windowWidth = window.innerWidth;
            const newContainerSize = {
                spaceWidth: spaceWidth ? spaceWidth : 0,
                gap: windowWidth >= 550 ? 16 : 8
            };
            setContainerSize(newContainerSize);
            console.log(newContainerSize);
        }
    }, [refValue, resolution, project]); 
    // [refresh when ref initialized, refresh when media query hit, refresh when next/prev project]
    
    useWindowWidth(width => {
        if(!containerRef.current) return;
        const spaceWidth = containerRef.current?.clientWidth;
        const newContainerSize = {
            spaceWidth: spaceWidth ? spaceWidth : 0,
            gap: width >= 550 ? 16 : 8
        };
        setContainerSize(newContainerSize);
    }, 50)
    // debounced refresh when window width change every 50 ms

    
    const result: JSX.Element[] = [];

    if(project.imageDetails.length === 1){
        const availableWidth = containerSize.spaceWidth;
        const availableHeight = availableWidth * project.imageDetails[0].height / project.imageDetails[0].width;

        const img1 = createImageSrc(project.slug, project.imageDetails[0].img);
        return <ImageButton onClick={() => onClick(img1)} className="rounded-xl h-full cursor-pointer group " percentage={100} availableHeight={availableHeight} key={project.slug} imgSrc={img1} alt={project.slug}/>
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
        
        const availableWidth = containerSize.spaceWidth - containerSize.gap;
        const availableHeight = availableWidth * maxHeight / totalWidth;
        
        if(type1 === 0 && type2 === 0) {
            const img1 = createImageSrc(project.slug, project.imageDetails[i].img);
            const img2 = createImageSrc(project.slug, project.imageDetails[i+1].img);
            result.push(
            <div key={i} className="w-full flex gap-2 xs:gap-4">
                <ImageButton onClick={() => onClick(img1)} className="rounded-xl h-full cursor-pointer group " percentage={percentage1} availableHeight={availableHeight} key={project.slug + i} imgSrc={img1} alt={project.slug}/>

                <ImageButton onClick={() => onClick(img2)} className="rounded-xl h-full cursor-pointer group " percentage={percentage2} availableHeight={availableHeight} key={project.slug + i+1} imgSrc={img2} alt={project.slug}/>

            </div>
            );
        }

        else {
            const img1 = createImageSrc(project.slug, project.imageDetails[i].img);
            const img2 = createImageSrc(project.slug, project.imageDetails[i+1].img);
            result.push(
            <div key={i} className="w-full flex gap-2 xs:gap-4">
                
                <ImageButton onClick={() => onClick(img1)} className="rounded-xl min-h-16 4xs:min-h-20 3xs:min-h-24 2xs:min-h-28 xs:min-h-36 sm:min-h-40 md:min-h-44 lg:min-h-56 cursor-pointer group " percentage={percentage1} availableHeight={availableHeight} key={project.slug + i} imgSrc={img1} alt={project.slug}/>

                <ImageButton onClick={() => onClick(img2)} className="rounded-xl min-h-24 4xs:min-h-28 3xs:min-h-36 2xs:min-h-48 xs:min-h-56 sm:min-h-64 md:min-h-72 lg:min-h-80 cursor-pointer group " percentage={percentage2} availableHeight={availableHeight} key={project.slug + i + 1} imgSrc={img2} alt={project.slug}/>
            </div>
            );
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

function getIsPreviewingFromURL() {
    if(typeof window === "undefined") return "";
    const url = new URL(window.location.href);
    const isPreviewing = url.searchParams.get("preview");
    return isPreviewing ? isPreviewing : "";
}
function setIsPreviewingToURL(isPreviewing: string) {
    if(typeof window === "undefined") return false;
    if(isPreviewing === "") {
        const url = new URL(window.location.href);
        url.searchParams.delete("preview");
        window.history.pushState({}, "", url.toString());
        return;
    }
    const url = new URL(window.location.href);
    url.searchParams.set("preview", isPreviewing);
    window.history.pushState({}, "", url.toString());
}

function getFocusedImageSrc(img: string) {
    // return img;
    const focusedSrc = img.replace("/optimized/", "/");
    const focusedSrc2 = focusedSrc.replace(".webp", ".png");
    return focusedSrc2;
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const PreviewImage = (isPreviewing: string, closePreview: () => void) => <button key={getRandomInt(100)} className={"fixed z-50 w-screen h-svh h-screen!  " + (!isPreviewing ? "hidden" : "")} onClick={closePreview}>
<div className="fixed -z-40 opacity-50 w-screen h-screen bg-black"></div>
<img src={isPreviewing} alt={isPreviewing} className="z-50 p-8 object-contain w-full h-full"/>
</button> 

export default function Details({project, tags, nextProjectSlug, prevProjectSlug}: {project: Project, tags: Tag[], nextProjectSlug: string, prevProjectSlug: string}) {
    
    const IsPreviewingFromUrl = getIsPreviewingFromURL();
    const [isPreviewing, setIsPreviewing] = useState(IsPreviewingFromUrl);
    function closePreview() {
        setIsPreviewing("");
        setIsPreviewingToURL("");
    }

    function onImageClicked(imgSrc: string) {
        const src = getFocusedImageSrc(imgSrc);
        setIsPreviewingToURL(src);
        setIsPreviewing(src);
    }

    const imageContainerRef = useRef<HTMLDivElement>(null);

    return <>
    {/* Click To see full screen image */}
    {PreviewImage(isPreviewing, closePreview)}
<div className="max-w-4xl w-full">

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

        <div ref={imageContainerRef} className="flex flex-col items-center justify-center mt-3">
            <h2 className="text-4xl font-bold"></h2>

            <div className="flex flex-col gap-2 xs:gap-4 w-full">
                {ProjectGalery(project, onImageClicked, imageContainerRef)}
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

</div>
    
    </>
    
}