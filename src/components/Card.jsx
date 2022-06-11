import React, { useState } from "react";

// Components
import Icon from "./Icon";
import Button from "./Button";
import Thanks from "./Thanks";
import Submit from "./Submit";

// Styles
import styled, { ThemeProvider } from "styled-components";
import device from "../styles/responsive/breakpoints";
import colors from "../styles/theming/colors";
import { motion, AnimatePresence } from "framer-motion";
import { cardVariant, childrenVariant } from "../styles/animations/Animations";


const CSSCard = styled.section`
    width: 87%;
    min-height: 35vh;
    height: fit-content;
    padding: 1.5em;
    border-radius: .5em;
    background: linear-gradient(10deg, ${({ theme }) => colors.blue90}, ${({ theme }) => colors.blue80});
    & .rating__title {
        font-size: 1.6em;
        font-weight: 600;
        color: ${({ theme }) => colors.white};
    }

    & .rating__paragraph {
        margin-bottom: 2em;
        font-size: .95em;
        line-height: 1.5em;
        color: ${({ theme }) => colors.grey10};
    }

    ${device.laptop`
     width: 400px;
    `}

`;




const Card = ({ value, setValue, showRatings, setShowRatings, t, i18n }) => {


    // Habilitar boton submit
    const [disabled, setDisabled] = useState(true);

    
    return (
        <>
        <ThemeProvider theme={ colors }>

            <CSSCard
                className="rating__card"
                as={motion.section}
                variants={cardVariant}
                initial="hidden"
                animate="visible">

            <AnimatePresence exitBeforeEnter onExitComplete={() => setShowRatings(false)}>
                
                {showRatings && (

                <>
                    <Icon />
                    
                    <motion.h1
                        className="rating__title"
                        variants={childrenVariant}>
                        {t("card.title")}
                    </motion.h1>
                    
                    <motion.p
                        className="rating__paragraph"
                        variants={childrenVariant}>
                        {t("card.paragraph")}
                    </motion.p>
                    
                    <Button
                        value={value}
                        setValue={setValue}
                        disabled={disabled}
                        setDisabled={setDisabled} />
                    
                    <Submit
                        disabled={disabled}
                        setDisabled={setDisabled}
                        showRatings={showRatings}
                        setShowRatings={setShowRatings}
                        t={t}
                        i18n={i18n}/>
                </>
                )}


                {!showRatings && (
                    <>
                     <Thanks
                        value={value}
                        t={t}
                        i18n={i18n}
                        setShowRatings={setShowRatings}
                        setDisabled={setDisabled}
                        setValue={setValue}/>
                    </>
                )}


            </AnimatePresence>

            
            </CSSCard>


        </ThemeProvider>
        </>
    )
}

export default Card;