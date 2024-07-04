import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 8.6rem;
  width: auto;
`;
const ImgText = styled.div`
  height: 3rem;
  font-size: 14px;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
      <ImgText>Hotel Radisson</ImgText>
    </StyledLogo>
  );
}

export default Logo;
