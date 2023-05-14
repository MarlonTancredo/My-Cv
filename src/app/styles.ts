import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
  }
`;

export const AsideDiv = styled.div`
  margin-right: 5rem;
  margin-left: 5rem;
`;

export const CotentDiv = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;
