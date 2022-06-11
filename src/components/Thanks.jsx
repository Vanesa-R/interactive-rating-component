import React from "react";

// Assets
import thanks from "../images/illustration-thank-you.svg";
import { IoReload } from "react-icons/io5";

// Styles
import styled from "styled-components";
import colors from "../styles/theming/colors";
import { motion } from "framer-motion";
import { cardVariant, childrenVariant } from "../styles/animations/Animations";


const CSSThanks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    font-size: 14px;

    & .value--selected {
        padding: .5em 1em;
        color: ${({ theme }) => theme.orange};
        background-color: ${({ theme }) => theme.blue80};
        border-radius: 1.5em;
        filter: opacity(.8);
    }

    & .pretitle {
        color: ${({ theme }) => theme.white};
    }

    & .value--selected,
    & .pretitle,
    & .rating__paragraph,
    & .icon__reload {
        margin-top: 2em;
        margin-bottom: 0;
    }

    & .icon__reload {
        color: ${({ theme }) => theme.grey20};
        cursor: pointer;
        transition: 450ms ease color;

        &:hover {
         color: ${({theme}) => colors.orange};
        }

    }
`


const Thanks = ({ value, t, setShowRatings, setDisabled, setValue }) => {
    
    return (
        <>
            <CSSThanks
                className="thanks"
                as={motion.div}
                variants={cardVariant}
                initial="hidden"
                animate="visible">

                <motion.img
                    variants={childrenVariant}
                    src={thanks} 
                    alt="¡Thank you!" />        

                <motion.p
                    className="value--selected"
                    variants={childrenVariant}>    
                    {t("thanks.valueSelected", { value })}
                </motion.p>

                <motion.h2
                    className="pretitle"
                    variants={childrenVariant}>
                    {t("thanks.pretitle")}
                </motion.h2>

                <motion.p 
                    className="rating__paragraph"
                    variants={childrenVariant}>
                    {t("thanks.paragraph")}
                </motion.p>

                <IoReload 
                    className="icon__reload"
                    as={motion.div}
                    variants={childrenVariant}
                    onClick={()=> {
                        window.location.reload();
                    }}>
                </IoReload>


            </CSSThanks>
        </>
    )
}


export default Thanks;
