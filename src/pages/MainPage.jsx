import MarketPrand from '../compunent/MainPage/MarketPrand'
import ProductConatiner from '../compunent/MainPage/ProductConatiner'
import WhoWeAre from '../compunent/MainPage/WhoWeAre'

const MainPage = () => {
    const about = {
        name: "منتجاتنا",
        img: "",
        type: "all"
    }
    // const sctions = [
    //     {
    //         name: "لاكثر مبيعا",
    //         img: "",
    //         type: "all"
    //     },
    //     {
    //         name: "قسم الهواتف",
    //         img: "https://cdn.salla.sa/form-builder/7FSy4bIfdRJiV8Yr2DiOXgymeYLySzZtiVqORTDI.png",
    //         type: "phone"
    //     },
    //     {
    //         name: "قسم التابلت",
    //         img: "",
    //         type: "tabelet"
    //     },
    //     {
    //         name: "قسم الكابل",
    //         img: "https://cdn.salla.sa/form-builder/DnYEDvII6wWbJrhG51q05j7UZ3bRhuDFknPQUtSF.png",
    //         type: "cabel"
    //     },
    //     {
    //         name: "قسم السماعات",
    //         img: "",
    //         type: "hades"
    //     },
    //     {
    //         name: "قسم الساعات",
    //         img: "https://cdn.salla.sa/form-builder/rZ4XgIuCCrRRCg7BHaVBsPKAZL3g2lrJWulaOs0f.png",
    //         type: "smart watch"
    //     },
    //     {
    //         name: "قسم الباور بانك",
    //         img: "https://cdn.salla.sa/form-builder/HxSmtOTab6uf2m784L6p57ehxA9xbZiNfM9OiFNn.png",
    //         type: "power bank"
    //     },
    //     {
    //         name: "اصناف متنوعة",
    //         img: "https://cdn.salla.sa/form-builder/RvSK0FLUThsFJLk5P9XqL4FALgwErkOuQs6j7apu.png",
    //         type: "others"
    //     },
    // ].map((e, i) => {
    //     return <ProductConatiner key={i} about={e} />
    // })
    return (
        <div className='w-full '>
            <MarketPrand />
            <ProductConatiner snap={true} about={about} />
            <WhoWeAre />
        </div>
    )
}

export default MainPage