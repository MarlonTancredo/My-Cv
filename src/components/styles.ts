import styled from "styled-components";

//Colors
const colors = {
  black: "#000000",
  blue: "#1967d2",
  grey: "#808080",
  linkdedin: "#0072B1",
  LinkedinHover: "#0073b1dc",
  blackHover: "#000000bd",
  clearBlue: "#8ab4f8",
  clearGrey: "#c9d1d3",
};
const { black, blue, grey, linkdedin, LinkedinHover, blackHover, clearGrey } =
  colors;

export const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 6rem;
`;

export const imgCV = styled.img`
  width: 200px;
  border-radius: 200px;
  margin-bottom: 20px;
`;

export const Name = styled.div`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const Role = styled.div`
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
    color: ${black};
  }
`;

export const SocialMidea = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;

export const GitHub = styled.div`
  svg {
    width: 40px;
    height: 40px;
    margin-right: 20px;
    color: ${black};
  }
  & :hover {
    color: ${blackHover};
    cursor: pointer;
  }
`;

export const Linkedin = styled.div`
  svg {
    width: 40px;
    height: 40px;
    margin-right: 20px;
    color: ${linkdedin};
  }
  & :hover {
    color: ${LinkedinHover};
    cursor: pointer;
  }
`;

//Content styles.
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 35rem;
  max-width: 35rem;
  margin-bottom: 1.5rem;
  border-radius: 0.3rem;
  box-shadow: 0 6px 20px 0 ${colors.grey};
  @media only screen and (max-width: 580px) {
    min-width: 34rem;
  }
  @media only screen and (max-width: 555px) {
    min-width: 32rem;
  }
  @media only screen and (max-width: 530px) {
    min-width: 30rem;
  }
  @media only screen and (max-width: 490px) {
    min-width: 28rem;
  }
  @media only screen and (max-width: 460px) {
    min-width: 26.5rem;
  }
  @media only screen and (max-width: 450px) {
    min-width: 25rem;
  }
  @media only screen and (max-width: 412px) {
    min-width: 23rem;
  }
  @media only screen and (max-width: 380px) {
    min-width: 21.5rem;
  }
  @media only screen and (max-width: 355px) {
    min-width: 19.5rem;
  }
  @media only screen and (max-width: 320px) {
    min-width: 17rem;
  }
  @media only screen and (max-width: 285px) {
    min-width: auto;
  }
`;

export const SectionTitle = styled.h3`
  color: ${grey};
`;

export const Paragraph = styled.div`
  text-align: justify;
  justify-content: center;
  padding: 1rem;
`;

export const Line = styled.div`
  border-bottom: 1px solid ${clearGrey};
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  margin-top: 0;
`;

export const ItemList = styled.li`
  margin-top: 0;
  list-style: square;
`;

export const Link = styled.a`
  align-self: center;
  text-decoration: transparent;
  color: ${blue};
  &:hover {
    text-decoration: underline;
  }
`;

export const SkillLanguages = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const Language = styled.div`
  font-weight: bold;
  color: ${grey};
`;

export const Skill = styled.div`
  font-weight: bold;
  color: ${black};
`;
