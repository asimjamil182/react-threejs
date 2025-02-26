import React from 'react'


const PropertiesPanel = ({position,scale,rotation,activePostion,activeScale,activeRotation,selectedLayer}) => {
    return (
        <div className='p-4'>
            <div className='font-semibold py-2 border-b border-gray-300'>Logo Settings ({selectedLayer.id}) ({selectedLayer.type})</div>
            <div className='flex gap-2 flex-wrap py-2 flex-col'>
                <label htmlFor="range">Position</label>
                <div className="flex gap-2 bg-white p-2 rounded-md">
                <div className='flex gap-1 items-center'>
                    <div>Horizantol:</div>
                    <input type="number" className='p-1 w-[60px] bg-gray-400' name="" id="" value={position} onChange={(e)=>activePostion(e.target.value)} />
                </div>
                <div className='flex gap-1 items-center'>
                    <div>Vertical:</div>
                    <input type="number" className='p-1 w-[60px] bg-gray-400' name="" id="" value={position} onChange={(e)=>activePostion(e.target.value)} />
                </div>
                
                </div>
                <label htmlFor="range">Size</label>
                <input type="number" name="" id="" value={rotation} onChange={(e)=>activeScale(e.target.value)} />
                <label htmlFor="range">Rotation</label>
                <input type="number" name="" id="" value={rotation} onChange={(e)=>activeRotation(e.target.value)} />
            </div>
        </div>
    )
}

export default PropertiesPanel