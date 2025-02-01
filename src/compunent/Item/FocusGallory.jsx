import { motion } from "framer-motion"

const FocusGallory = ({ hide, imgs }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={hide}
                className="fixed top-0 z-40 left-0 h-full w-full bg-black">

            </motion.div>

            <motion.div
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ x: 1000 }}
                onClick={hide}
                className="fixed flex flex-flex-1  overflow-x-auto ss snap-x h-full w-full  items-center z-50 top-0 "
            >
                {imgs.map(e => <div id={e}
                    key={e} className='min-w-full flex justify-center  snap-start h-full items-center'>
                    <img src={e} className=' max-h-[70%] ' />
                </div>)}

            </motion.div>
        </>
    )
}

export default FocusGallory