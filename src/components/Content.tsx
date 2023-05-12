import * as S from "./styles";

const mySkills = {
  useall: {
    useallStartDate: "11/2018",
    useallEndDate: "10/2019",
    technologies: [
      { skill: "HTML" },
      { skill: "CSS" },
      { skill: "SASS" },
      { skill: "Javascript" },
    ],
  },
  hyperionDev: {
    hyperionStartDate: "11/2022",
    hyperionEndDate: "04/2023",
    hyperionSkills: [
      { skill: "Algorithms and programming logic with JAVASCRIPT" },
      { skill: "Oriented objects programming with Java Script." },
      { skill: "HTML and CSS" },
      { skill: "Version control with GIT Basics." },
      { skill: "Node JS." },
      { skill: "Bootstrap." },
      { skill: "Redux." },
      { skill: "React JS." },
    ],
  },
};
const { useall } = mySkills;
const { useallStartDate, useallEndDate, technologies } = useall;

const { hyperionDev } = mySkills;
const { hyperionStartDate, hyperionEndDate, hyperionSkills } = hyperionDev;

//Content component.
const Content = () => {
  return (
    <S.ContentContainer>
      <S.Section>WORK EXPERIENCE</S.Section>
      {/* Useall section */}
      <strong>{`${useallStartDate} - ${useallEndDate}`}</strong>
      Criciuma, Brazil
      <h4>Front-end developer - Useall</h4>
      <S.Paragraph>
        At Useall i had my first job as Front-end developer my main goals were:
      </S.Paragraph>
      <S.List>
        <S.ItemList>Develop user-friendly interfaces.</S.ItemList>
        <S.ItemList>
          Transform the specific resource requirements for the system.
        </S.ItemList>
        <S.ItemList>
          Keep the code well organized by following good clean code practices.
        </S.ItemList>
        <S.ItemList>
          Maintain code with good automated test coverage.
        </S.ItemList>
      </S.List>
      <S.Paragraph>Main technologies used:</S.Paragraph>
      {technologies.map((skills: any, index: number) => {
        return <S.ItemList key={index}>{skills.skill}</S.ItemList>;
      })}
      <S.Section>EDUCATION AND TRAINING</S.Section>
      {/* HyperionDev section */}
      <strong>{`${hyperionStartDate} - ${hyperionEndDate}`}</strong>
      London, UK
      <strong>Web Developer - HyperionDev</strong>
      <S.Paragraph>
        <strong>Portfolio: </strong>
        <S.Link
          href="https://www.hyperiondev.com/portfolio/103916/"
          target="_blank"
        >
          www.hyperiondev.com
        </S.Link>
      </S.Paragraph>
      <S.List>
        {hyperionSkills.map((skills: { skill: string }, index: number) => {
          return <S.ItemList key={index}>{skills.skill}</S.ItemList>;
        })}
      </S.List>
      <strong>02/2014 - 12/2015 </strong>
      Criciúma, Brazil
      <strong>Technical course - SENAI</strong>
      <S.List>
        <S.ItemList>Algorithms </S.ItemList>
        <S.ItemList>SQL database</S.ItemList>
        <S.ItemList>
          Website development with HTML, CSS and JavaScript
        </S.ItemList>
      </S.List>
      <S.Section>LANGUAGE SKILLS</S.Section>
      <p>MOTHER TONGUE(S): Portuguese </p>
      <h4>Other language(s): English</h4>
      <S.LanguagesSection>
        <S.Language>
          Listening
          <S.Skill>B1</S.Skill>
        </S.Language>
        <S.Language>
          Reading
          <S.Skill>B1</S.Skill>
        </S.Language>
        <S.Language>
          Spoken production
          <S.Skill>B1</S.Skill>
        </S.Language>
        <S.Language>
          Spoken interaction
          <S.Skill>B1</S.Skill>
        </S.Language>
        <S.Language>
          Writing
          <S.Skill>B1</S.Skill>
        </S.Language>
      </S.LanguagesSection>
      <h4>Other language(s): Italian</h4>
      <S.LanguagesSection>
        <S.Language>
          Listening
          <S.Skill>C1</S.Skill>
        </S.Language>
        <S.Language>
          Reading
          <S.Skill>C1</S.Skill>
        </S.Language>
        <S.Language>
          Spoken production
          <S.Skill>C1</S.Skill>
        </S.Language>
        <S.Language>
          Spoken interaction
          <S.Skill>C1</S.Skill>
        </S.Language>
        <S.Language>
          Writing
          <S.Skill>C1</S.Skill>
        </S.Language>
      </S.LanguagesSection>
    </S.ContentContainer>
  );
};

export default Content;
