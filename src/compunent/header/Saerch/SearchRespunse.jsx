import { Link } from 'react-router-dom';
import data from '../../../data/Data'
const SearchRespunse = ({ search, hide }) => {
    if (search.length < 3) {
        return
    }
    let result = data.product.filter(e => e.titel.toLowerCase().includes(search.toLowerCase())).map((e, i) => <Link
        to={`/item/${e.id}`}
        key={i}
        onClick={hide}
        className='flex h-[80px] w-full px-5 py-1 my-1 border-b border-b-gray-300'
    >
        <img src={e.imgs[0]} alt='poduct-image' className='h-full w-[100px] rounded-md' />
        <div className='px-3 flex-1 flex flex-col justify-between py-1'>
            <h1 className='text-[15px] line-clamp-1'>{e.titel}</h1>
            <div className='w-full'>
                {e.doscount > 0 ? <>
                    <span
                        className="line-through text-xs mr-3 text-gray-400">
                        DA {e.price}</span>
                    <span
                        className="text-rose-600 text-md font-bold"
                    >
                        DA {(e.price * (1 - (e.doscount / 100)))}
                    </span>
                </>
                    :
                    <span className="text-sm font-semibold text-gray-700">DA {e.price}</span>
                }
            </div>
        </div>
    </Link>)
    return (
        <div className='flex flex-col max-h-80 overflow-y-auto mt-5'>
            {result}
        </div>
    )
}

export default SearchRespunse