import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const LandingPage = () => {
    const [left, setleft] = useState(false)
    const scrool = (d) => {
        if (d === "left") {
            document.querySelector('.ss').scrollBy({
                left: document.querySelector('.aa').clientWidth,
                behavior: 'smooth'
            })
            setleft(true)
        } else {
            document.querySelector('.ss').scrollBy({
                left: -document.querySelector('.aa').clientWidth,
                behavior: 'smooth'
            })
            setleft(false)

        }
    }
    return (
        <div className=' snap-x flex  w-full h-fit  overflow-x-auto ss'>
            <div className="min-w-full aa snap-center bg-img mr-0.5   md:h-screen" />
            <div className="min-w-full snap-center bg-img  tow md:h-screen">

            </div>
            {left ? <span
                onClick={() => {
                    scrool('right')
                }}
                className="absolute centery left-5 hidden sm:flex">
                <FaArrowCircleLeft size={30} className="text-neutral-500" />
            </span>
                :
                <span
                    onClick={() => {
                        scrool('left')
                    }}
                    className="absolute centery right-5 hidden sm:flex">
                    <FaArrowCircleRight size={30} className="text-neutral-500" />
                </span>}
        </div>


    )
}

export default LandingPage