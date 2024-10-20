import achievementJson from "@/data/achievement.json";
import { Achievement } from "@/types/type";

const achievementList: Achievement[] = achievementJson;

export default function AchievementPage() {
    
    return <section id="achievement">
        <h2>Achievement</h2>
        <h3 className='text-zinc-400 text-sm font-medium'>What i achieve throughout My Journey</h3>
        <br/>

        <div className="flex flex-col-reverse gap-2">
            {achievementList.map((item, index) => <div key={index} className="bg-night-900 achievement-bg rounded-xl shadow-rim-sm overflow-hidden drop-shadow-lg">

                    <label id={"achievement-label-"+index} htmlFor={"achievement-"+index} className="flex p-2 hover:bg-night-500 cursor-pointer rounded-xl active:bg-indigo-700">
                        <div className="w-12 flex justify-center items-center">
                            <img src={item.icon} alt={item.title} className=""/>
                        </div>
                        <div className="w-full">
                            <h4 className="text-md font-bold">{item.title}</h4>
                            <h5 className="text-sm font-normal text-zinc-400 text-wrap">[{item.date}] - {item.subtitle}</h5>
                        </div>
                    </label>    

                    {/* details */}
                    <input type="checkbox" id={"achievement-"+index} name={"Achievement"} value={index} className="hidden peer"/>
                    <div className="xs:grid-cols-6 px-4 gap-4 peer-checked:mb-4 peer-checked:mt-2 duration-150 max-h-0 grid peer-checked:max-h-[60rem] ease-out-expo">
                        <div className="bg-night-800 rounded-xl min-h-40 xs:col-span-3 md:col-span-2">
                            <img src={`img/achievement/optimized/${item.img}`} alt={item.title}  className="object-cover w-full xs:h-full rounded-lg"/>
                        </div>
                        <p className="text-justify text-sm xs:col-span-3 md:col-span-4">{item.description}</p>
                    </div>
                </div>
                

                
            )}
        </div>


    </section>

}