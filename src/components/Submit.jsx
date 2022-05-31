import React from "react";

// Estilos
import styled from "styled-components";
import { motion } from "framer-motion";
import { childrenVariant } from "../styles/animations/Animations";


const CSSSubmit = styled.button`
  width: 100%;
  height: 3em;
  margin-top: 2em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .15em;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.orange};
  border-radius: 2em;
  outline: none;
  border: none;
  transition: 450ms ease color, 450ms ease background-color;

  &:hover {
      color: ${({ theme }) => theme.orange};
      background-color: ${({ theme }) => theme.white};
      cursor: pointer;
      transition: 450ms ease color, 450ms ease background-color;
  }

`;


const Submit = ({ disabled, setShowRatings, t, i18n }) => {
   
    return (
        <>
            <CSSSubmit 
                className="submit__btn"
                as={motion.button}
                variants={childrenVariant}
                disabled={disabled}
                onClick={() => {
                    setShowRatings(false)}}>
                   {t("card.submit")}
            </CSSSubmit>
        </>
    )
}

export default Submit;