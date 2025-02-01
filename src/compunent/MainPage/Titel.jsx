import { motion } from "framer-motion"
const Titel = ({ titel }) => {

    return (
        <div className='flex justify-center items-center relative my-6  px-5'
        >
            <motion.span
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 0.5
                    }
                }}
                className=" flex-1 befor-after"></motion.span>
            <h1 className="mx-3 text-2xl">{titel}</h1>
            <motion.span
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 0.5
                    }
                }}
                className=" flex-1 befor-after"></motion.span>

        </div>
    )
}

export default Titel