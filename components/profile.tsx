import ContactJson from '@/data/contact.json';
import { Contact } from '@/types/type';

const ContactList: {[key: string]: Contact} = ContactJson;

export default function ProfilePage() {
    return <>
<section id="profile" className="pt-24">
    <div className="grid xs:grid-cols-12 grid-cols-1 xs:gap-4">
        
        <div className='w-full h-full flex flex-col xs:col-span-4 overflow-hidden'>
            <div className='xs:h-full max-h-72 w-full'>
                <img className="rounded-xl overflow-hidden object-cover h-full" src="/img/profile/Dhafin Fawwaz Ikramullah.webp" alt="Dhafin Fawwaz Ikramullah"/>
            </div>
            <div className="flex gap-2 h-6 overflow-visible mt-2 justify-center">
                {Object.keys(ContactList).map((key, index) => {
                    if(ContactList[key].href === "")
                        return <div className="h-full xs:w-full self-center appearance-none ease-out-back z-20" key={index}>
                                <img className='w-full h-full z-40' src={ContactList[key].img} alt={ContactList[key].title}/>
                            </div>
                    else
                        return <a className="h-full overflow-visible xs:w-full self-center appearance-none hover:scale-110 active:scale-125 ease-out-back duration-150 z-20" key={index} target="_blank" href={ContactList[key].href}>
                                <img className='w-full h-full z-40' src={ContactList[key].img} alt={ContactList[key].title}/>
                            </a>
                })}
            </div>
        
        </div>


        <div className="col-span-8 xs:mt-0 mt-4">
            <h1 className="
            md:text-[4.3rem] md:leading-[3.5rem]
            sm:text-[3.5rem] sm:leading-[3.2rem]
            xs:text-[2.9rem] xs:leading-[2.7rem]
            2xs:text-[3.3rem] 2xs:leading-[3.2rem]
            3xs:text-[2.75rem]
            4xs:text-[2.5rem]
            text-[2.2rem] leading-10 
            font-bold  text-slate-50">Dhafin Fawwaz Ikramullah</h1>
            <div className="pb-3 pt-0.5">
                <h2 className="text-md 4xs:text-xl leading-5 font-semibold text-zinc-300 text-left">Software Engineer | Programmer</h2>
                <h3 className="text-sm leading-4 font-medium text-zinc-300 text-left">Informatics from Bandung Institute of Technology</h3>
            </div>
            <p className="text-zinc-300 text-sm text-justify">1st Winner Gemastik XVII, Biggest Tech Competition against 206 Universities | Most Outstanding Informatics student 2025 at Bandung Institute of Technology | Programming Lab ITB Assistant | Ex Computer Vision & Web Game Dev Intern @ RollingGlory | Software Engineer | Indie Game Developer for fun | particle vfx/shader enthusiast | published library with +500 stars on GitHub | published a game with +5000 installs.</p>
            
            <div className="grid grid-cols-2 2xs:flex gap-4 mt-4">
                <a target="_blank" className="flex justify-center items-center bg-indigo-600 p-4 rounded-lg m-0 text-center cursor-pointer text-slate-50 border-none font-bold text-xs gap-2 px-2.5 py-3 ease-out-back duration-150 shadow-rim-md ring-indigo-900
                hover:scale-105
                hover:bg-indigo-700
                focus:ring-4 
                active:ring-4 
                active:ease-out-expo
                " href="/pdf/Dhafin Fawwaz Ikramullah - CV.pdf">
                    <img className="-translate-y-[0.075rem]" src="https://api.iconify.design/ph/read-cv-logo-fill.svg?color=%23ffffff" alt="cv-icon"/>
                    <div className="3xs:text-sm">Download CV</div>
                </a>
                <a href="#project" className="flex justify-center items-center bg-night-500 p-4 rounded-lg m-0 text-center cursor-pointer text-slate-50 border-none font-bold text-xs gap-2 px-2.5 py-3 ease-out-back duration-150 shadow-rim-sm ring-night-900
                hover:scale-105
                hover:bg-night-700
                focus:ring-4 
                active:ring-4 
                active:ease-out-expo">
                    <img className="-translate-y-0.5" src="https://api.iconify.design/uis/window-grid.svg?color=%23ffffff" alt="project-icon"/>
                    <div className="3xs:text-sm">View Projects</div>
                </a>

                

            </div>
        </div>
    </div>
</section>
</>
}
