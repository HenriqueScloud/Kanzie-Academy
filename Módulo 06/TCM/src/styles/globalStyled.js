import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    // body
    body{
        font: var(--font-body);
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    


    :root {
        --color-primary: #27AE60;
        --color-secondary: #EB5757;

        //gray scale palete
        
        --gray-600:#333333;
        --gray-300:#828282;
        --gray-100:#E0E0E0;
        --gray-0:#F5F5F5;
    }


    .font_title_1{
        font-weight: bold;
        font-size: 26px;
    }
    .font_title_2{
        font-weight: bold;
        font-size: 22px;
    }
    .font_title_3{
        font-weight: bold;
        font-size: 18px;
    }
    .font_headline{
        font-weight: regular;
        font-size: 14px;
    }
    .font_body{
        font-weight: normal;
        font-size: 14px;
        font-family: "Inter", sans-serif;
    }
    .font_body600{
        font-weight: 600;
        font-size: 14px;
    }
    .font_caption{
        font-weight: regular;
        font-size: 12px;
    }


    .btn_md{
        max-width: 130px;
        height: 60px;
        background-color: #BDBDBD;
        border-radius: 8px;
        padding:0 20px;
        border: none;
        color: #FFFFFF;
        font-weight: bold;
    }
    .btn_sm{
        max-width: 130px;
        height: 40px;
        background-color: #BDBDBD;
        border-radius: 8px;
        border: none;
        padding:0 20px;
        color: #FFFFFF;
        font-weight: bold;
    }

    .btn_md,.btn_sm{
        &:hover{
            cursor: pointer;
            background-color: var(--color-primary)
        }
    }
`;