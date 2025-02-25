import React, { useEffect, useState } from 'react'
import { colors, defalutImages, defalutFonts } from '../config/constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Fonts, Highlights, Image, ImageFill, LayersFill, Palette, PlusCircle, PlusSquare } from 'react-bootstrap-icons'
import ImageUploadBox from './ImageUploadBox'
import Layer from './Layer'
const editertab = [
    { name: 'Color', icon: <Palette size={25} /> },
    { name: 'Image', icon: <ImageFill size={25} /> },
    { name: 'Text', icon: <Fonts size={25} /> },
    { name: 'Layers', icon: <LayersFill size={25} /> },
]

const Customizer = ({ activeColor, activeImage }) => {
    const [currentTab, setCurrentTab] = useState('Color');
    const [currentColor, setCurrentColor] = useState('#ffffff');
    const [currentImage, setCurrentImage] = useState(defalutImages[0].imageUrl);
    const [currentText, setCurrentText] = useState('Text');

    const [currentCustomLogo, setCurrentCustomLogo] = useState('');
    const [currentCustomTexture, setCurrentCustomTexture] = useState('');


    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        // document.querySelector('#color').style.transform = 'translateY(10px)';
        // document.querySelector('#color').style.opacity = 0.5;
        // gsap.to('#color', { translateY: 0, opacity: 1, duration: 1 })
    }, [currentTab]);

    useEffect(() => {
        activeColor(currentColor);
        activeImage(currentImage);

    }, [currentColor, currentText, currentImage]);

    let content;

    if (currentTab == 'Text') {
        content = <TextAttibutes activeText={(text) => setCurrentText(text)} />
    } else if (currentTab == 'Image') {
        content = <ImageAttribute defaultImage={currentImage} activeImage={(image) => setCurrentImage(image)} />
    } else if (currentTab == 'Layers') {
        content = <Layer />
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
    const [selectedTag, setSelectedTag] = useState('Color');
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

function ImageAttribute({ defaultImage = defalutImages[0].imageUrl, activeImage }) {
    const [selectedImage, setSelectedImage] = useState(defaultImage);
    const [customImage, setCustomImage] = useState(defaultImage == defalutImages[0].imageUrl ? '' : defaultImage);
    useEffect(() => {
        activeImage(selectedImage);
    }, [selectedImage])

    const customImageHandler = (e) => {
        const url = (URL.createObjectURL(e.target.files[0]));
        setCustomImage(url);
        setSelectedImage(url);
    }

    return (
        <>
            <div className='font-semibold py-2'>Image</div>

            <div className='flex gap-2 flex-wrap'>

                <ImageUploadBox onImageUpload={customImageHandler} />
                {customImage && <img
                    src={customImage}
                    onClick={() => setSelectedImage(customImage)}
                    className={`w-16 h-16 shadow cursor-pointer ${selectedImage === customImage ? `border-2 border-black` : ``}`}
                    title={`Custom Logo`}
                />}
            </div>
            <div className=' py-2 text-sm font-semibold border-b border-gray-400'>Default Images</div>
            <div className='flex gap-2 flex-wrap mt-2'>
                {defalutImages.map((texture, index) => (
                    <img
                        key={index}
                        src={texture.imageUrl}
                        onClick={() => setSelectedImage(texture.imageUrl)}
                        className={`w-16 h-16 shadow cursor-pointer ${selectedImage === texture.imageUrl ? `border-2 border-black` : ``}`}
                        title={texture.name}
                    />
                ))}
            </div>
        </>

    );
}
function TextAttibutes({ defaultText = defalutFonts[0].name, activeText }) {
    const [selectedText, setSelectedText] = useState(defaultText);
    useEffect(() => {
        activeText(selectedText);
    }, [selectedText])

    return (
        <>
            <div className='font-semibold py-2 border-b border-gray-300'>Text</div>
            <div className='flex gap-2 flex-wrap py-2'>
                {defalutFonts.map((font, index) => (
                    <div key={index} onClick={() => setSelectedText(font.name)} className={`font-semibold  bg-white p-3 border-2 cursor-pointer ${selectedText == font.name ? `border-black` : ''}`}>{font.name}</div>
                ))}

            </div>

        </>
    );
}