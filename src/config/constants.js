import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};

export const colors = [

  { name: "White", code: "#ffffff" },
  { name: "Black", code: "#333333" },
  { name: "Dark Red", code: "#8b0000" },
  { name: "Dark Green", code: "#006400" },
  { name: "Dark Blue", code: "#00008b" },
  { name: "Dark Slate Gray", code: "#2f4f4f" },
  { name: "Dark Magenta", code: "#8b008b" },
  { name: "Dark Orange", code: "#ff8c00" },
  { name: "Dark Cyan", code: "#008b8b" },,
  { name: "Dark Goldenrod", code: "#b8860b" }
];

export const editertab=[
  {name:'Color',icon:''},
  {name:'Texture',icon:''},
  {name:'Logo',icon:''}
]

export const defalutImages=[
  {name:'textur 1',imageUrl:'/texture1.jpeg'},
  {name:'textur 2',imageUrl:'/texture2.jpg'},
  {name:'textur 3',imageUrl:'/texture3.jpg'},
  {name:'textur 4',imageUrl:'/texture4.jpg'},
  {name:'textur 5',imageUrl:'/texture5.jpg'},
]

export const defalutFonts=[
  {name:'Arial',fontUrl:'/threejs.png'},
  {name:'Roboto',fontUrl:'/react.png'},
]


export const shirtSides=[
  {name:'Front Side'},
  {name:'Back Side'},
  {name:'Left Side'},
  {name:'Right Side'},
]

export const shirtLayers=[
  {type:'Image',price:'16 AED',icon:'/react.png'},
  {type:'Text',price:'10 AED',icon:'/react.png'},
]