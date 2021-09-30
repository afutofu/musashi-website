import styled from "styled-components";
import { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";

import mountains from "./assets/mountains.jpg";
import Home from "./pages/Home";
import Commands from "./pages/Commands";

const AppComp = styled.div`
  margin: 0;
  padding: 0;
  background-image: url(${mountains});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: "Raleway", sans-serif;
`;

const App = () => {
  const [homeTl, setHomeTl] = useState(null);
  const [commandsTl, setCommandsTl] = useState(null);

  useEffect(() => {
    if (!homeTl || !commandsTl) return;
    homeTl.play();
  }, [homeTl, commandsTl]);

  const getHomeTl = useCallback((tl) => {
    setHomeTl(tl);
  }, []);

  const getCommandsTl = useCallback((tl) => {
    setCommandsTl(tl);
  }, []);

  return (
    <AppComp>
      <Home getHomeTl={getHomeTl} />
      <Commands getCommandsTl={getCommandsTl} />
    </AppComp>
  );
};

export default App;
