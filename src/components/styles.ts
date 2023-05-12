import styled, { keyframes } from "styled-components";

//Colors
const colors = {
  black: "#000000",
  grey: "#808080",
};
const { black, grey } = colors;

//Any Component
export const Paragraph = styled.p`
  margin-bottom: 0px;
`;

export const Section = styled.h3`
  color: ${grey};
`;

//Aside Component styles

const rightSlide = keyframes`
 from { 
  transform: translateX(400px);
 }
 to { 
  transform: translateX(0px);
 }
 `;

export const AsideContainer = styled.div`
  animation-name: ${rightSlide};
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  margin-right: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const imgCV = styled.img`
  width: 200px;
  border-radius: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const Role = styled.p`
  margin: 0;
  color: ${grey};
`;

export const Information = styled.div`
  margin-top: 30px;
  text-align: center;

  svg {
    position: relative;
    top: 3.5px;
    margin-right: 8px;
    color: ${grey};
  }
`;

export const SocialMidea = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  svg {
    width: 40px;
    height: 40px;
    margin-right: 20px;
    color: ${grey};
  }
  & :hover {
    color: ${black};
    cursor: pointer;
  }
`;

//Content Component styles.
const leftSlide = keyframes`
 from { 
  transform: translateX(-400px);
 }
 to { 
  transform: translateX(0px);
 }
 `;

export const ContentContainer = styled.div`
  animation-name: ${leftSlide};
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.ul``;

export const ItemList = styled.li``;

export const Link = styled.a`
  text-decoration: none;
  color: ${grey};
  &:hover {
    color: ${black};
  }
`;

export const LanguagesSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  text-align: center;
`;

export const Language = styled.div`
  font-weight: bold;
  color: ${grey};
`;

export const Skill = styled.div`
  font-weight: bold;
  color: ${black};
`;
