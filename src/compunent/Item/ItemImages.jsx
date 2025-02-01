import React, { useState } from 'react'
import FocusGallory from './FocusGallory'
import { AnimatePresence } from 'framer-motion'

const ItemImages = ({ item }) => {
    const [focus, setfocus] = useState(false)
    const hide = () => {
        setfocus(false)
    }
    return (
        <div className='flex w-full max-h-[70vh] justify-center'>
            <div className='flex flex-flex-1  overflow-x-auto ss snap-x max-h-50vh] md:p-16 bg-[#efefef]'>
                {item.imgs.map(e => {
                    return <div id={e} onClick={() => {
                        setfocus(true)
                    }} key={e} className='min-w-full flex justify-center  snap-center'>
                        <img src={e} className='w-8/12 mf:w-6/12 h-full mx-auto' />
                    </div>
                })}
            </div>
            {item.imgs.lenght > 1 &&
                <div className='hidden lg:w-5/12 lg:flex flex-col max-h-[50vh] overflow-y-auto ss'>
                    {item.imgs.map(e => <a href={"#" + `${e}`} key={e}>

                        <img onClick={() => {
                            setfocus(true)
                        }} src={e} className='w-full min-h-[30vh]' />
                    </a>
                    )}
                </div>
            }

            <AnimatePresence>
                {focus && <FocusGallory hide={hide} imgs={item.imgs} />}

            </AnimatePresence>
        </div>
    )
}

export default ItemImages