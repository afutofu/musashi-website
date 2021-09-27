import styled from "styled-components";

import Home from "./pages/Home";

const AppComp = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppComp>
      <Home />
    </AppComp>
  );
};

export default App;
