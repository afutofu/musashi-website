import styled from "styled-components";

import mountains from "./assets/mountains.jpg";
import Home from "./pages/Home";

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
  return (
    <AppComp>
      <Home />
    </AppComp>
  );
};

export default App;
