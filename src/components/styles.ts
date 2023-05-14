import styled from "styled-components";

//Colors
const colors = {
  black: "#000000",
  grey: "#808080",
};
const { black, grey } = colors;

export const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6rem;
`;

export const imgCV = styled.img`
  width: 200px;
  border-radius: 200px;
  margin-top: 20px;
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

//Content styles.
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  min-width: 35rem;
  margin-bottom: 0.5rem;
  border-radius: 0.3rem;
  box-shadow: 0 6px 20px 0 ${colors.grey};
  @media only screen and (max-width: 600px) {
    min-width: 96%;
  }
`;

export const SectionTitle = styled.h3`
  color: ${grey};
`;

export const Paragraph = styled.div`
  margin-bottom: 20px;
  justify-content: center;
`;

export const List = styled.ul``;

export const ItemList = styled.li``;

export const Link = styled.a`
  text-decoration: transparent;
  color: ${grey};
  &:hover {
    text-decoration: underline;
  }
`;

export const SkillLanguages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  text-align: center;
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
