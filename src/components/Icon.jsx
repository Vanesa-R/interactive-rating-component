import React from "react";

// Assets
import star from "../images/icon-star.svg";

// Styles
import styled from "styled-components";
import colors from "../styles/theming/colors";
import { motion } from "framer-motion";
import { childrenVariant } from "../styles/animations/Animations";


const CSSIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    background-color: ${({theme}) => colors.blue80};

    & .icon__star {
        transform: scale(.8);
    }
`

const Icon = () => {
    return (
        <>
          <CSSIcon
            className="logo"
            as={motion.div}
            variants={childrenVariant}>

            <img src={star} className="icon__star" alt="Icon star" />

          </CSSIcon>
        </>
    )
}

export default Icon;