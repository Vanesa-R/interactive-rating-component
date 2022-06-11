import React from "react";

// Estilos
import styled from "styled-components";
import device from "../styles/responsive/breakpoints";
import colors from "../styles/theming/colors";
import { motion } from "framer-motion";
import { itemVariant } from "../styles/animations/Animations";


const CSSButton = styled.button`
  width: 3em;
  height: 3em;
  font-weight: 600;
  color: ${({ theme }) => colors.grey20};
  background-color: ${({theme}) => colors.blue80};
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: none;
  transition: 450ms ease color, 450ms ease background-color;

  &.rating__btn--selected {
    color: ${({ theme }) => colors.white};
    background-color: ${({theme}) => colors.grey20};
  }



  
  ${device.laptop`
    transition: 450ms ease color, 450ms ease background-color;
    &:hover {
      color: white;
      background-color: orange;
      cursor: pointer;
    };
  `};

`;


const Button = ({value, setValue, setDisabled }) => {

  return (
    <>
        
        <motion.div
          className="ratings">
          {[1, 2, 3, 4, 5].map((rating) => (
          
            <CSSButton
              as={motion.button}
              variants={itemVariant}
              type="button"
              className={rating === value ? "rating__btn rating__btn--selected" : "rating__btn"}
              key={rating}
              value={rating}
              onClick={() => {
                setValue(rating)
                setDisabled(false)
                }}>
                {rating}
            </CSSButton>

          ))}
        </motion.div>

    </>
  )
}

export default Button;