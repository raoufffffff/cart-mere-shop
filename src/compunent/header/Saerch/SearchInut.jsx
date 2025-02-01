import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { IoIosSearch } from "react-icons/io"
import SearchRespunse from "./SearchRespunse"

const SearchInput = ({ hide }) => {
    const inputRef = useRef(null)
    const [search, setseach] = useState("")
    useEffect(() => {
        // Focus the input element when the component mounts
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={hide}
                className="fixed z-20 top-0 left-0 h-full w-full bg-black  ">

            </motion.div>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed z-50 bg-white flex flex-col centerx rounded-xl h-fit w-11/12 top-10 md:w-9/12 my-rtl px-3 py-2 
                ">
                <label className="flex p-2 flex-1 my-rtl items-center border-b border-b-gray-200  pb-4" htmlFor="search" id="shearch  ">
                    <IoIosSearch size={20} />

                    <input
                        ref={inputRef}
                        value={search}
                        onChange={(e) => setseach(e.currentTarget.value)}
                        className="mx-2 focus:outline-none flex-1" placeholder="ادخل الكلمة المفتاحية"
                    />
                </label>

                <SearchRespunse search={search} hide={hide} />
            </motion.nav>
        </>

    )
}

export default SearchInput