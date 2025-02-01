import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaFacebook, FaImage, FaInstagram, FaSnapchat, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { MdOutlineSmartphone } from 'react-icons/md';
import { CiMail } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div className='w-full flex flex-wrap  md:flex-row my-rtl border-t border-t-gray-100 pt-6'>
            <div
                className='flex'
            >

                <div className='w-full md:w-4/12 flex flex-col items-center px-2'>
                    <img src={logo} className='h-14 w-14 mb-3' />
                    <p className='text-center'>بيع  قطع غيار الإلكترونية</p>
                </div>

                <div className='w-6/12 md:w-4/12 flex flex-col pt-3 px-3 items-center mx-auto md:items-start '>
                    <h1 className='text-xl font-bold mb-3 text-center text-black'>تواصل معنا</h1>
                    <a className='my-1 flex' href='#'>
                        <FaWhatsapp size={20} className='mx-3 text-emerald-600' />
                        +213776966468
                    </a>
                    <a className='my-1 flex' href='#'>
                        <MdOutlineSmartphone size={20} className='mx-3 text-rose-800' />
                        +213776966468
                    </a>
                    <a className='my-1 flex' href='#'>
                        <CiMail size={20} className='mx-3 text-cyan-700' />
                        raouf-bar@live.fr
                    </a>
                </div>
            </div>
            <div className='w-full border-t border-t-neutral-300 py-5 my-5'>
                <div className='w-full flex justify-center mb-5'>
                    <a href='#'>
                        <FaFacebook
                            className='mx-2 text-gray-400'
                            size={20} />
                    </a>
                    <a href='#'>
                        <FaYoutube
                            className='mx-2 text-gray-400'
                            size={20} />
                    </a>
                    <a href='#'>
                        <FaTiktok
                            className='mx-2 text-gray-400'
                            size={20} />
                    </a>
                    <a href='#'>
                        <FaSnapchat
                            className='mx-2 text-gray-400'
                            size={20} />
                    </a>
                    <a href='#'>
                        <FaXTwitter
                            className='mx-2 text-gray-400'
                            size={20} />
                    </a>
                    <a href='#'>
                        <FaInstagram
                            className='mx-2 text-gray-400'
                            size={20} />
                    </a>
                    <a href='#'>
                        <FaImage
                            className='mx-2 text-gray-400'
                            size={20} />
                    </a>
                </div>
                <h1 className='text-center'>صنع بإتقان من RH</h1>
            </div>
        </div>
    )
}

export default Footer