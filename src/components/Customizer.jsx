import React, { useEffect, useState } from 'react'
import { colors } from '../config/constants'
import gsap from 'gsap'

const Customizer = ({ activeColor }) => {

    return (
        <div id='color' className=" absolute left-0 right-0 bottom-0 p-4">
            <div className='flex items-center justify-center w-full'>
                <Color activeColor={activeColor} />
            </div>
        </div>
    )
}

export default Customizer


function Color({ activeColor }) {
    const [selectedColor, setSelectedColor] = useState(colors[0].code);

    useEffect(() => {
        // gsap.to('#color', { translateY: 12, duration: 2 })
    }, [])
    return (

        <div className='flex shadow-md gap-2 items-center justify-center bg-gray-600 p-2 rounded-full'>
            {colors.map((color, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedColor(color.code)}
                    className={`w-6 h-6 rounded-full`}
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                    onClick={() => { activeColor(color.code) }}
                />
            ))}
        </div>

    );
}