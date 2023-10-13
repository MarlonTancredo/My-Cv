import * as S from "./styles";

import Aside from "../components/Aside";
import Content from "../components/Content";

function App() {
    return (
        <S.AppContainer>
            <S.AsideDiv>
                <Aside />
            </S.AsideDiv>
            <S.CotentDiv>
                <Content />
            </S.CotentDiv>
        </S.AppContainer>
    );
}

export default App;
