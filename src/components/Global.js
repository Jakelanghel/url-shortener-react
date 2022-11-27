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
        --nav-bg: rgba(58, 48, 83, 1);
        --black: rgba(0, 0, 0, 1);

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

    img {
        display: block;
    }

    h1, h2, h3 {
        color: var(--black);
    }
    
     p {
        max-width: 325px;
        margin: 0 auto;
        color: var(--grayish-violet);
     }

    .title-margin {
        margin: 1rem 0;
    }


    @media screen and (min-width: 900px){
        body {
            font-size: 18px;
            text-align: left;
        }

        p {
            max-width: 550px;
        }
        
    }
    

   
`;
