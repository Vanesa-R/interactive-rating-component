import React from "react";


// Styles
import styled from "styled-components";
import colors from "../styles/theming/colors";
import device from "../styles/responsive/breakpoints";


const CSSLanguage = styled.section`
    position: absolute;
    top: 2em;
    right: 1.5em;
    & .select__language {
        padding: 0;
        color: ${({ theme }) => colors.grey10};
        background: 0;
        outline: 0;
        border: 0;

        ${device.laptop`
            cursor: pointer;
            transition: 450ms ease color, 450ms ease background-color;
            &:hover {
                color: white;
            };
        `}
    }
    
    & .select__language:first-of-type {
        padding-right: .5em;
        border-right: 1px solid ${({ theme }) => colors.grey20};
    }
    
    & .select__language:last-of-type {
        padding-left: .5em;
    }
`


const Language = ({ t, i18n}) => {

    const changeToEnglish = () => {
        i18n.changeLanguage('en');
    }

    const changeToSpanish = () => {
        i18n.changeLanguage('es');
    }

    return (
        <>
        <CSSLanguage className="languages">
            <button className="select__language" onClick={changeToEnglish}>EN</button>
            <button className="select__language" onClick={changeToSpanish}>ES</button>
        </CSSLanguage>

        </>
    );
}

export default Language;