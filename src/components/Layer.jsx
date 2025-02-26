import React, { useEffect, useState } from 'react'
import { ChevronBarDown, ChevronDown, ChevronUp, Fonts } from 'react-bootstrap-icons'
import { shirtLayers, shirtSides } from '../config/constants'

const Layer = ({ layers , selectedLayer}) => {

    const [attributeLayers, setAttributeLayers] = useState(layers);

    return (
        <div className=''>
            <div className='font-semibold border-b border-gray-300 py-2'>Layers</div>
            {attributeLayers.map((layer, index) => (
                <div key={index} onClick={()=>selectedLayer({id:layer.id,type:layer.type})}>{layer.layerType}</div>
            ))}
        </div>
    )
}

export default Layer

function ItemSide({ sideName = "Front Side" }) {
    const [show, setShow] = useState(true);
    const [attibute, setAttibute] = useState([]);

    function handleAttributes() {
        const nextAttribute = shirtLayers.map((item, index) => {
            if (item.type === 'Image') {
                return { attr: <TextLayer key={index} price={item.price} />, type: 'text' }
            } else {
                return { attr: <ImageLayer key={index} price={item.price} />, type: 'image' }
            }
        })
        setAttibute(nextAttribute);
    }

    useEffect(() => {
        handleAttributes();
    }, []);



    const handleClick = () => {
        setShow(!show);
    };

    return (
        <div>
            <div onClick={handleClick} className='my-1 text-sm rounded-md cursor-pointer flex items-center justify-between p-2 bg-gray-300'>{sideName} <span>{show ? <ChevronUp /> : <ChevronDown />}</span></div>
            <div className={`text-sm pl-2 ${show ? 'block' : 'hidden'}`}>
                {attibute.map((item, index) => (
                    <div key={index}>
                        {item.attr}
                    </div>
                ))}
            </div>
        </div>
    )
}



