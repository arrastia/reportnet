import { createGlobalStyle } from 'styled-components';

import { europe } from 'assets/wallpapers';

import { fade, zoom } from 'ui/_styles/keyframes';

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }: { theme: any }) => theme.colors.background};
    background: url(${europe}) no-repeat;
    background-size: cover;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    /* font-family: 'San Francisco'; */
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    align-items: center;
    background-position: top left;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    width: 100%;

    &::before {
      /* backdrop-filter: saturate(2); */
      background: ${({ theme }: { theme: any }) => theme.colors.backgroundEffect};
      transition: all 1s ease-in-out;
      content: '';
      height: 100vh;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      /* -webkit-backdrop-filter: saturate(2); */
    }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  /* #root {
    filter: blur(0);
    transition: filter 200ms ease-out;

    &.filter-layout {
      filter: blur(3px);
      transition: filter 200ms ease-in;
    }
  }   */

  .fade-enter {
    animation: ${fade.enter} both ease-in;
    animation-duration: 10s;
    opacity: 1;
    -webkit-animation: ${fade.enter} both ease-in;
  }

  .fade-leave {
    animation: ${fade.leave} both ease-out;
    animation-duration: 10s;
    opacity: 0;
    -webkit-animation: ${fade.leave} both ease-out;
  }

  .zoom-enter {
    animation: ${zoom.enter} both cubic-bezier(0.4, 0, 0, 1.5);
    animation-duration: 300ms;
    -webkit-animation: ${zoom.enter} both cubic-bezier(0.4, 0, 0, 1.5);
  }

  .zoom-leave {
    animation: ${zoom.leave} both;
    animation-duration: 300ms;
    -webkit-animation: ${zoom.leave} both;
  }

  ::-webkit-scrollbar {
    border-radius: 10px;
    height: 7px;
    width: 7px;
  }

    ::-webkit-scrollbar-thumb {
    background: var(--scrollbar-bg);
    border-radius: 10px;
  }
`;
