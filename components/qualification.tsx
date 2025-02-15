import qualificationJson from '@/data/qualification.json';
import { Qualification } from '@/types/type';

const QualificationMap: {[key: string]: Qualification[]}  = qualificationJson;

function generate(qualificationList: Qualification[]) {
    const res = [];
    for(let i = qualificationList.length - 1; i >= 0; i--) {
        const item = qualificationList[i];
        const index = qualificationList.length - i - 1;
        res.push(
            <div key={index} className='flex'>
                <div>
                    {index === 0 ? <div className="qualification-last mt-2"></div> : <></>}
                    <div className='w-3 h-3 absolute bg-indigo-600 rotate-45 mt-2'></div>
                    {index === qualificationList.length - 1 ?  
                    <div className='w-3'></div>
                    : 
                    <div className='h-full w-3 flex justify-center mt-2'>
                        <div className='w-[2px] h-full bg-indigo-600'></div>
                    </div>
                    }
                </div>
                
                <a href={item.src} target={item.target} className='ml-3 hover:bg-night-900 p-2 mr-4 rounded-lg w-full active:bg-indigo-700'>
                    <h4 className="font-bold text-sm xs:text-md leading-4">{item.title}</h4>
                    <h5 className='font-medium text-zinc-400 text-xs xs:text-sm leading-3 xs:leading-5 mt-0 xs:mt-0.5'>{item.subtitle}</h5>
                    <p className='font-medium flex text-[0.66rem] text-zinc-400 gap-1'>
                        <img className='h-3 -translate-y-[0.05rem]' src="https://api.iconify.design/lets-icons/date-range-fill.svg?color=%2364748b" alt="date"/>
                        {item.date}
                    </p>
                </a>
            </div>

        );
    }
    return res;
}
const education = QualificationMap["education"];
const work = QualificationMap["work"];
const organization = QualificationMap["organization"];

export default function QualificationPage() {

    return <section id="qualification">
    <h2>Qualification</h2>
    <h3 className='text-zinc-400 text-sm font-medium'>My Journey</h3>
    <br/>

    
    <div className="grid grid-cols-3 2xs:gap-4 gap-2 qualification-buttons-group">
        <label id="education-label" htmlFor="education-radio" className=" qualification-button shadow-rim-sm">
            <img src="https://api.iconify.design/zondicons/education.svg?color=%23ffffff" alt="education"/>
            <div className='text-sm xs:text-lg'>Education</div>
        </label>
        <label id="work-label" htmlFor="work-radio" className="qualification-button shadow-rim-sm">
            <img src="https://api.iconify.design/material-symbols/work.svg?color=%23ffffff" alt="work"/> 
            <div className='text-xs 2xs:text-sm xs:text-lg'>Work</div>
        </label>
        <label id="organization-label" htmlFor="organization-radio" className="qualification-button shadow-rim-sm">
            <img src="https://api.iconify.design/mdi/people.svg?color=%23ffffff" alt="organization"/>
            <div className='text-xs 2xs:text-sm xs:text-lg'>Organization</div>
        </label>
    </div>

    
    <div className="qualification-grid grid sm:grid-cols-3 mt-2">
        <input type="radio" id="education-radio" name="qualification-radio" className="hidden peer/education"/>
        <div className="peer-checked/education:block hidden mt-1 sm:block">
            {generate(education)}
        </div>


        <input type="radio" id="work-radio" name="qualification-radio" className="hidden peer/work" defaultChecked/>
        <div className="peer-checked/work:block hidden mt-1 sm:block">
            {generate(work)}
        </div>


        <input type="radio" id="organization-radio" name="qualification-radio" className="hidden peer/organization" />
        <div className="peer-checked/organization:block hidden mt-1 sm:block">
            {generate(organization)}
        </div>
    </div>
    
    
</section>
};
