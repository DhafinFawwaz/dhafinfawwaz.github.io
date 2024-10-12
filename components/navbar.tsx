import navbarJson from '@/data/navbar.json';
import Link from 'next/link';
import { NavbarItem } from '@/types/type';

const navbarMap: {[key: string]: NavbarItem} = navbarJson;

export default function NavbarPage() {
    return <nav className="bg-night-900 fixed flex justify-center z-50 drop-shadow-sm w-full">
    <div className="hidden sm:flex py-2 w-full justify-between max-w-4xl px-6">
        <div className="flex gap-2">
            <Link href="/#profile" className="nav-button">
                <img src="/favicon.ico" className="h-4 mt-1 scale-125" alt=""/>
                Dhafin
            </Link>
        </div>
        <div className="flex gap-2">
            {Object.keys(navbarMap).map((key, index) => {
                return <a key={index} href={`/#${key}`} className="nav-button">
                <img src={navbarMap[key].img} alt={navbarMap[key].title} className='mt-1 max-h-4'/>{navbarMap[key].title}
                </a>
            })}
            <Link href={"/tag"} className="nav-button">
                <img src={"https://api.iconify.design/mdi/tag.svg?color=%23ffffff"} alt={"tag"} className='mt-1'/>Tag
            </Link>
        </div>
    </div>

    <input type="checkbox" id="nav-toggle" className="hidden peer" />
    <div className="sm:hidden flex justify-between p-2 w-full">
        <Link href="/#profile" className="nav-button">
            <img src="/favicon.ico" className="h-4 mt-1" alt=""/>
            Dhafin
        </Link>
        <label htmlFor="nav-toggle" className="cursor-pointer flex justify-center w-9 p-2 hover:bg-night-800 hover:shadow-rim-sm active:bg-indigo-600 rounded-lg">
            <img src="https://api.iconify.design/tabler/menu-2.svg?color=%23ffffff" alt="menu-icon"/>
        </label>
    </div>

    
    <div className="invisible sm:invisible fixed right-0 mt-14 mr-2 flex peer-checked:visible scale-50 peer-checked:scale-100 duration-150 ease-out-expo origin-top-right opacity-0 peer-checked:opacity-100 shadow-rim-sm rounded-xl bg-night-900 drop-shadow-md">
        <div className="flex flex-col p-2">
            <a href={`/`} className="nav-button">
                <img src={"/favicon.ico"} alt="Dhafin Favicon" className='mt-1 max-h-4'/>Dhafin
            </a>
            {Object.keys(navbarMap).map((key, index) => {
                return <a key={index} href={`/#${key}`} className="nav-button">
                <img src={navbarMap[key].img} alt={navbarMap[key].title} className='mt-1 max-h-4'/>{navbarMap[key].title}
                </a>
            })}
            <Link href={"/tag"} className="nav-button">
                <img src={"https://api.iconify.design/mdi/tag.svg?color=%23ffffff"} alt={"tag"} className='mt-1'/>Tag
            </Link>
        </div>
    </div>
</nav>
}