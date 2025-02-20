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

export const textures=[
  {name:'react',textureUrl:'/react.png'},
  {name:'threejs',textureUrl:'/threejs.png'},
]
export const logos=[
  {name:'threejs',logoUrl:'/threejs.png'},
  {name:'react',logoUrl:'/react.png'},
]