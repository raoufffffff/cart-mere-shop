import { TbShoppingCartMinus, TbShoppingCartPlus } from 'react-icons/tb'
import { useSnapshot } from 'valtio'
import state from '../../store/store'
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import BuySide from '../BuySide/BuySide'
import { AnimatePresence } from 'framer-motion'


const ItemPrice = ({ item }) => {
    let snap = useSnapshot(state)
    const [q, setq] = useState(1)
    const newPrice = (item.price * (1 - (item.doscount / 100))) * q
    const [showBuy, setShowBuy] = useState(false)
    const hide = () => setShowBuy(false)
    return (
        <div className='mt-10 flex justify-between px-3 mb-10 items-center flex-wrap'>
            <AnimatePresence>

                {showBuy && <BuySide hide={hide} />}
            </AnimatePresence>
            {item.doscount > 0 ? <div>
                <span
                    className="line-through text-xs mr-3 text-gray-400">
                    DA {item.price * q}</span>
                <span
                    className="text-rose-600 text-md font-bold"
                >
                    DA {newPrice}
                </span>
            </div>
                :
                <span className="text-sm font-bold">DA {newPrice}</span>
            }
            <div className='flex border-[0.5px] items-center border-[#aaa] px-2 py-1 rounded-2xl'>
                <span
                    onClick={() => {
                        if (q === 1) {
                            return
                        }
                        setq(p => p - 1)
                    }}
                    className='mx-0.5 flex items-center'>
                    <span className='font-[600] text-[25px] mx-0.5'>-</span>
                    <TbShoppingCartMinus size={25} className='text-[#444]' />
                </span>
                <span className='mx-2 text-[25px]'>
                    {q}
                </span>
                <span
                    onClick={() => {
                        setq(p => p + 1)
                    }}
                    className='mx-0.5 flex items-center'>
                    <TbShoppingCartPlus size={25} className='text-[#444]' />
                    <span className='font-[600] text-[25px] mx-0.5'>+</span>
                </span>
            </div>
            <button className='w-[95%] bg-cyan-800 mt-5 text-white mx-auto rounded-2xl py-2 flex justify-center items-center'
                onClick={() => {
                    if (state.items.find(e => e.item.id == item.id)) {
                        setShowBuy(true)
                        return
                    }
                    state.price += newPrice;
                    state.items.push({
                        item: item,
                        q: q
                    })
                }}
            >إضافة للسلة
                <TbShoppingCartPlus className='mx-2' size={25} />
            </button>
            <Link
                to={'/buy/?marek=hello'}
                className='w-[95%] bg-cyan-900 mt-5 text-white mx-auto rounded-2xl py-2 flex justify-center items-center'
                onClick={() => {
                    state.items = [{ item: item, q: q }]
                }}
            >
                اطلب الان
                <MdOutlineNotificationsActive className='mx-2' size={25} />
            </Link>
        </div>
    )
}

export default ItemPrice