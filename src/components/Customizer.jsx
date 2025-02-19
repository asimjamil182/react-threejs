import React, { useEffect, useState } from 'react'
import { colors, editertab, logos, textures } from '../config/constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Customizer = ({ activeColor, activeTexture, activeLogo }) => {
    const [currentTab, setCurrentTab] = useState('Color');
    const [currentColor, setCurrentColor] = useState('#ffffff');
    const [currentTexture, setCurrentTexture] = useState('');
    const [currentLogo, setCurrentLogo] = useState('/react.png');


    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        document.querySelector('#color').style.bottom = 0;
        document.querySelector('#color').style.opacity = 0.5;
        gsap.to('#color', { bottom: 12, opacity: 1, duration: 1 })
    }, [currentTab]);

    useEffect(() => {
        activeColor(currentColor);
        activeLogo(currentLogo);
        activeTexture(currentTexture);
    }, [currentColor, currentLogo, currentTexture]);

    let content;

    if (currentTab == 'Logo') {
        content = <Logo defaultLogo={currentLogo} activeLogo={(logo)=>setCurrentLogo(logo)} />
    } else if (currentTab == 'Texture') {
        content = <Texture defaultTexture={currentTexture} activeTexture={(texture)=>setCurrentTexture(texture)} />
    } else {
        content = <Color defaultColor={currentColor} activeColor={(color)=>setCurrentColor(color)} />
    }

    useEffect(() => {

    }, [currentTab])
    return (
        <div>
            <EditerTab activeTab={(tab) => setCurrentTab(tab)} />
            <div id='color' className=" absolute left-0 right-0 bottom-0 p-4 opacity-50">
                <div className='flex items-center justify-center w-full'>
                    {/* {currentTab === 'Color' ? <Color activeColor={(color) => setCurrentColor(color)} /> : <Logo activeLogo={(logo) => setCurrentLogo(logo)} />} */}
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
        <div className='absolute left-0 top-0 h-screen flex flex-col justify-center p-4 gap-2'>
            {editertab.map((tab, index) => (
                <button
                    className={`border p-2 ${selectedTag === tab.name ? `bg-white` : ``}`}
                    key={index}
                    onClick={() => setSelectedTag(tab.name)}
                >{tab.name}</button>
            ))}
        </div>
    );
}

function Color({defaultColor=colors[0].code, activeColor }) {
    const [selectedColor, setSelectedColor] = useState(defaultColor);
    useEffect(() => {
        activeColor(selectedColor);
    }, [selectedColor])

    return (
        <div className='flex shadow-md gap-2 items-center justify-center bg-[#ffffff8f] p-2 rounded-full'>
            {colors.map((color, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedColor(color.code)}
                    className={`w-6 h-6 rounded-full shadow ${selectedColor === color.code ? `border-2 border-black` : ``}`}
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                />
            ))}
        </div>
    );
}

function Texture({defaultTexture=textures[0].textureUrl, activeTexture }) {
    const [selectedTexture, setSelectedTexture] = useState(defaultTexture);
    useEffect(() => {
        activeTexture(selectedTexture);
    }, [selectedTexture])
    return (
        <div className='flex shadow-md gap-2 items-center justify-center bg-[#ffffff8f] p-2 rounded-full'>
            {textures.map((texture, index) => (
                <img
                    key={index}
                    src={texture.textureUrl}
                    onClick={() => setSelectedTexture(texture.textureUrl)}
                    className={`w-6 h-6 rounded-full shadow ${selectedTexture === texture.textureUrl ? `border-2 border-black` : ``}`}
                    title={texture.name}
                />
            ))}
        </div>

    );
}
function Logo({ defaultLogo=logos[0].logoUrl,activeLogo }) {
    const [selectedLogo, setSelectedLogo] = useState(defaultLogo);
    useEffect(() => {
        activeLogo(selectedLogo);
    }, [selectedLogo])
    return (
        <div className='flex shadow-md gap-2 items-center justify-center bg-[#ffffff8f] p-2 rounded-full'>
            {logos.map((logo, index) => (
                <img
                    key={index}
                    src={logo.logoUrl}
                    onClick={() => setSelectedLogo(logo.logoUrl)}
                    className={`w-6 h-6 rounded-full shadow ${selectedLogo === logo.logoUrl ? `border-2 border-black` : ``}`}
                    title={logo.name}
                />
            ))}
        </div>

    );
}