import { Link } from "react-router-dom"

const Place = ({ one, tow, bg }) => {
    return (
        <div className={`w-full flex justify-center my-rtl px-3 py-5 items-center my-10 ${bg && "text-white bg-cyan-800"}`}>
            <Link to={'/'} className=" text-md">الرئسية</Link>

            {tow ?
                <>
                    <span className="mx-2 text-lg font-bold">{">"}</span>
                    <Link to={`/categore/?type=${one}`} className=" text-sm">  {one}</Link>
                    <span className="mx-2 text-lg font-bold">{">"}</span>
                    <span className="text-xs"> {tow} </span>
                </>
                : <>
                    <span className="mx-2 text-lg font-bold">{">"}</span>
                    <span className=" text-sm">  {one}</span>
                </>}
        </div>
    )
}

export default Place