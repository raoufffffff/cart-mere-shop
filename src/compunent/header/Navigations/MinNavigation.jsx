import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { HiMiniBars3 } from "react-icons/hi2"
import Navigation from "./Navigation"

const MinNavigation = () => {
    const [show, setshow] = useState(false)
    const hide = () => {
        setshow(false)
    }

    return (
        <div className="flex lg:hidden">
            <span
                onClick={() => {
                    setshow(true)
                }}
                className="cursor-pointer">
                <HiMiniBars3 size={30} className={`text-cyan-800`} />
            </span>
            <AnimatePresence>
                {show && <Navigation hide={hide} />}
            </AnimatePresence>
        </div>
    )
}

export default MinNavigation