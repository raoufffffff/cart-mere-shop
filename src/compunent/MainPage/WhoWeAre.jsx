import { BsCashCoin } from "react-icons/bs"
import { FaCarSide } from "react-icons/fa"
import { RiShieldCheckFill } from "react-icons/ri"

const WhoWeAre = () => {
    const Method = [
        {
            titel: "شحن آمن و سريع",
            des: "شحن لجميع ولايات الجزائر",
            icon: <FaCarSide size={25} />
        },
        {
            titel: "طرق الدفع",
            des: "كاش او من الخدمة البريد",
            icon: <BsCashCoin size={25} />
        },
        {
            titel: "الجودة شعارنا",
            des: "اسعار منافسة وجودة عالية",
            icon: <RiShieldCheckFill size={25} />
        },
    ].map((e, i) => <div
        className="mx-0.5 flex flex-col justify-center items-center shadow-md relative who-p  pt-14 pb-7 mb-5"
        key={i}>
        <span
            className="absolute who border border-gray-200  flex justify-center items-center z-0 rounded-full"
        >

            {e.icon}</span>
        <h1
            className="text-black font-bold mb-1">{e.titel}</h1>
        <p
            className="text-neutral-600 text-sm">{e.des}</p>
    </div>)
    return (
        <div className='flex flex-wrap justify-end px-1 py-4 my-6'>
            {Method}
        </div>
    )
}

export default WhoWeAre