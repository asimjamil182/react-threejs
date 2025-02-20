import React, { useEffect, useState } from 'react'
import { colors,  logos, textures } from '../config/constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Highlights, Image, Palette, PlusCircle } from 'react-bootstrap-icons'
const editertab=[
    {name:'Color',icon:<Palette size={25}/>},
    {name:'Texture',icon:<Highlights size={25}/>},
    {name:'Logo',icon:<Image size={25}/>}
  ]

const Customizer = ({ activeColor, activeTexture, activeLogo }) => {
    const [currentTab, setCurrentTab] = useState('Color');
    const [currentColor, setCurrentColor] = useState('#ffffff');
    const [currentTexture, setCurrentTexture] = useState(textures[0].textureUrl);
    const [currentLogo, setCurrentLogo] = useState(logos[0].logoUrl);

    const [currentCustomLogo,setCurrentCustomLogo]=useState('');
    const [currentCustomTexture,setCurrentCustomTexture]=useState('');



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
        content = <Logo defaultLogo={currentLogo} activeLogo={(logo)=>setCurrentLogo(logo)} />
    } else if (currentTab == 'Texture') {
        content = <Texture defaultTexture={currentTexture} activeTexture={(texture)=>setCurrentTexture(texture)} />
    } else {
        content = <Color defaultColor={currentColor} activeColor={(color)=>setCurrentColor(color)} />
    }

    return (
        <div>
            
            <div className="h-[6rem] bg-gray-300 overflow-hidden relative border flex flex-col justify-end items-center">
                <div id='color' className='flex items-center justify-center'>
                    {content}
                </div>
                <EditerTab activeTab={(tab) => setCurrentTab(tab)} />
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
        <div className='flex justify-center'>
            <div className='flex justify-center'>
            {editertab.map((tab, index) => (
                <button
                    className={`p-2 flex gap-2 transition-all duration-300 ${selectedTag === tab.name ? `bg-white` : `bg-gray-200`}`}
                    key={index}
                    onClick={() => setSelectedTag(tab.name)}
                >{tab.icon} <span className='hidden md:block'>{tab.name}</span></button>
            ))}
        </div>
        </div>
    );
}

function Color({defaultColor=colors[0].code, activeColor }) {
    const [selectedColor, setSelectedColor] = useState(defaultColor);
    useEffect(() => {
        activeColor(selectedColor);
    }, [selectedColor])

    return (
        <div className='flex gap-2 items-center justify-center bg-white p-2'>
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
    const [customTexture,setCustomTexture]=useState(defaultTexture==textures[0].textureUrl?'':defaultTexture);
    useEffect(() => {
        activeTexture(selectedTexture);
    }, [selectedTexture])

    const customLogoHandler=(e)=>{
        const url=(URL.createObjectURL(e.target.files[0]));
        console.log(url);
        setCustomTexture(url);
        setSelectedTexture(url);
    }
    return (
        <div className='flex gap-2 items-center justify-center bg-white p-2'>
            {textures.map((texture, index) => (
                <img
                    key={index}
                    src={texture.textureUrl}
                    onClick={() => setSelectedTexture(texture.textureUrl)}
                    className={`w-6 h-6 rounded-full shadow ${selectedTexture === texture.textureUrl ? `border-2 border-black` : ``}`}
                    title={texture.name}
                />
            ))}
            {customTexture && <img
                src={customTexture}
                onClick={() => setCustomTexture(customTexture)}
                className={`w-6 h-6 rounded-full shadow ${selectedTexture === customTexture ? `border-2 border-black` : ``}`}
                title={`Custom Logo`}
            />}
            
            <PlusCircle size={24} onClick={()=>{document.querySelector('#customTextureSelector').click()}}/>
            <input type="file" accept='image/' onChange={customLogoHandler} className='hidden' name="customlogo" id="customTextureSelector" />
        </div>

    );
}
function Logo({ defaultLogo=logos[0].logoUrl,activeLogo }) {
    const [selectedLogo, setSelectedLogo] = useState(defaultLogo);
    const [customLogo,setCustomLogos]=useState(defaultLogo==logos[0].logoUrl?'':defaultLogo);
    useEffect(() => {
        activeLogo(selectedLogo);
    }, [selectedLogo])

    const customLogoHandler=(e)=>{
        const url=(URL.createObjectURL(e.target.files[0]));
        setCustomLogos(url);
        setSelectedLogo(url);
    }
    return (
        <div className='flex gap-2 items-center justify-center bg-white p-2'>
            {logos.map((logo, index) => (
                <img
                    key={index}
                    src={logo.logoUrl}
                    onClick={() => setSelectedLogo(logo.logoUrl)}
                    className={`w-6 h-6 rounded-full shadow ${selectedLogo === logo.logoUrl ? `border-2 border-black` : ``}`}
                    title={logo.name}
                />
            ))}
            {customLogo && <img
                src={customLogo}
                onClick={() => setSelectedLogo(customLogo)}
                className={`w-6 h-6 rounded-full shadow ${selectedLogo === customLogo ? `border-2 border-black` : ``}`}
                title={`Custom Logo`}
            />}
            
            <PlusCircle size={24} onClick={()=>{document.querySelector('#customlogoSelector').click()}}/>
            <input type="file" accept='image/' onChange={customLogoHandler} className='hidden' name="customlogo" id="customlogoSelector" />
        </div>

    );
}