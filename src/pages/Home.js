import { useEffect, useState, useRef, useCallback } from "react";
import styled from "styled-components";
import gsap from "gsap";

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
  const [introTl, setIntroTl] = useState(null);

  let alphaBg = useRef(null);

  useEffect(() => {
    if (!introTl) return;
    const tl = gsap.timeline();
    tl.from(alphaBg, {
      opacity: 1,
      duration: 3,
    });
    tl.delay(1);
    tl.play();
    introTl.delay(2);
    introTl.play();
  }, [introTl]);

  const getIntroTl = useCallback((tl) => {
    setIntroTl(tl);
  }, []);

  return (
    <HomeComp>
      <AlphaBackground ref={(el) => (alphaBg = el)} />
      <Intro getIntroTl={getIntroTl} />
    </HomeComp>
  );
};

export default Home;
