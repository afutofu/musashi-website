import styled from "styled-components";

import musashiAvatar from "../assets/musashi-avatar.png";

const IntroComp = styled.div`
  position: relative;
  background-color: white;
  display: flex;
`;

const Image = styled.div`
  background-image: url(${musashiAvatar});
  background-size: cover;
  background-repeat: no-repeat;
  width: 150px;
  height: 150px;
  margin-right: 25px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  font-family: "Raleway", sans-serif;
`;

const Text = styled.p`
  color: black;
  margin: 0;
  padding: 0;
  font-size: 26px;
`;

const Intro = () => {
  return (
    <IntroComp>
      <Image />
      <TextArea>
        <Text>Musashi</Text>
        <Text>Simplicity is the standard</Text>
        <Text>Invite</Text>
      </TextArea>
    </IntroComp>
  );
};

export default Intro;
