import { IoIosSearch } from "react-icons/io"
import { IoPersonOutline } from "react-icons/io5"

const PersonalTop = ({ show }) => {
    return (
        <div className="flex lg:hidden ml-auto pb-1 px-3 md:px-5 z-10">
            <div className="flex">
                <span className="cursor-pointer relative p-3 rounded-full  flex justify-center items-center mx-1 bg-ne " >
                    <IoPersonOutline size={20} className="text-neutral-700" />

                </span>
                <span className="cursor-pointer relative p-3  rounded-full  flex justify-center items-center mx-1 bg-ne "
                    onClick={show}
                >
                    <IoIosSearch size={20} className="text-neutral-700" />
                </span>

            </div>
        </div>
    )
}

export default PersonalTop