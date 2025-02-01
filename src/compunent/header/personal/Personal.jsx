import { useEffect, useState } from "react"
import { FiShoppingCart } from "react-icons/fi"
import { IoIosSearch } from "react-icons/io"
import { IoPersonOutline } from "react-icons/io5"
import { useSnapshot } from "valtio"
import state from "../../../store/store"
import { Link } from "react-router-dom"

const Personal = ({ show, check }) => {
    const [fixed, setfixed] = useState(false)
    let snap = useSnapshot(state)
    const total = () => {
        let total = 0
        snap.items.map(e => {
            total += (e.item.price * (1 - (e.item.doscount / 100))) * e.q
        })
        return total
    }
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
    return (
        <div className="flex z-10">
            {total() > 0 && <span className="text-red-900 font-bold">
                {total()} DA
            </span>}

            <Link
                to={'/buy/?marek=hello'}
                className="cursor-pointer  mx-1 hover:scale-110 transition-all relative" >
                <FiShoppingCart size={25}
                    className={`${fixed || check ? "text-cyan-800" : "text-white"}`}
                />
                <span className="bg-red-900 px-2 py-1 opacity-90 absolute text-white rounded-full text-[10px] -right-2 -top-3 z-10">
                    {snap.items.length}
                </span>
            </Link>

            <span className="cursor-pointer relative mx-1 hover:scale-110 transition-all inline-flex"
                onClick={show}
            >
                <IoIosSearch size={25}
                    className={`${fixed || check ? "text-cyan-800" : "text-white"}`}
                />
            </span>

        </div>
    )
}

export default Personal