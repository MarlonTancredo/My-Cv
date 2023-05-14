import * as S from "./styles";
import { Fade } from "react-awesome-reveal";

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

const senai = {
  senaiStartDate: "02/2014",
  senaiEndDate: "12/2015",
  senaiCity: "Criciúma",
  senaiCountry: "Brazil",
  senaiSkills: [
    { skill: "Algorithms" },
    { skill: "SQL database" },
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
  ],
};
const { senaiStartDate, senaiEndDate, senaiCity, senaiCountry, senaiSkills } =
  senai;

//Content component.
const Content = () => {
  return (
    <S.ContentContainer>
      {/* Useall section */}
      <Fade>
        <S.Section>
          <S.Paragraph>
            <S.SectionTitle>WORK EXPERIENCE</S.SectionTitle>
          </S.Paragraph>
          <S.Line />
          <S.Paragraph style={{ textAlign: "left" }}>
            <strong>{`${useallStartDate} - ${useallEndDate}`}</strong>
            {` - ${useallCity} ${useallCountry}`}
            <br />
            <strong>Front-end developer - Useall</strong>
          </S.Paragraph>
          <S.Paragraph>{useallJobDescription}</S.Paragraph>
          {/* Goals */}
          <S.List>
            {myGoals.map((goals: { goal: string }, index: number) => {
              return <S.ItemList key={index}>{goals.goal}</S.ItemList>;
            })}
          </S.List>
          <S.Paragraph style={{ textAlign: "left" }}>
            <S.Line />
            <strong>Main technologies used</strong>
          </S.Paragraph>
          {/* Technologies */}
          <S.List>
            {technologies.map((skills: { skill: string }, index: number) => {
              return <S.ItemList key={index}>{skills.skill}</S.ItemList>;
            })}
          </S.List>
        </S.Section>
      </Fade>
      {/* Education and training */}
      <Fade direction="left">
        <S.Section>
          {/* HyperionDev section */}
          <S.Paragraph>
            <S.SectionTitle>EDUCATION AND TRAINING</S.SectionTitle>
          </S.Paragraph>
          <S.Line />
          <S.Paragraph style={{ textAlign: "left" }}>
            <strong>{`${hyperionStartDate} - ${hyperionEndDate}`}</strong>
            {` - ${hyperionCity}, ${hyperionCountry}`}
            <br />
            <strong>Web Developer - HyperionDev</strong>
          </S.Paragraph>
          {/* Skills */}
          <S.List>
            {hyperionSkills.map((skills: { skill: string }, index: number) => {
              const { skill } = skills;
              return <S.ItemList key={index}>{skill}</S.ItemList>;
            })}
          </S.List>
          <Fade direction="left">
            <S.Paragraph>
              <strong>Portfolio: </strong>
              <S.Link
                href="https://www.hyperiondev.com/portfolio/103916/"
                target="_blank"
              >
                www.hyperiondev.com
              </S.Link>
            </S.Paragraph>
          </Fade>
          {/* Senai section */}

          <S.Paragraph style={{ textAlign: "left" }}>
            <S.Line />
            <strong>{`${senaiStartDate} - ${senaiEndDate}`}</strong>{" "}
            {`- ${senaiCity}, 
            ${senaiCountry}`}
            <br />
            <strong> Technical course - SENAI</strong>
          </S.Paragraph>
          <S.List>
            {senaiSkills.map((skills: { skill: string }, index: number) => {
              const { skill } = skills;
              return <S.ItemList>{skill}</S.ItemList>;
            })}
          </S.List>
        </S.Section>
      </Fade>
      <Fade direction="left">
        <S.Section>
          <S.Paragraph>
            <S.SectionTitle>LANGUAGE SKILLS</S.SectionTitle>
          </S.Paragraph>
          <S.Line />
          <S.Paragraph style={{ textAlign: "left" }}>
            <strong> Mother tongue:</strong> Portuguese
            <S.Line />
          </S.Paragraph>
          <S.Paragraph style={{ textAlign: "left" }}>
            <strong> Other language:</strong> English
          </S.Paragraph>
          <S.SkillLanguages>
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
          </S.SkillLanguages>
          <S.Paragraph style={{ textAlign: "left" }}>
            <S.Line />
            <strong>Other language:</strong> Italian
          </S.Paragraph>
          <S.SkillLanguages>
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
          </S.SkillLanguages>
        </S.Section>
      </Fade>
    </S.ContentContainer>
  );
};

export default Content;
