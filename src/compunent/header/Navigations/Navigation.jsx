import { AiOutlineCheck } from "react-icons/ai"
import { FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Navigation = ({ hide }) => {
    const Naviagation = [
        {
            name: "افضل العروض",
            type: "all",
            icon: <AiOutlineCheck className="text-cyan-800" size={25} />
        },
        {
            name: "الصنيفات",
            type: "all",
            icon: <AiOutlineCheck className="text-cyan-800" size={25} />
        },
        {
            name: "تواصــل واتســاب",
            type: "what's up",
            icon: <FaWhatsapp className="text-emerald-700" size={25} />
        }].map(e => {
            if (e.type === "what's up") {
                return <a key={e.name}
                    target="_blank"
                    href="https://api.whatsapp.com/send/?phone=2130776966468&text&type=phone_number&app_absent=0"
                    className="text-neutral-800 pr-5 border-b border-b-gray-200 py-3 hover:pr-8 hover:font-bold transition-all my-1 flex items-center"
                    onClick={hide}
                > <span
                    className="ml-2"
                >{e.icon}</span>
                    {e.name}</a>
            }
            return <Link
                onClick={hide}
                className="text-neutral-800 pr-5 border-b border-b-gray-200 py-3 hover:pr-8 hover:font-bold transition-all my-1 flex items-center"
                to={`categore/?type=${e.type}`}
                key={e.name}>
                <span
                    className="ml-2"
                >{e.icon}</span>
                {e.name}
            </Link>
        })
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={hide}
                className="fixed top-0 left-0 h-full w-full bg-slate-500   ">

            </motion.div>

            <motion.nav
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ x: 1000 }}
                className="fixed z-50 bg-white flex flex-col right-0 top-0 h-full w-8/12 md:w-5/12 my-rtl pt-6 overflow-y-auto
                ">
                <h1
                    className="text-xl text-cyan-900 font-bold pr-5 border-b border-b-gray-200 py-3 "
                >القائمة الرئيسية
                </h1>
                {Naviagation}
            </motion.nav>
        </>
    )
}

export default Navigation