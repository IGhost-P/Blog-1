import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { media } from 'styles/theme';
import { fontDark, navDark, titleDark, fontWhite, titleWhite } from 'utils';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }

    a {
        text-decoration: none;
        color: inherit;
        
    }

    html{
        font-size: 11px;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback;
        ${media.tablet}{
            font-size: 10px;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    body {
        background-color: #fff;
        visibility: hidden;
    }

    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }
    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }

    body.dark {
        background-color: #232323;
    }

    body.dark header {
        background-color: #232323;
    }

    body.dark .toggle-button-switch {
        left: 23px;
    }

    body.dark .toggle-button-text {
        background-color: #fc3164;
    }

    body.dark .nav {
        color: ${navDark} 
    }

    body.dark section {
        color: ${fontDark}
    }

    body.dark .title {
        color: ${titleDark}
    }

    body.dark .description,
    body.dark .info {
        color: ${fontDark}
    }

    code {
        background: #FFFAE1;
        padding: 2px 5px;
        border-radius: 5px;
    }

    body.dark code {
        background: #282C35;
    }

    h1 {
        color: ${fontWhite};
        box-sizing: border-box;
        font-family: Montserrat,sans-serif;
        font-size: 3rem;
        font-weight: 900;
        line-height: 1.1;
        padding: 0;
        text-rendering: optimizelegibility;
        word-break: keep-all;
        word-wrap: break-word;
    }

    body.dark h1 {
        color: ${fontDark};
    }

    h2 {
        color: ${fontWhite};
        box-sizing: border-box;
        font-family: Montserrat,sans-serif;
        font-size: 2.2rem;
        font-weight: 900;
        line-height: 1.1;
        padding: 0;
        text-rendering: optimizelegibility;
        word-break: keep-all;
        word-wrap: break-word;
    }

    h2.detail {
        margin: 30px 0;
    }

    body.dark h2 {
        color: ${fontDark};
    }


    h3 {
        color: ${fontWhite};
        box-sizing: border-box;
        font-family: Montserrat,sans-serif;
        font-size: 1.9rem;
        font-weight: 900;
        line-height: 1.1;
        padding: 0;
        text-rendering: optimizelegibility;
        word-break: keep-all;
        word-wrap: break-word;
    }

    body.dark h3 {
        color: ${fontDark};
    }

    h3.detail {
        margin: 30px 0;
    }

        ul, ol {
        list-style: circle;
    }

    li {
        margin-left: 1rem;
    }

    p.detail {
        box-sizing: border-box;
        font-family: Merriweather,Georgia,serif;
        line-height: 28px;
        margin: 1.75rem 0 ;
        padding: 0;
        word-break: keep-all;
        word-wrap: break-word;
        font-size: 1.5rem;
    }

    blockquote {
        border-left: .32813rem solid ${titleWhite};
        box-sizing: border-box;
        
        font-family: Merriweather,Georgia,serif;
        font-size: 1.20112rem;
        font-style: italic;
        line-height: 1.75rem;
        margin: 0 1.75rem 1.75rem -1.75rem;
        opacity: .8;
        padding: 0 0 0 1.42188rem;
        word-break: keep-all;
        word-wrap: break-word;
    }

    body.dark blockquote {
        border-left: .32813rem solid ${titleDark};
    }

    div.detail-wrapper {
        margin-bottom: 20px;
    }

    ul.detail {
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }

    ul.detail li {
        font-size: 1.5rem;
        margin-bottom: 15px;
    }

    strong {
        box-sizing: border-box;
        font-family: Merriweather,Georgia,serif;
        font-weight: 700;
        line-height: 28px;
        word-break: keep-all;
        word-wrap: break-word;
    }
    .img-detail {
        width: 100%;
        margin:30px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body.dark .p-blog > a{
        color: ${titleDark}
    }

    body.dark .p-blog {
        color: rgba(255, 255, 255, 0.88);
    }

    body.dark footer {
        color: rgba(255, 255, 255, 0.88);
    }

    @media (max-width: 620px) { 

        body.dark .toggle-button-switch  {
            left: 20px;
        }
    }
`;
