import { Link } from 'react-router-dom'
import data from '../../data/Data'
import Titel from './Titel'
import Pruduct from './Pruduct';
import { motion } from 'framer-motion'
const ProductConatiner = ({ about, snap }) => {
    const products = data.product.map((e, i) => <Pruduct item={e} key={i} width={snap ? false : true} />);



    return (
        <div className="w-full flex flex-col  py-4" >
            {about.img && <motion.img
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='px-5 my-7' src={about.img} alt="img-sctoin" />}
            <Titel titel={about.name} />
            <div className={`snap-x flex ${snap && "flex-wrap justify-center"}  w-full h-fit  overflow-auto ss py-6  ss3`}>
                {products}
            </div>
            {!snap && < Link to={`/categore/?type=${about.type}`} className='my-10  w-fit mx-auto px-4 py-3 flex justify-center items-center rounded-xl  border border-gray-300 text-xl relative btn-effct overflow-hidden'> {"<"}  عرض المزيد</Link>}
        </div>
    )
}

export default ProductConatiner