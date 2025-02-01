import { Link, useSearchParams } from "react-router-dom"
import data from "../../data/Data"
import { useEffect, useState } from "react"
import Place from "../../compunent/places/Place"
import Pruduct from "../../compunent/MainPage/Pruduct"
import { LiaShoppingBagSolid } from "react-icons/lia"
const CategorePage = () => {
    const [SearchParams] = useSearchParams()
    const [Loking, setLoking] = useState([])
    const [logo, setlogo] = useState("")
    let about = SearchParams.get('marek') || SearchParams.get('type') || SearchParams.get('all')
    useEffect(() => {
        if (SearchParams.get('marek')) {
            setLoking(data.product.filter(e => e.mark == SearchParams.get('marek')))
            setlogo(data.myMark.find(e => e.name == SearchParams.get('marek')).imgs)
        }
        if (SearchParams.get('type')) {
            if (SearchParams.get('type') === 'all') {
                return setLoking(data.product.filter(e => e.doscount > 10))
            }
            setLoking(data.product.filter(e => e.type == SearchParams.get('type')))
        }
        if (SearchParams.get('all')) {
            setLoking(data.myMark)
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [SearchParams])
    const containerLgo = ['appel', "huawei", 'zte', 'jbl']
    const filterLogo = (e) => {
        if (containerLgo.find(p => p === e)) {
            return true
        } else {
            return false
        }
    }
    const marek = Loking.map((e, i) => {
        return <Link
            to={`/categore/?marek=${e.name}`}
            key={i}
            className=" w-5/12 md:w-3/12 lg:w-2/12 border border-gray-400 rounded-lg mx-3   snap-center flex items-center  justify-center my-2 sparkle h-[80px]"
        >
            <div className={`w-full h-5/6 hover:rotate-2 bg-no-repeat bg-center transition-all ${filterLogo(e.name) ? "bg-contain" : "bg-cover"}`}
                style={{
                    backgroundImage: `url(${e.imgs})`
                }}
            ></div>
        </Link>
    })

    const items = Loking.map((e, i) => <Pruduct item={e} key={i} width={false} />)
    console.log(Loking);
    return (
        <div className="mt-[58px] my-rtl mb-10">
            {SearchParams.get('all') && <>
                <Place one={about} />
                <h1 className="font-[600] text-xl pr-3">{about}</h1>
                <div className="flex flex-wrap mt-10 justify-center">
                    {marek}
                </div>
            </>}
            {SearchParams.get('marek') && <>
                <div className="flex w-full px-5 mt-[100px] flex-col items-center md:flex-row mb-10">
                    <img src={logo} className="w-4/12 md:w-3/12 ml-2 shadow-md mb-2" />
                    <h1 className="font-[500] text-xl">{about}</h1>
                </div>
                {Loking.length === 0 ? <div className="flex flex-col items-center justify-center mb-40 mt-10">
                    <div className="p-10 mb-10 rounded-full bg-[#eee] flex justify-center items-center">
                        <LiaShoppingBagSolid size={40} className="text-[#afafaf]" />
                    </div>
                    <h2 className="my-rtl">
                        لا تتوفر لدينا حاليا أي منتجات للماركة التجارية
                        <span className="mx-1 font-[500]"> {about}</span>                    </h2>
                </div> : <div className="flex flex-wrap my-0 justify-center">
                    {items}
                </div>}
            </>}
            {SearchParams.get('type') && <>
                <Place one={SearchParams.get('type') == 'all' ? "لاكثر مبيعا" : SearchParams.get('type')} />
                {Loking.length === 0 ? <div>

                </div> : <div className="flex flex-wrap my-0 justify-center">
                    {items}
                </div>}

            </>}


        </div>
    )
}

export default CategorePage