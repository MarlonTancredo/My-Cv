import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  justify-content: center;
  justify-self: center;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
  }
`;

export const AsideDiv = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const CotentDiv = styled.div`
  margin: 10px;
`;
