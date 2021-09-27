import styled from "styled-components";

import Intro from "../components/Intro";

const HomeComp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <HomeComp>
      <Intro />
    </HomeComp>
  );
};

export default Home;
