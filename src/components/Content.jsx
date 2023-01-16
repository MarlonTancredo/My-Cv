import * as S from "./styles";

//Content component.
const Content = () => {
  return (
    <S.ContentContainer>
      <S.Section>WORK EXPERIENCE</S.Section>
      <strong>11/2018 – 04/2019</strong> Criciuma, Brazil
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
      <S.List>
        <S.ItemList>HTML and CSS (SASS)</S.ItemList>
        <S.ItemList> ES6 / ES7</S.ItemList>
      </S.List>
      <S.Section>EDUCATION AND TRAINING</S.Section>
      <strong>01/11/2022 – CURRENT</strong>London, UK
      <h4>Web Developer - HyperionDev</h4>
      <S.List>
        <S.ItemList>
          Algorithms and programming logic with JAVASCRIPT
        </S.ItemList>
        <S.ItemList>Oriented objects programming with JAVASCRIPT.</S.ItemList>
        <S.ItemList>HTML and CSS</S.ItemList>
        <S.ItemList>Version control with GIT Basics.</S.ItemList>
        <S.ItemList>React JS.</S.ItemList>
      </S.List>
      <S.Paragraph>
        <strong>Website: </strong>
        <S.Link href="https://www.hyperiondev.com/" target="_blank">
          www.hyperiondev.com
        </S.Link>
      </S.Paragraph>
      <S.Paragraph>
        <strong>01/02/2014 – 15/12/2015 Criciúma, Brazil </strong>
        <h4>Technical course - SENAI </h4>
      </S.Paragraph>
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
      <S.Laguages>
        <div>
          <strong>Listening -</strong> B1
        </div>
        <div>
          <strong>Reading</strong> - B1
        </div>
        <div>
          <strong>Spoken production</strong> - B1
        </div>
        <div>
          <strong>Spoken interaction</strong> - B1
        </div>
        <div>
          <strong>Writing</strong> - B1
        </div>
      </S.Laguages>
      <h4>Other language(s): Italian</h4>
      <S.Laguages>
        <div>
          <strong>Listening -</strong> C1
        </div>
        <div>
          <strong>Reading</strong> - C1
        </div>
        <div>
          <strong>Spoken production</strong> - C1
        </div>
        <div>
          <strong>Spoken interaction</strong> - C1
        </div>
        <div>
          <strong>Writing</strong> - C1
        </div>
      </S.Laguages>
    </S.ContentContainer>
  );
};

export default Content;
