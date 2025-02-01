import { motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../../store/store'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { MdOutlineNotificationsActive } from 'react-icons/md'

const BuySide = ({ hide }) => {
    const snap = useSnapshot(state)

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
        return <div key={index} className='flex p-2 border-[0.5px] border-[#ededed] my-rtl  rounded-xl items-start relative flex-wrap w-11/12 mx-auto'>
            <img src={e.item.imgs[0]} className=' py-2 px-3 border-[0.5px] border-[#ededed] h-[90px] rounded-xl ' />
            <div className='flex flex-col px-4 mt-3 w-7/12'>
                <span className="font-semibold text-xs mb-1">{e.item.titel}</span>
                <span className='text-gray-400 text-sm'>DA {newPrice}</span>
            </div>
            <span
                onClick={() => {
                    removeItem(e.item)
                }}
                className='absolute p-1 bg-rose-700 top-3 left-2 rounded-full cursor-pointer'>
                <IoClose className='text-white' />
            </span>
            <div className='w-full border-t border-[#dedede] mt-2 flex justify-between px-1 items-center'>
                <div className='border-[0.5px] border-[#dedede] flex p-1 text-sm  mt-1 rounded-xl '>
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
                <span className='text-gray-600 text-sm mt-1'>
                    المجموع:
                    <span className='mx-1'>{itemTotalPrice(e)}</span>
                </span>
            </div>
        </div>
    })
    return (
        <div className='fixed top-0 left-0 w-full h-full z-50 flex justify-center  pt-16'>
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -200, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-11/12 fixed py-2 bg-white z-50 flex flex-col rounded-2xl"
            >
                <strong className='text-xl mx-auto'>سلة المشترسيات</strong>
                <div className='max-h-[300px] md:max-h-[600px] overflow-y-auto ss'>
                    {items}
                </div>
                <div className='border-t border-t-[dedede] py-2 mt-2 w-full flex flex-col items-center'>
                    <strong className='font-[300] '>
                        ملخص الطلب
                    </strong>
                    <div className='flex justify-between w-full my-rtl px-3 mb-2 '>
                        <span className='text-gray-400'>مجموع المنتجات</span>
                        <span className="text-xs text-gray-700">{total()} DA</span>
                    </div>
                    <div className='flex justify-between w-full my-rtl px-3 mb-2 '>
                        <span className='text-gray-400'>الإجمالي</span>
                        <span className="text-xs text-gray-700">{total()} DA</span>
                    </div>
                    <Link
                        to={'/buy/?marek=hello'}
                        className='w-[95%] bg-cyan-900 mt-5 text-white mx-auto rounded-2xl py-2 flex justify-center items-center'
                    >
                        اتمام الطلب
                        <MdOutlineNotificationsActive className='mx-2' size={25} />
                    </Link>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                exit={{ opacity: 0 }}
                onClick={hide}
                className="fixed top-0 left-0 h-full w-full z-0  bg-black">

            </motion.div>


        </div>
    )
}

export default BuySide