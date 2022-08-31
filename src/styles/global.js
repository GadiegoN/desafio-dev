import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        background: #0F0F0F;
        color: #F0F0F0;
        font-family: Arial, Helvetica, sans-serif;
    }
` 