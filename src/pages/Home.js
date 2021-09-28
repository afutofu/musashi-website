import styled from "styled-components";

import mountains from "../assets/mountains.jpg";
import Intro from "../components/Intro";

const HomeComp = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${mountains});
  background-size: cover;
  background-repeat: no-repeat;
`;

const AlphaBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.4;
`;

const Home = () => {
  return (
    <HomeComp>
      <AlphaBackground />
      <Intro />
    </HomeComp>
  );
};

export default Home;
