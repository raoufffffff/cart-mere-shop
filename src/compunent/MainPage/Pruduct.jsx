import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom"

const Pruduct = ({ item, width }) => {
    const path = width ? `/item/${item.id}` : `/item/${item.id}`
    const newPrice = (item.price * (1 - (item.doscount / 100)))
    return (
        <div className={`border who-p relative border-gray-100 rounded-lg   snap-center  flex flex-col  ${width ? "product mx-3" : "w-[230px] mx-1.5 "} shadow-md my-2 hover:scale-[1.01] hover:mx-4 hover:shadow-2xl   abcd`}
        >
            <Link to={path}>
                <div className="w-full overflow-hidden rounded-2xl p-1">
                    <img className="w-full h-[230px]" src={item.imgs[0]} />
                </div>
                <h1 className="my-rtl h-16 p-3 text-sm text-right font-medium mt-auto">{item.titel}</h1>
            </Link>
            <div className="flex justify-between px-3 items-center py-3 ">
                <span
                    className="px-2 py-2 border border-neutral-300 rounded-3xl"
                >
                    <MdAddShoppingCart size={20} />
                </span>
                <div>
                    {item.doscount > 0 ? <>
                        <span
                            className="line-through text-xs mr-3 text-gray-400">
                            DA {item.price}</span>
                        <span
                            className="text-rose-600 text-md font-bold"
                        >
                            DA {newPrice}
                        </span>
                    </>
                        :
                        <span className="text-sm font-bold">DA {item.price}</span>
                    }

                </div>
            </div>
            <span className="absolute top-4 right-3 p-1.5 rounded-full my-border flex text-neutral-400 hover:text-rose-800 cursor-pointer hover:scale-105 justify-center items-center opacity-90">
                <FaRegHeart size={20} className="text-inherit" />
            </span>
        </div>
    )
}

export default Pruduct