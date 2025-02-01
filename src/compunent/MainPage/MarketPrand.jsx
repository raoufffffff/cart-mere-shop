import { Link } from 'react-router-dom'
import data from '../../data/Data'
import Titel from './Titel'
import { useEffect, useState } from 'react'

const MarketPrand = () => {
    const containerLgo = ['appel', "huawei", 'zte', 'jbl']
    const [count, setcount] = useState(1)
    const filterLogo = (e) => {
        if (containerLgo.find(p => p === e)) {
            return true
        } else {
            return false
        }
    }
    const scrool = () => {
        if (count < 10) {
            document.querySelector('.ss2').scrollBy({
                left: 150,
                behavior: 'smooth'
            })
            setcount(p => p += 1)
        } else {
            document.querySelector('.ss2').scrollBy({
                left: 1500,
                behavior: 'smooth'
            })
            setcount(0)

        }
    }
    useEffect(() => {
        setTimeout(() => {
            scrool()
        }, 4000);
    }, [count])
    const Market = data.myMark.map((e, i) => {
        return <Link to={`categore/?marek=${e.name}`} className={`abc    border border-gray-400 rounded-lg mx-3 card  snap-center flex items-center  justify-center my-2  sparkle `}
            key={i} >
            <div className={`w-full h-5/6 hover:rotate-2 bg-no-repeat bg-center transition-all ${filterLogo(e.name) ? "bg-contain" : "bg-cover"}`}
                style={{
                    backgroundImage: `url(${e.imgs})`
                }}
            ></div>
        </Link>
    })
    return (
        <div className="w-full flex flex-col  py-4">
            <Titel titel="العلامات التجارية" />
            <div className='snap-x flex  w-full h-fit py-6  overflow-x-auto ss ss2'>
                {Market}
            </div>
            <Link to={'categore/?all=الماركات التجارية'} className='my-2  w-fit mx-auto px-4 py-3 flex justify-center items-center rounded-xl  border border-gray-300 text-xl relative btn-effct overflow-hidden'> {"<"}  عرض المزيد</Link>
        </div>
    )
}

export default MarketPrand