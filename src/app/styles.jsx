import styled from "styled-components";

export const AppContainer = styled.div`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1150px) {
    flex-direction: column;
  } ;
`;

export const AsideDiv = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const CotentDiv = styled.div`
  margin 10px;

`;
