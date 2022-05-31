import React, { useState } from "react";
import { useTranslation } from 'react-i18next';


// Components
import Card from "./components/Card";
import Language from "./components/Language";


// Styles
import { ThemeProvider, createGlobalStyle } from "styled-components";
import colors from "./styles/theming/colors";
import fonts from "./styles/theming/fonts";


const GlobalStyle = createGlobalStyle`
  html, body, #root, .App {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    font-family: ${({ theme}) => fonts.primary};
    font-size: 15px;
    padding-left: 1.5em;
    padding-right: 1.5em;
    background-color: ${({theme}) => colors.blue90};


    & .ratings {
      display: flex;
      justify-content: space-between;
    }
    
  }

`

const App = () => {
  
  // Mostrar container de ratings
  const [showRatings, setShowRatings] = useState(true);

  // Valor de rating
  const [value, setValue] = useState();

  // Traducciones
  const [ t, i18n ] = useTranslation(["text"]);

  return (
    <>
    <GlobalStyle />
      <ThemeProvider theme={ colors }>
      <ThemeProvider theme={ fonts }>

        <Language
          t={t}
          i18n={i18n}/>

        <Card
          showRatings={showRatings}
          setShowRatings={setShowRatings}
          value={value}
          setValue={setValue}
          t={t}
          i18n={t}/>

      </ThemeProvider>
      </ThemeProvider>
   </>
  );
}

export default App;