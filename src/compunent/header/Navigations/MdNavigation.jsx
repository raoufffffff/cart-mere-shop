import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

const MdNavigation = ({ check }) => {
    const [fixed, setfixed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setfixed(true)
            } else {
                setfixed(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const Naviagation = [
        {
            name: "افضل العروض",
            type: "all",
        },
        {
            name: "الصنيفات",
            type: "all",
        },
        {
            name: "تواصــل واتســاب",
            type: "what's up",
        }].map(e => {
            if (e.type === "what's up") {
                return <a key={e.name}
                    target='_blank'
                    href="https://api.whatsapp.com/send/?phone=2130776966468&text&type=phone_number&app_absent=0"
                    className={` z-10 hover:underline mx-2 ${fixed || check ? "text-gray-900" : "text-white"}`}
                >{e.name}</a>
            }
            return <Link className={` z-10 hover:underline mx-2 ${fixed || check ? "text-gray-900" : "text-white"}`} to={`categore/?type=${e.type}`} key={e.name}>{e.name}</Link>
        })
    return (
        <nav className='hidden lg:flex flex-wrap my-rtl text-md ml-auto'>{Naviagation}</nav>
    )
}

export default MdNavigation