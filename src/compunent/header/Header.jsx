import { Link, useParams } from "react-router-dom"
import MdNavigation from "./Navigations/MdNavigation"
import Personal from "./personal/Personal"
import logo from '../../assets/logo.png'
import MinNavigation from "./Navigations/MinNavigation"
import { useState } from "react"
import SearchInput from "./Saerch/SearchInut"
const Header = () => {
    const [search, setsearch] = useState(false)
    const { id } = useParams()
    const check = () => {

        return true


    }

    const hideSearch = () => {
        setsearch(false)
    }
    const ShowSearch = () => {
        setsearch(true)
    }
    return (
        <header className={`w-full flex flex-wrap fixed z-10 py-5 `}>
            {!check() && <>

                <div className="absolute top-0 left-0 w-full h-full a z-10">

                </div>
            </>}
            <div className={`w-full flex items-center justify-between pt-1 border-t ${id && "border-t-0"}  border-t-gray-200 lg:border-t-0 px-3 md:px-5 bg-white border-b-gray-200 pb-2 fixed left-0 top-0 border-b border-t-0 pt-2  ${check() && "bg-white border-b-gray-200 pb-2 fixed left-0 top-0 border-b border-t-0 pt-2"}`}>
                <Personal check={check} show={ShowSearch} />
                <MdNavigation check={check} />
                <div className="flex items-center z-10">
                    <Link to={'/'} className="mr-3 lg:mr-0 flex justify-center items-center flex-col">
                        <img src={logo} className="h-10 w-10" />
                        <h1
                            className="text-[10px]"
                        >Alger Tec</h1>
                    </Link>
                    <MinNavigation check={check} />
                </div>
            </div>
            {search && <SearchInput hide={hideSearch} />}
        </header>
    )
}

export default Header