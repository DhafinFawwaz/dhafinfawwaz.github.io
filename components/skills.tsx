
import skillsJsonImported from "@/data/skills.json";
import tagsJsonImported from "@/data/tags.json";
import Link from "next/link";
import { Tag } from "@/types/type";

const tagsMap: {[key: string]: Tag} = tagsJsonImported;
const skillsMap: {[key: string]: string[]} = skillsJsonImported;


export default function SkillPage() {

    return <>
<section id="skill" className="pt-4">
    <div className="grid xs:grid-cols-3 grid-cols-2 gap-4">
        {(() => {
        const arr = [];
        let key = 0;
        for (const skill in skillsMap) {
            const currentSkill: Tag = tagsMap[skill];
            const tools = skillsMap[skill].map((tool: string, idx: number) => {   
                const currentTool: Tag = tagsMap[tool];
                return <a key={idx} href={"/tag?tag="+tool} aria-label={"find "+currentSkill.name} className="text-2xs xs:text-xs font-semibold #ff5151 bg-night-600 rounded-lg pr-2 py-0.5 text-center z-40 hover:bg-indigo-600 active:bg-indigo-700 hover:cursor-pointer duration-75 shadow-rim-sm drop-shadow-sm focus:ring-4 ring-indigo-800 flex items-center gap-1"><img className="w-4 max-h-4 ml-1" src={currentTool.icon} alt={currentTool.name+" Icon"}/><span className="translate-y-[1px]">{currentTool.name}</span></a>;
            });     
            tools.push(<div key={-1} style={{flexGrow: 1000000}}></div>)
            arr.push(
            <div key={key++} className="bg-night-900 drop-shadow-lg rounded-xl shadow-rim-sm ring-night-900 relative">
                <Link href={"/tag?tag="+skill} aria-label={"find "+currentSkill.name} className='w-full h-full hover:bg-night-800 active:bg-night-600 active:ring-4 ring-night-900 absolute rounded-xl p-4'>
                    <h3 className="flex gap-1 font-bold text-sm 4xs:text-[1.1rem] leading-7">
                        <img className="-translate-y-0.5 z-10 4xs:h-auto h-3" src={currentSkill.icon} alt={currentSkill.name + " Icon"}/>
                        {currentSkill.name}
                    </h3>
                    <div className="font-medium text-xs 4xs:text-sm sm:text-md mb-1 text-zinc-400 z-20 leading-5 -translate-y-1">Tools/Languages</div>
                </Link>
                <div className="p-4">
                    <div className="flex gap-1 flex-wrap sm:mt-12 4xs:mt-12 mt-10">
                        {tools}
                    </div>
                </div>
            </div>
            );
        }

        return arr;

        })()}
    </div>
</section>    
</>
}