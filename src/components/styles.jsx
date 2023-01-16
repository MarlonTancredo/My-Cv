import styled from "styled-components";

//Colors
const black = {
  color: "#000000",
};

const grey = {
  color: "#808080",
};

//Any Component
export const Paragraph = styled.p`
  margin-bottom: 0px;
`;

export const Section = styled.h3`
  color: ${grey.color};
`;

//Aside Component styles
export const AsideContainer = styled.div`
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
  color: ${grey.color};
`;

export const Information = styled.div`
  margin-top: 30px;
  text-align: center;
   {
    svg {
      position: relative;
      top: 3.5px;
      margin-right: 8px;
      color: ${grey.color};
    }
  }
`;

export const SocialMidea = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
   {
    svg {
      width: 40px;
      height: 40px;
      margin-right: 20px;
      color: ${grey.color};
    }
  }
  & :hover {
    color: ${black.color};
    cursor: pointer;
  }
`;

//Content Component styles.
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul``;

export const ItemList = styled.li``;

export const Link = styled.a`
  text-decoration: none;
  color: ${grey.color};
  &:hover {
    color: ${black.color};
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
  color: ${grey.color};
`;

export const Skill = styled.div`
  font-weight: bold;
  color: ${black.color};
`;
