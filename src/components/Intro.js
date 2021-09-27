import styled from "styled-components";

import musashiAvatar from "../assets/musashi-avatar.png";

const IntroComp = styled.div`
  position: relative;
  background-color: white;
  display: flex;
`;

const Image = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${musashiAvatar});
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 30px;

  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const Text = styled.p`
  color: black;
  margin: 0;
  padding: 0;
  font-size: 20px;
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
