import { useState } from "react"

const ItemDes = ({ item }) => {
    const [show, setshow] = useState(false)
    return (
        <div className="w-[95%] my-rtl mx-auto px-4 border-[0.5px] border-[#dedede] pt-3 pb-3 rounded-lg">
            <h1 className={`font-bold text-md ${item.des ? "mb-5" : "mb-0"}`}>
                {item.titel}
            </h1>
            {
                item.des && <p className="text-[16px] border-b border-b-[#ededed] text-[#333] pb-3">
                    {item.des}
                    <br />
                    {(item.type == "tabelet" || item.type == "phone")
                        &&
                        <strong

                            onClick={() => {
                                if (!show)
                                    window.scrollBy({
                                        top: 200,
                                        behavior: "smooth"
                                    })
                                setshow(p => !p)
                            }} className="flex mt-3 cursor-pointer">قراءة المزيد</strong>}
                </p>
            }


            {
                show && item.screen && <div className="py-3"
                    initial={{ x: 100, opacity: 0.5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col">
                        <li className="text-blue-700 font-bold">
                            الشاشة
                        </li>
                        <span className="pr-5">{item.screen}</span>
                    </div>
                    <div className="flex flex-col">
                        <li className="text-blue-700 font-bold">
                            الذاكرة
                        </li>
                        <span className="pr-5">{item.storage}</span>
                    </div>
                    <div className="flex flex-col">
                        <li className="text-blue-700 font-bold">
                            الرام
                        </li>
                        <span className="pr-5">{item.rom}</span>
                    </div>
                    <div className="flex flex-col">
                        <li className="text-blue-700 font-bold">
                            الكاميرا
                        </li>
                        <span className="pr-5">{item.camera}</span>
                    </div>
                    <div className="flex flex-col">
                        <li className="text-blue-700 font-bold">
                            المعالج
                        </li>
                        <span className="pr-5">{item.pro}</span>
                    </div>
                    <div className="flex flex-col">
                        <li className="text-blue-700 font-bold">
                            البطارية
                        </li>
                        <span className="pr-5">{item.battery}</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemDes