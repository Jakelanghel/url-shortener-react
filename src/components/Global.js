import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        /* PRIMARY */
        --cyan: hsl(180, 66%, 49%);
        --dark-violet: hsl(257, 27%, 26%);
        /* SECONDARY  */
        --red: hsl(0, 87%, 67%);
        /* NEUTRAL  */
        --gray: hsl(0, 0%, 75%);
        --grayish-violet: hsl(257, 7%, 63%);
        --very-dark-blue: hsl(255, 11%, 22%);
        --very-dark-violet: hsl(260, 8%, 14%);
        --white: hsl(0, 0%, 100%);
        --light-gray: rgba(240, 241, 246, 1);

    }

    html {
        overflow-x: hidden;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        font-size: 18px;
        text-align: center;
        

    }
     p {
        max-width: 325px;
        margin: 0 auto;
        color: var(--grayish-violet);

     }


    .side-padding {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .title-margin {
        margin: 1rem 0;
    }

   
`;