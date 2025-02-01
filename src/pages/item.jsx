import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/Data'
import Place from '../compunent/places/Place'
import ItemImages from '../compunent/Item/ItemImages'
import ItemPrice from '../compunent/Item/ItemPrice'
import ItemDes from '../compunent/Item/ItemDes'
import ProductConatiner from '../compunent/MainPage/ProductConatiner'
const Item = () => {
    const { id } = useParams()
    const item = data.product.find(e => e.id == id)
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [id])

    return (
        <div className='mt-[55px] w-full'>
            <Place one={item.type} tow={item.titel} bg={true} />
            <ItemImages item={item} />
            <ItemPrice item={item} />
            <ItemDes item={item} />
            <ProductConatiner about={item} />

        </div>
    )
}

export default Item