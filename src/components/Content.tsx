import * as S from "./styles";

const useall = {
  useallStartDate: "11/2018",
  useallEndDate: "10/2019",
  useallCity: "Criciúma",
  useallCountry: "Brazil",
  useallJobDescription:
    " At Useall i had my first job as Front-end developer my main goals were:",
  myGoals: [
    { goal: "Develop user-friendly interfaces." },
    {
      goal: "Transform the specific resource requirements for the system.",
    },
    {
      goal: "Keep the code well organized by following good clean code practices.",
    },
    { goal: "Maintain code with good automated test coverage." },
  ],
  technologies: [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "SASS" },
    { skill: "Javascript" },
  ],
};
const {
  useallStartDate,
  useallEndDate,
  useallCity,
  useallCountry,
  useallJobDescription,
  technologies,
  myGoals,
} = useall;

const hyperionDev = {
  hyperionStartDate: "11/2022",
  hyperionEndDate: "04/2023",
  hyperionCity: "London",
  hyperionCountry: "England - UK",
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
};
const {
  hyperionStartDate,
  hyperionEndDate,
  hyperionCity,
  hyperionCountry,
  hyperionSkills,
} = hyperionDev;

//Content component.
const Content = () => {
  return (
    <S.ContentContainer>
      {/* Useall section */}
      <S.Section>
        <S.Paragraph>
          <S.SectionTitle>WORK EXPERIENCE</S.SectionTitle>
          <strong>{`${useallStartDate} - ${useallEndDate}`}</strong>
          {` - ${useallCity} ${useallCountry}`}
        </S.Paragraph>
        <S.Paragraph>
          <strong>Front-end developer - Useall</strong>
          <hr />
        </S.Paragraph>
        <S.Paragraph>{useallJobDescription}</S.Paragraph>
        {/* Goals */}
        <S.List>
          {myGoals.map((goals: { goal: string }, index: number) => {
            return <S.ItemList key={index}>{goals.goal}</S.ItemList>;
          })}
        </S.List>
        <S.Paragraph>
          <strong>Main technologies used:</strong>
        </S.Paragraph>
        {/* Technologies */}
        <S.List>
          {technologies.map((skills: { skill: string }, index: number) => {
            return <S.ItemList key={index}>{skills.skill}</S.ItemList>;
          })}
        </S.List>
      </S.Section>
      {/* Education and training */}
      <S.Section>
        {/* HyperionDev section */}
        <S.Paragraph>
          <S.SectionTitle>EDUCATION AND TRAINING</S.SectionTitle>
          <strong>{`${hyperionStartDate} - ${hyperionEndDate}`}</strong>
          {` - ${hyperionCity} ${hyperionCountry}`}
        </S.Paragraph>
        <S.Paragraph>
          <strong>Web Developer - HyperionDev</strong>
          <hr />
        </S.Paragraph>
        {/* Skills */}
        <S.List>
          {hyperionSkills.map((skills: { skill: string }, index: number) => {
            const { skill } = skills;
            return <S.ItemList key={index}>{skill}</S.ItemList>;
          })}
        </S.List>
        <S.Paragraph>
          <strong>Portfolio: </strong>
          <S.Link
            href="https://www.hyperiondev.com/portfolio/103916/"
            target="_blank"
          >
            www.hyperiondev.com
          </S.Link>
        </S.Paragraph>
        {/* Senai section */}
        <S.Paragraph>
          <hr />
          <strong>02/2014 - 12/2015 </strong> - Criciúma, Brazil
        </S.Paragraph>
        <S.Paragraph>
          <strong> Technical course - SENAI</strong>
          <hr />
        </S.Paragraph>
        <S.List>
          <S.ItemList>Algorithms </S.ItemList>
          <S.ItemList>SQL database</S.ItemList>
          <S.ItemList>
            Website development with HTML, CSS and JavaScript
          </S.ItemList>
        </S.List>
      </S.Section>
      <S.Section>
        <S.SectionTitle>LANGUAGE SKILLS</S.SectionTitle>
        <S.Paragraph>
          <strong> Mother tongue:</strong> Portuguese
          <hr />
        </S.Paragraph>
        <S.Paragraph>
          <strong> Other language:</strong> English
        </S.Paragraph>
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
        <S.Paragraph>
          <hr />
          <strong>Other language:</strong> Italian
        </S.Paragraph>
        <S.LanguagesSection>
          <S.Language>
            Listening
            <S.Skill>C2</S.Skill>
          </S.Language>
          <S.Language>
            Reading
            <S.Skill>C2</S.Skill>
          </S.Language>
          <S.Language>
            Spoken production
            <S.Skill>C2</S.Skill>
          </S.Language>
          <S.Language>
            Spoken interaction
            <S.Skill>C2</S.Skill>
          </S.Language>
          <S.Language>
            Writing
            <S.Skill>C2</S.Skill>
          </S.Language>
        </S.LanguagesSection>
      </S.Section>
    </S.ContentContainer>
  );
};

export default Content;
