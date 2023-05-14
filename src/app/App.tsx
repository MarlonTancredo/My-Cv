import * as S from "./styles";
import { Fade } from "react-awesome-reveal";

//Importing aside and content component.
import Aside from "../components/Aside";
import Content from "../components/Content";

function App() {
  return (
    <S.AppContainer>
      <S.AsideDiv>
        <Fade direction="left">
          <Aside />
        </Fade>
      </S.AsideDiv>
      <S.CotentDiv>
        <Content />
      </S.CotentDiv>
    </S.AppContainer>
  );
}

export default App;
