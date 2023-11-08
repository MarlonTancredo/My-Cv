import * as S from "./styles";
import { Fade } from "react-awesome-reveal";

//Importing icons
import * as Fa from "react-icons/fa";
import * as Bs from "react-icons/bs";

import profile from "../img/profile.png";

//Aside Component.
const Aside = () => {
    return (
        <Fade direction="left" duration={2000}>
            <S.AsideContainer>
                <div>
                    <S.imgCV alt="Marlon-img" src={profile}></S.imgCV>
                </div>
                <div>
                    <S.Name>Daks Marlon Tancredo</S.Name>
                    <S.Role>JavaScript Developer</S.Role>
                </div>
                <S.Information>
                    <S.Paragraph style={{ textAlign: "center" }}>
                        <Fa.FaLocationArrow size={14} />
                        London, Uk
                    </S.Paragraph>
                    <S.Paragraph style={{ textAlign: "center" }}>marlon_tancredo@hotmail.com</S.Paragraph>
                </S.Information>
                <S.SocialMidea>
                    <S.GitHub>
                        <a href="https://github.com/MarlonTancredo" target="_blank" rel="noreferrer">
                            <Bs.BsGithub />
                        </a>
                    </S.GitHub>
                    <S.Linkedin>
                        <a
                            href="https://www.linkedin.com/in/daks-marlon-tancredo-15a740145/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Bs.BsLinkedin />
                        </a>
                    </S.Linkedin>
                </S.SocialMidea>
            </S.AsideContainer>
        </Fade>
    );
};

export default Aside;
