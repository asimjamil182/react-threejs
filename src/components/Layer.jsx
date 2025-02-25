import React, { useState } from 'react'
import { ChevronBarDown, ChevronDown, ChevronUp, Fonts } from 'react-bootstrap-icons'
import { shirtLayers, shirtSides } from '../config/constants'

const Layer = () => {
    return (
        <div className=''>
            <div className='font-semibold border-b border-gray-300 py-2'>Layer</div>
            {shirtSides && shirtSides.map((side, index) => (
                <ItemSide key={index} sideName={side.name} />
            ))}
        </div>
    )
}

export default Layer

function ItemSide({ sideName = "Front Side" }) {

    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <div>
            <div onClick={handleClick} className='my-1 text-sm rounded-md cursor-pointer flex items-center justify-between p-2 bg-gray-300'>{sideName} <span>{show ? <ChevronUp /> : <ChevronDown />}</span></div>
            <div className={`text-sm pl-2 ${show ? 'block' : 'hidden'}`}>
                {shirtLayers && shirtLayers.map((layer, index) => (
                    <ImageLayer key={index} image={layer.icon} price={layer.price} />
                ))}
            </div>
        </div>
    )
}

function ImageLayer({ image = "/react.png", price = "00 AED" }) {
    return (
        <div className='p-2 m-0.5 rounded-md bg-gray-200 flex items-center justify-between cursor-pointer'>
            <div className='flex items-center'>
                <img src={image} className='w-6 h-6' />
                <span className='pl-2'>Image</span>
            </div>
            <div className='font-semibold'>{price}</div>
        </div>
    )
}
function TextLayer({ text = "Text", price = "00 AED" }) {
    return (
        <div className='p-2 m-0.5 rounded-md bg-gray-200 flex items-center justify-between cursor-pointer'>
            <div className='flex items-center'>
                {/* <img src='/react.png' className='w-6 h-6' /> */}
                <Fonts className='w-6 h-6' />
                <span className='pl-2'>{text}</span>
            </div>
            <div className='font-semibold'>{price}</div>
        </div>
    )
}

