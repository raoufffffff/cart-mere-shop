import { useEffect } from "react"
import state from "../store/store"
import { useSnapshot } from "valtio"
import Place from "../compunent/places/Place"
import { IoClose } from "react-icons/io5"
import { MdDriveFileRenameOutline } from "react-icons/md"
import { FaPhone } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi"
import { Link } from "react-router-dom"


const Buy = () => {
    const snap = useSnapshot(state)
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    const removeItem = (e) => {
        state.items = state.items.filter(i => {
            return i.item.id == e.id ? null : i
        })
    }
    const total = () => {
        let total = 0
        snap.items.map(e => {
            total += (e.item.price * (1 - (e.item.doscount / 100))) * e.q
        })
        return total
    }

    const PlusQ = (e) => {
        console.log(e);
        state.items.map(i => {
            return i.item.id == e.item.id ? i.q += 1 : i
        })
    }

    const MinusQ = (e) => {
        if (e.q == 1) {
            return
        }
        state.items.map(i => {
            return i.item.id == e.item.id ? i.q -= 1 : i
        })
    }
    const itemTotalPrice = (e) => {
        let price = 0
        price = (e.item.price * (1 - (e.item.doscount / 100))) * e.q
        return price
    }
    let items = snap.items.map((e, index) => {
        const newPrice = (e.item.price * (1 - (e.item.doscount / 100)))
        return <div key={index} className='flex p-4 border-[0.5px] border-[#ededed] my-rtl  rounded-xl items-start relative flex-wrap w-11/12 mx-auto pb-1 mb-2'>
            <img src={e.item.imgs[0]} className=' py-2 px-3 border-[0.5px] border-[#ededed] h-[90px] rounded-xl ' />
            <div className='flex flex-col px-4 mt-3 w-7/12'>
                <span className="font-semibold text-xs mb-1">{e.item.titel}</span>
                <span className='text-gray-400 '>DA {newPrice}</span>
            </div>
            <span
                onClick={() => {
                    removeItem(e.item)
                }}
                className='absolute p-1 bg-rose-700 top-3 left-2 rounded-full cursor-pointer'>
                <IoClose className='text-white' />
            </span>
            <div className='w-full border-t border-[#dedede] mt-2 flex justify-between px-1 items-center'>
                <div className='border-[0.5px] border-[#dedede] flex p-2  mt-1 rounded-xl '>
                    <span
                        className='cursor-pointer px-1'
                        onClick={() => {
                            PlusQ(e)
                        }}
                    >
                        +
                    </span>
                    <span className='mx-2 border-x-[0.5px] border-[#dedede] px-3'>{e.q}</span>
                    <span
                        className='cursor-pointer px-1'
                        onClick={() => {
                            MinusQ(e)
                        }}
                    >
                        -
                    </span>
                </div>
                <span className="text-sm font-[500]">
                    المجموع :
                    <span className='mx-2 text-gray-500'>{itemTotalPrice(e)} DA</span>
                </span>
            </div>
        </div>
    })
    return (
        <div className="mt-[50px] w-full">
            <Place bg={false} one={"سلة المشتريات"} />
            <div className='w-full py-1 '>
                {items}
            </div>
            <div className='border-t border-t-[dedede] py-2 mt-2 w-full flex flex-col items-center'>
                <strong className='font-[900] text-lg mt-3 text-black'>
                    ملخص الطلب
                </strong>
                <div className='flex justify-between w-full my-rtl px-3 mb-2 '>
                    <span className='text-gray-600'>مجموع المنتجات</span>
                    <span className=" ml-1.5 text-gray-700">{total()} DA</span>
                </div>
                <div className='flex justify-between w-full my-rtl px-3 mb-2 '>
                    <span className='text-gray-600'>الإجمالي</span>
                    <span className=" ml-1.5 text-gray-700">{total()} DA</span>
                </div>
            </div>
            <form className=" my-rtl w-10/12 mx-auto border-t border-t-[#dedede] mt-5 flex flex-col"
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <h1 className="text-center font-[700] mt-3 mb-5">املاء الاستمارة</h1>
                <label className="input input-bordered flex items-center gap-2 my-2 border-[0.5px] p-2 rounded-xl border-[#ddd]">
                    <MdDriveFileRenameOutline className="text-cyan-700 ml-2" size={20} />

                    <input type="text" className="grow focus:outline-none" placeholder="الاسم" />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-2 border-[0.5px] p-2 rounded-xl border-[#ddd]">
                    <FaPhone className="text-cyan-700 ml-2" size={20} />
                    <input type="text" className="grow focus:outline-none" placeholder="رقم الهاتف" />
                </label>
                <label className=" flex items-center gap-2 my-2 border-[0.5px] p-2 rounded-xl border-[#ddd]">
                    <GiPositionMarker className="text-cyan-700 ml-2" size={20} />
                    <input type="text" className="grow focus:outline-none" placeholder="العنوان" />
                </label>
                <Link
                    onClick={() => {
                        state.price = 0
                        state.buyNow = {}
                        state.q = 0
                        state.items = []
                    }}
                    to='/' className="w--full bg-cyan-900 text-center text-white py-3 rounded-3xl mt-4">
                    تاكيد الطلب
                </Link>
            </form>
        </div>
    )
}

export default Buy