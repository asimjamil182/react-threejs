import React from 'react'
import LayerComponent from './LayerComponent'

const PropertiesPanel = () => {
    return (
        <div className='p-4'>
            {/* <div className='font-semibold py-2 border-b border-gray-300'>Logo Settings</div>
            <div className='flex gap-2 flex-wrap py-2'>
                <label htmlFor="range">Size</label>
                <input type="range" name="range" id="" className='w-full' min={1} max={10} />
                <label htmlFor="range">Rotation</label>
                <input type="range" name="range" id="" className='w-full' min={1} max={10} />
            </div> */}
            <LayerComponent/>
        </div>
    )
}

export default PropertiesPanel