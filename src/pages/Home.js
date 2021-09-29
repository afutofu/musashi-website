import styled from "styled-components";

import Intro from "../components/Intro";

const HomeComp = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
