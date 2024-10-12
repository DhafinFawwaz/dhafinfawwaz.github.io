import Head from "next/head";

import ProjectsJson from "@/data/projects.json";
import tagsJsonImported from "@/data/tags.json";
import { Project, Tag } from "@/types/type";
import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";
import NavbarPage from "@/components/Navbar";

const tagsMap: {[key: string]: Tag} = tagsJsonImported;
const ProjectsList: Project[] = ProjectsJson;

export default function TagPage() {

    const [activeTag, setActiveTag] = useState<{[key: string]: boolean}>({});

    // handle clicking tag from project section in home
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const tag = searchParams.getAll('tag');
        const newActiveTag: {[key: string]: boolean} = {};
        for(let i = 0; i < tag.length; i++){
            newActiveTag[tag[i]] = true;
        }
        setActiveTag(newActiveTag);
    }, [])

    function refreshUrl(activeTag: {[key: string]: boolean}) {
        let newUrl = "/tag?";
        for(const tag in activeTag){
            if(activeTag[tag])
                newUrl += "tag=" + tag + "&";
        }
        newUrl = newUrl.slice(0, newUrl.length - 1);
        window.history.pushState({}, "", newUrl);
    }
        

    function toggleTag(tag: string) {
        const newActiveTag = {...activeTag, [tag]: !activeTag[tag]};
        setActiveTag(newActiveTag);
        refreshUrl(newActiveTag);
    }
    function enableTag(tag: string) {
        const newActiveTag = {...activeTag, [tag]: true};
        setActiveTag(newActiveTag);
        refreshUrl(newActiveTag);
    }
    function disableTag(tag: string) {
        const newActiveTag = {...activeTag, [tag]: false};
        setActiveTag(newActiveTag);
        refreshUrl(newActiveTag);
    }

    function disableAllTag() {
        const newActiveTag: {[key: string]: boolean} = {};
        for(const tag in activeTag){
            newActiveTag[tag] = false;
        }
        setActiveTag(newActiveTag);
        refreshUrl(newActiveTag);
    }

    function renderAllProjects() {
        return ProjectsList.map((item, index) => {
            return <ProjectCard activeTag={activeTag} onTagClicked={(tag) => toggleTag(tag.slug!)} key={index} project={item} tags={item.tags.map(tag => {
                return {
                        name: tagsMap[tag].name,
                        color: tagsMap[tag].color, 
                        icon: tagsMap[tag].icon, 
                        slug: tag
                    }
                }
            )}></ProjectCard>
        });
    }
    function renderTaggedProjects() {
        const result: JSX.Element[] = [];

        for(let i = 0; i < ProjectsList.length; i++){
            const item = ProjectsList[i];
            if(item.tags.some(tag => activeTag[tag]))
                result.push(<ProjectCard activeTag={activeTag} onTagClicked={(tag) => toggleTag(tag.slug!)} key={i} project={item} tags={item.tags.map(tag => {
                    return {
                            name: tagsMap[tag].name,
                            color: tagsMap[tag].color, 
                            icon: tagsMap[tag].icon, 
                            slug: tag
                        }
                    }
                )}></ProjectCard>);
        }
        return result;
    }


    return <>
    <Head>
      <title>Tag | Dhafin Fawwaz Ikramullah</title>
      <meta name="keywords" content="Dhafin Fawwaz"/>
      <meta name="author" content="Dhafin Fawwaz Ikramullah"></meta>
      <meta name="description" content="Portfolio which consist of projects about Mobile Development, Game Development, and Web Development"/>
    </Head>
    <NavbarPage></NavbarPage>
    <main className="w-full flex justify-center">
      <div className="max-w-4xl mb-4">
        <section id="tags">
            <h2>Tags</h2>
            <h3 className='text-zinc-400 text-sm font-medium'>Filter projects by tags</h3>
            <br/>
            <div className="gap-1 flex w-full flex-wrap">
                {Object.keys(tagsMap).map((tag, index) => {
                    if(!activeTag[tag])
                        return <button key={index} onClick={() => enableTag(tag)} className={`text-2xs xs:text-xs font-semibold bg-night-600 px-2 rounded-lg py-0.5 grow text-center z-40 hover:bg-indigo-600 active:bg-indigo-700 focus:bg-night-800 hover:cursor-pointer duration-75 shadow-rim-sm drop-shadow-sm focus:ring-4 ring-indigo-800`}>{tagsMap[tag].name}</button>
                    else
                        return <button key={index} onClick={() => disableTag(tag)} className={`text-2xs xs:text-xs font-semibold bg-indigo-600 px-2 rounded-lg py-0.5 grow text-center z-40 hover:bg-indigo-700 active:bg-indigo-800 hover:cursor-pointer duration-75 shadow-rim-sm drop-shadow-sm focus:ring-4 ring-indigo-800`}>{tagsMap[tag].name}</button>
                })}
                <div style={{flexGrow: 1000000}}></div>
            </div>


            <div className="mt-2 flex justify-end">
                <button onClick={() => disableAllTag()} className={`text-xs font-bold bg-night-600 px-3 rounded-lg py-1 text-center z-40 hover:bg-indigo-600 active:bg-indigo-700 hover:cursor-pointer duration-75 shadow-rim-sm drop-shadow-sm focus:ring-4 ring-indigo-800`}>Disable All</button>
            </div>

            <br />

            <div className="gap-4 grid grid-cols-1 2xs:grid-cols-2 md:grid-cols-3 place-items-center">
                {Object.keys(activeTag).every(tag => !activeTag[tag]) ? renderAllProjects(): renderTaggedProjects()}
            </div>
        </section>

      </div>
    </main>
    
    </>
}