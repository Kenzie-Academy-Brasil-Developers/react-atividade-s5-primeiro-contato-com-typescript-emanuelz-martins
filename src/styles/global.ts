import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
        border: none;
        max-width: 100vw;
        min-height: 100vh;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    ol, li {
        list-style: none;
    }

    ol {
        padding: 0;
    }

    input, button {
        outline: none;
    }
`;
