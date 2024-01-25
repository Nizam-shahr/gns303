import { createGlobalStyle } from "styled-components";

const BaseStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&family=Lato:wght@300;400;700&display=swap');


/*
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*, *::before, *::after {
  box-sizing: border-box;
}

a{
  text-decoration: none;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'DM Sans', sans-serif;
  /* background-color: #F4F8FE; */
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#__next {
  isolation: isolate;
}

/* overwrite antd modal wrapper styles */
.ant-modal-mask {
    background: rgba(69, 91, 123, 0.8);
    backdrop-filter: blur(2px);
  }

  body {
    width: 100% !important;
    /* overflow: none !important; */
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  /* react-phone-input */
  .phone-input {
    width: 100% !important;
    height: 45px !important;
  }

  .phone-input .special-label {
    display: none;
  }

  /* antd select input  */
  .ant-select-dropdown{
    width: 250px !important;
  }

`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
  </>
);

export default GlobalStyles;
