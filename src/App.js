import MainWrapper from "./MainWrapper";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  #root {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle/>
            <MainWrapper/>
        </>
    );
}


export default App;