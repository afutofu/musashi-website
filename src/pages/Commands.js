import styled from "styled-components";

const CommandsComp = styled.div`
  position: relative;
  padding: 10vh 0;
  width: 100%;
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
  background-color: black;
  opacity: 0.8;
`;

const TextArea = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0;
  color: white;
`;

const Commands = () => {
  return (
    <CommandsComp>
      <AlphaBackground />
      <TextArea>
        <Title>Commands</Title>
      </TextArea>
    </CommandsComp>
  );
};

export default Commands;
