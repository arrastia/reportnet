import { Gradient } from './@types/Theme.types';

export const dark = {
  colors: {
    background: '#282c34',
    blue: '#005e9c',
    borderColor: 'rgba(113 119 144 / 25%)',
    glass: 'rgba(16 18 27 / 40%)',
    glass70: 'rgba(16 18 27 / 70%)',
    gradient: (bgColor: Gradient) => `linear-gradient(${bgColor?.degrees}deg, ${bgColor?.firstColor}, ${bgColor?.secondColor})`,
    green: '#009490',
    primary: '#005e9c',
    text: '',
    themeColor: '#f9fafb',
    white: 'white',
    backgroundEffect: 'transparent'
  }
};

// --bg: white;
//   --theme-bg-color: rgba(16 18 27 / 40%);
//   --border-color: rgba(113 119 144 / 25%);
//   --theme-color: #f9fafb;
//   --inactive-color: rgb(113 119 144 / 78%);
//   --body-font: 'Poppins', sans-serif;
//   --hover-menu-bg: rgba(12 15 25 / 30%);
//   --content-title-color: #999ba5;
//   --content-bg: rgb(146 151 179 / 13%);
//   --button-inactive: rgb(249 250 251 / 55%);
//   --dropdown-bg: #21242d;
//   --dropdown-hover: rgb(42 46 60);
//   --popup-bg: rgb(22 25 37);
//   --search-bg: #14162b;
//   --overlay-bg: rgba(36, 39, 59, 0.3);
//   --scrollbar-bg: rgb(1 2 3 / 40%);
//   --large-title-bg: rgb(255 255 255 / 30%);
//   --dialog-bg: rgb(255 255 255 / 70%);

//   --background-effect: var(--transparent);
