import React, { useEffect, useState } from 'react'
import { colors, logos, textures } from '../config/constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Highlights, Image, Palette, PlusCircle, PlusSquare } from 'react-bootstrap-icons'
import ImageUploadBox from './ImageUploadBox'
const editertab = [
    { name: 'Color', icon: <Palette size={25} /> },
    { name: 'Texture', icon: <Highlights size={25} /> },
    { name: 'Logo', icon: <Image size={25} /> }
]

const Customizer = ({ activeColor, activeTexture, activeLogo }) => {
    const [currentTab, setCurrentTab] = useState('Color');
    const [currentColor, setCurrentColor] = useState('#ffffff');
    const [currentTexture, setCurrentTexture] = useState(textures[0].textureUrl);
    const [currentLogo, setCurrentLogo] = useState(logos[0].logoUrl);

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
        activeLogo(currentLogo);
        activeTexture(currentTexture);
    }, [currentColor, currentLogo, currentTexture]);

    let content;

    if (currentTab == 'Logo') {
        content = <Logo defaultLogo={currentLogo} activeLogo={(logo) => setCurrentLogo(logo)} />
    } else if (currentTab == 'Texture') {
        content = <Texture defaultTexture={currentTexture} activeTexture={(texture) => setCurrentTexture(texture)} />
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

function Texture({ defaultTexture = textures[0].textureUrl, activeTexture }) {
    const [selectedTexture, setSelectedTexture] = useState(defaultTexture);
    const [customTexture, setCustomTexture] = useState(defaultTexture == textures[0].textureUrl ? '' : defaultTexture);
    useEffect(() => {
        activeTexture(selectedTexture);
    }, [selectedTexture])

    const customTextureHandler = (e) => {
        const url = (URL.createObjectURL(e.target.files[0]));
        setCustomTexture(url);
        setSelectedTexture(url);
    }

    return (
        <>
            <div className='font-semibold py-2'>Textures</div>
            <div className='flex gap-2 flex-wrap'>
                {textures.map((texture, index) => (
                    <img
                        key={index}
                        src={texture.textureUrl}
                        onClick={() => setSelectedTexture(texture.textureUrl)}
                        className={`w-16 h-16 shadow cursor-pointer ${selectedTexture === texture.textureUrl ? `border-2 border-black` : ``}`}
                        title={texture.name}
                    />
                ))}
                {customTexture && <img
                    src={customTexture}
                    onClick={() => setSelectedTexture(customTexture)}
                    className={`w-16 h-16 shadow cursor-pointer ${selectedTexture === customTexture ? `border-2 border-black` : ``}`}
                    title={`Custom Logo`}
                />}
                <ImageUploadBox onImageUpload={customTextureHandler} />
            </div>
        </>

    );
}
function Logo({ defaultLogo = logos[0].logoUrl, activeLogo }) {
    const [selectedLogo, setSelectedLogo] = useState(defaultLogo);
    const [customLogo, setCustomLogos] = useState(defaultLogo == logos[0].logoUrl ? '' : defaultLogo);
    useEffect(() => {
        activeLogo(selectedLogo);
    }, [selectedLogo])

    const customLogoHandler = (e) => {
        const url = (URL.createObjectURL(e.target.files[0]));
        setCustomLogos(url);
        setSelectedLogo(url);
    }
    return (
        <>
            <div className='font-semibold py-2 border-b border-gray-300'>Logos</div>
            <div className='flex gap-2 flex-wrap py-2'>
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo.logoUrl}
                        onClick={() => setSelectedLogo(logo.logoUrl)}
                        className={`w-16 h-16 shadow cursor-pointer ${selectedLogo === logo.logoUrl ? `border-2 border-black` : ``}`}
                        title={logo.name}
                    />
                ))}
                {customLogo && <img
                    src={customLogo}
                    onClick={() => setSelectedLogo(customLogo)}
                    className={`w-16 h-16 shadow cursor-pointer ${selectedLogo === customLogo ? `border-2 border-black` : ``}`}
                    title={`Custom Logo`}
                />}
                <ImageUploadBox onImageUpload={customLogoHandler} />
            </div>
            <div className='font-semibold py-2 border-b border-gray-300'>Logo Settings</div>
            <div className='flex gap-2 flex-wrap py-2'>
                <label htmlFor="range">Size</label>
                <input type="range" name="range" id="" className='w-full' min={1} max={10} />
                <label htmlFor="range">Rotation</label>
                <input type="range" name="range" id="" className='w-full' min={1} max={10} />
            </div>
        </>
    );
}