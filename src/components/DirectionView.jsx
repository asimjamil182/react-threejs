import React, { useState,useEffect } from 'react'

const DirectionView = ({activeDirection}) => {
    const [direction, setDirection] = useState('Front');

    useEffect(() => {
        activeDirection(direction);
    }, [direction]);
    return (
        <div className="absolute bottom-0 flex gap-2 p-1">
            <button onClick={()=>setDirection('Front')} className={`${direction==`Front`?`bg-white`:`bg-[#ffffff67]`} text-gray-600 p-2`}>Front</button>
            <button onClick={()=>setDirection('Right')} className={`${direction==`Right`?`bg-white`:`bg-[#ffffff67]`} text-gray-600 p-2`}>Right</button>
            <button onClick={()=>setDirection('Back')} className={`${direction==`Back`?`bg-white`:`bg-[#ffffff67]`} text-gray-600 p-2`}>Back</button>
            <button onClick={()=>setDirection('Left')} className={`${direction==`Left`?`bg-white`:`bg-[#ffffff67]`} text-gray-600 p-2`}>Left</button>
        </div>
    )
}

export default DirectionView