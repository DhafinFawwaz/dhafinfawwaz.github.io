import ContactJson from '@/data/contact.json';
import { Contact } from '@/types/type';

const ContactList: {[key: string]: Contact} = ContactJson;

export default function ContactPage() {
    return <>
<section id="contact">
    <h2>Contact</h2>
    <h3 className='text-zinc-400 text-sm font-medium'>Opportunity for an internship would be nice :)</h3>
    <br/>

    <ul className='grid grid-cols-2 gap-2 place-items-center 2xs:flex 2xs:flex-row flex-wrap justify-center'>
        {Object.keys(ContactList).map((key, index) => {
            return <li key={index} className='bg-night-800 flex flex-col rounded-xl shadow-rim-sm max-w-44 w-full h-full ease-out-back duration-150 hover:scale-105 active:scale-107 active:bg-indigo-700 cursor-pointer relative drop-shadow-lg'>
                    <a className='w-full h-full absolute' aria-label={ContactList[key].title} target="_blank" href={ContactList[key].href}></a>
                    <div className='flex flex-col justify-center 2xs:pt-5 pt-4 2xs:pb-4 pb-3'>
                        <img className='2xs:h-8 h-5' src={ContactList[key].img} alt=""/>
                        <h3 className='2xs:text-lg text-sm h-4 2xs:h-6'>{ContactList[key].title}</h3>
                        <p style={{overflowWrap: "anywhere"}} className='text-center px-2 2xs:text-sm text-[0.7rem] text-zinc-400 cursor-auto pointer z-40'>{ContactList[key].value}</p>
                    </div>
                </li>
        })}
    </ul>
</section>



<section id="copyright" className='text-end text-sm text-zinc-400 pb-8'>
    <div>Copyright © 2022</div>
    <div>Dhafin Fawwaz Ikramullah</div>
</section>
</>
}