import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #ff577f;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #3A3B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
}

*{
    box-sizing: border-box;
}

body{
    font-family: 'Inter', sans-serif;
    background: var(--grey-4);
}
`;
