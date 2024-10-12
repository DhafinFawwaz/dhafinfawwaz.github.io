
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
                return <a key={idx} href={"/tag?tag="+tool} className="w-5 max-h-5 self-center appearance-none hover:scale-125 active:scale-150 ease-out-back duration-150 z-20"><img src={currentTool.icon} alt={currentTool.name}/></a>;
            });
            arr.push(
            <div key={key++} className="bg-night-900 drop-shadow-lg rounded-xl shadow-rim-sm ring-night-900 relative">
                <Link href={"/tag?tag="+skill} className='w-full h-full hover:bg-night-800 active:bg-night-600 active:ring-4 ring-night-900 absolute rounded-xl p-4'>
                    <h3 className="flex gap-1 font-bold text-sm 4xs:text-[1.1rem] leading-7">
                        <img className="-translate-y-0.5 z-10 4xs:h-auto h-3" src={currentSkill.icon} alt={currentSkill.name}/>
                        {currentSkill.name}
                    </h3>
                    <div className="font-medium text-xs 4xs:text-sm sm:text-md mb-1 text-zinc-400 z-20 leading-5 -translate-y-1">Tools/Languages</div>
                </Link>
                <div className="p-4">
                    <div className="flex gap-2 flex-wrap sm:mt-12 4xs:mt-12 mt-10">
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