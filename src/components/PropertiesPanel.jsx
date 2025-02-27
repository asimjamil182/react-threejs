import React, { useState } from 'react'
import { use } from 'react';
import { useEffect } from 'react'


const PropertiesPanel = ({ selectedLayer,PropertiesUpdate }) => {

    const [attributes, setAttributes] = useState('');

    const renderAttributes = () => {
        let att;
        if (selectedLayer.type === 'Image') {
            att = <ImageProperties intialValues={selectedLayer} changeValues={(value)=>PropertiesUpdate(value)} />
        }
        else if (selectedLayer.type === 'Text') {
            att = <TextProperties intialValues={selectedLayer} changeValues={(value)=>PropertiesUpdate(value)} />
        }
        return att;
    }

    useEffect(() => {
        setAttributes(renderAttributes);
    }, [selectedLayer]);

    return (
        <div className='p-4'>
            <div className='font-semibold py-2 border-b border-gray-300'>{selectedLayer.type ? `(${selectedLayer.type})` : ``} Properties {selectedLayer.id ? `(${selectedLayer.id})` : ``} </div>
            {attributes}
        </div>
    )
}

export default PropertiesPanel


function ImageProperties({ intialValues = {}, changeValues }) {
    const [positionX, setPositionX] = useState(intialValues.positionX || 0);
    const [positionY, setPositionY] = useState(intialValues.positionY || 0);
    const [scale, setScale] = useState(intialValues.scale || 0.2);
    const [rotation, setRotation] = useState(intialValues.rotation || 0);

    useEffect(() => {
        if (intialValues.positionX !== undefined) setPositionX(intialValues.positionX);
        if (intialValues.positionY !== undefined) setPositionY(intialValues.positionY);
        if (intialValues.scale !== undefined) setScale(intialValues.scale);
        if (intialValues.rotation !== undefined) setRotation(intialValues.rotation);
    }, [intialValues]);

    useEffect(() => {
        changeValues({ positionX, positionY, scale, rotation });
    }, [positionX, positionY, scale, rotation]);

    return (
        <div>
            <div className='flex gap-2 flex-wrap py-2 flex-col'>
                <label>Position</label>
                <div className="flex gap-2 bg-white p-2 rounded-md">
                    <div className='flex gap-1 items-center'>
                        <div>Horizontal:</div>
                        <input type="number" className='p-1 w-[60px] bg-gray-400' value={positionX} onChange={(e) => setPositionX(Number(e.target.value))} />
                    </div>
                    <div className='flex gap-1 items-center'>
                        <div>Vertical:</div>
                        <input type="number" className='p-1 w-[60px] bg-gray-400' value={positionY} onChange={(e) => setPositionY(Number(e.target.value))} />
                    </div>
                </div>
                <label>Size</label>
                <input type="number" value={scale} onChange={(e) => setScale(Number(e.target.value))} />
                <label>Rotation</label>
                <input type="number" value={rotation} onChange={(e) => setRotation(Number(e.target.value))} />
            </div>
        </div>
    );
}

function TextProperties({ intialValues = {}, changeValues }) {
    const [positionX, setPositionX] = useState(intialValues.positionX || 0);
    const [positionY, setPositionY] = useState(intialValues.positionY || 0);
    const [scale, setScale] = useState(intialValues.scale || 0.2);
    const [rotation, setRotation] = useState(intialValues.rotation || 0);
    const [text, setText] = useState(intialValues.text || '');

    useEffect(() => {
        if (intialValues.positionX !== undefined) setPositionX(intialValues.positionX);
        if (intialValues.positionY !== undefined) setPositionY(intialValues.positionY);
        if (intialValues.scale !== undefined) setScale(intialValues.scale);
        if (intialValues.rotation !== undefined) setRotation(intialValues.rotation);
        if (intialValues.text !== undefined) setText(intialValues.text);
    }, [intialValues]);

    useEffect(() => {
        changeValues({ text, positionX, positionY, scale, rotation });
    }, [text, positionX, positionY, scale, rotation]);

    return (
        <div>
            <div className='flex gap-2 flex-wrap py-2 flex-col'>
                <label>Text</label>
                <textarea  value={text} onChange={(e) => setText(e.target.value)} />
                <label>Position</label>
                <div className="flex gap-2 bg-white p-2 rounded-md">
                    <div className='flex gap-1 items-center'>
                        <div>Horizontal:</div>
                        <input type="number" className='p-1 w-[60px] bg-gray-400' value={positionX} onChange={(e) => setPositionX(Number(e.target.value))} />
                    </div>
                    <div className='flex gap-1 items-center'>
                        <div>Vertical:</div>
                        <input type="number" className='p-1 w-[60px] bg-gray-400' value={positionY} onChange={(e) => setPositionY(Number(e.target.value))} />
                    </div>
                </div>
                <label>Size</label>
                <input type="number" value={scale} onChange={(e) => setScale(Number(e.target.value))} />
                <label>Rotation</label>
                <input type="number" value={rotation} onChange={(e) => setRotation(Number(e.target.value))} />
            </div>
        </div>
    );
}