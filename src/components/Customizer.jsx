import React, { useEffect, useState } from 'react'
import { colors, defalutImages, defalutFonts } from '../config/constants'
import { Fonts, ImageFill, LayersFill, Palette } from 'react-bootstrap-icons'
import ImageUploadBox from './ImageUploadBox'
import Layer from './Layer'
import { CanvasTexture } from 'three'

const editertab = [
    { name: 'Color', icon: <Palette size={25} /> },
    { name: 'Image', icon: <ImageFill size={25} /> },
    { name: 'Text', icon: <Fonts size={25} /> },
    { name: 'Layers', icon: <LayersFill size={25} /> },
]

const Customizer = ({ direction = 'Front', activeColor, activeDecals,selectedLayer }) => {
    const [currentTab, setCurrentTab] = useState('Image');
    const [currentColor, setCurrentColor] = useState('#ffffff');
    const [currentDecals, setCurrentDecals] = useState([]);
    const [currentText, setCurrentText] = useState('');
    const [directionView, setDirectionView] = useState(direction);
    const [activeLayer, setActiveLayer] = useState('');

    useEffect(() => {
        if (activeLayer.id !== 0) {
            selectedLayer(activeLayer);
        }
    }, [activeLayer]);

    function ActiveColor(color) {
        console.log('color', color);
    }
    const getRandomNumber = () => {
        return (Math.random() * 0.3 - 0.15).toFixed(2);
    };
    function ActiveDecals(decal) {
        if (decal === '') {
            return;
        }
        setCurrentDecals([...currentDecals, {
            type: 'Image',
            layerType: <ImageLayer key={currentDecals.length + 1} image={decal} />,
            id: currentDecals.length + 1,
            position: [0, 0, 0.15],
            scale: [0.2, 0.2, 0.2],
            rotation: [0, 0, 0],
            url: decal,
            texture: null
        }]);
    }
    function ActiveText(text) {
        if (text === '') {
            return;
        }
        setCurrentDecals([...currentDecals, {
            type: 'Text',
            layerType: <TextLayer key={currentDecals.length + 1} />,
            id: currentDecals.length + 1,
            position: [0, 0, 0.15],
            scale: [0.2, 0.2, 0.2],
            rotation: [0, 0, 0],
            url: null,
            texture: text
        }]);
    }


    useEffect(() => {
        activeColor(currentColor);
        activeDecals(currentDecals);
    }, [currentColor, currentText, currentDecals]);

    let content;

    if (currentTab == 'Text') {
        content = <TextAttibutes activeText={ActiveText} />
    } else if (currentTab == 'Image') {
        content = <ImageAttribute activeDecals={ActiveDecals} />
    } else if (currentTab == 'Layers') {
        content = <Layer layers={currentDecals} selectedLayer={(layer)=>setActiveLayer(layer)} />
    } else {
        content = <Color defaultColor={currentColor} activeColor={(color) => setCurrentColor(color)} />
    }

    return (
        <div>

            <div className="overflow-hidden border flex">
                <EditerTab activeTab={(tab) => setCurrentTab(tab)} />
                <div id='color' className='flex-1 p-2 px-4 bg-slate-200'>
                    {content}
                </div>
            </div>
        </div>

    )
}

export default Customizer

function EditerTab({ activeTab }) {
    const [selectedTag, setSelectedTag] = useState('Image');
    useEffect(() => {
        activeTab(selectedTag);
    }, [selectedTag]);
    return (
        <div className='h-[calc(100vh-6rem)] bg-white '>
            <div className='flex justify-center flex-col'>
                {editertab.map((tab, index) => (
                    <button
                        className={`p-2 flex gap-2 transition-all duration-300 ${selectedTag === tab.name ? `bg-slate-200` : ``}`}
                        key={index}
                        onClick={() => setSelectedTag(tab.name)}
                    >{tab.icon} <span className='hidden'>{tab.name}</span></button>
                ))}
            </div>
        </div>
    );
}

function Color({ defaultColor = colors[0].code, activeColor }) {
    const [selectedColor, setSelectedColor] = useState(defaultColor);
    useEffect(() => {
        activeColor(selectedColor);
    }, [selectedColor])

    return (
        <>
            <div className='font-semibold py-2'>Colors</div>
            <div className='flex gap-2 flex-wrap'>
                {colors.map((color, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedColor(color.code)}
                        className={`w-8 h-8 rounded-full shadow ${selectedColor === color.code ? `border-2 border-black` : ``}`}
                        style={{ backgroundColor: color.code }}
                        title={color.name}
                    />
                ))}
            </div>
        </>
    );
}

function ImageAttribute({ activeDecals }) {

    const [customImage, setCustomImage] = useState([]);

    const handleClick = (e) => {
        activeDecals(e);
    }

    const customImageHandler = (e) => {
        const url = (URL.createObjectURL(e.target.files[0]));
        setCustomImage([...customImage, {
            name: e.target.files[0].name,
            url: url
        }]);
    }

    return (
        <>
            <div className='font-semibold py-2'>Image</div>
            <div className='flex gap-2 flex-wrap'>
                <ImageUploadBox onImageUpload={customImageHandler} />
                {customImage.map((image, index) => (
                    <img
                        key={index}
                        src={image.url}
                        onClick={() => handleClick(image.url)}
                        className={`w-16 h-16 shadow cursor-pointer`}
                        title={image.name}
                    />
                ))}
            </div>
            <div className=' py-2 text-sm font-semibold border-b border-gray-400'>Default Images</div>
            <div className='flex gap-2 flex-wrap mt-2'>
                {defalutImages.map((image, index) => (
                    <img
                        key={index}
                        src={image.imageUrl}
                        onClick={() => handleClick(image.imageUrl)}
                        className={`w-16 h-16 shadow cursor-pointer`}
                        title={image.name}
                    />
                ))}
            </div>
        </>

    );
}
function TextAttibutes({ activeText }) {
    
    function handleClick(e) {
        activeText(createTextTexture(e, '100px', 'black', 'transparent'));
    }

    return (
        <>
            <div className='font-semibold py-2 border-b border-gray-300'>Text</div>
            <div className='flex gap-2 flex-wrap py-2'>
                {defalutFonts.map((font, index) => (
                    <div key={index} onClick={()=>handleClick(font.name)} className={`font-semibold  bg-white p-3 border-2 cursor-pointer`}>{font.name}</div>
                ))}
            </div>
        </>
    );
}

function ImageLayer({ image = "/react.png", price = "00 AED" }) {
    return (
        <div className='p-2 m-0.5 border border-gray-300 rounded-md bg-gray-200 hover:shadow-md flex items-center justify-between cursor-pointer'>
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
        <div className='p-2 m-0.5 border border-gray-300 rounded-md bg-gray-200 hover:shadow-md flex items-center justify-between cursor-pointer'>
            <div className='flex items-center'>
                {/* <img src='/react.png' className='w-6 h-6' /> */}
                <Fonts className='w-6 h-6' />
                <span className='pl-2'>{text}</span>
            </div>
            <div className='font-semibold'>{price}</div>
        </div>
    )
}

function createTextTexture(text = 'Hello World', fontSize = '100px', fontColor = 'black', background = 'transparent') {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 256;
    context.fillStyle = background;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = fontColor;
    context.font = `${fontSize} Arial`;
    context.textAlign = 'center'
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    context.stroke = 1;
    return new CanvasTexture(canvas);
}