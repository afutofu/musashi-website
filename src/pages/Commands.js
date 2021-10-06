import { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CommandsComp = styled.div`
  position: relative;
  min-height: 100vh;
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
  opacity: 0.9;
`;

const TextArea = styled.div`
  z-index: 10;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
`;

const Title = styled.h1`
  margin: 0;
  color: white;
  margin-bottom: 30px;
`;

const CommandCategory = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommandTitle = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 15px;
  text-align: center;

  @media only screen and (max-width: 992px) {
    font-size: 22px;
    margin: 0 20px;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 20px;
    line-height: unset;
  }

  @media only screen and (max-width: 350px) {
    font-size: 18px;
  }
`;

const CommandList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: 992px) {
    align-items: center;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CommandItem = styled.li`
  color: white;
  font-size: 20px;
  margin: 0 7px;
  margin-bottom: 15px;
  font-weight: 400;
  box-sizing: border-box;

  @media only screen and (max-width: 992px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 12px;
  }
`;

const Commands = ({ getCommandsTl }) => {
  let commandsRef = useRef(null);
  let textAreaRef = useRef(null);

  useEffect(() => {
    const commandsTl = gsap.timeline({
      scrollTrigger: {
        trigger: commandsRef,
        start: "top center",
        toggleActions: "play none none none",
      },
    });
    commandsTl.to(textAreaRef, {
      opacity: 1,
      duration: 1.5,
    });
    commandsTl.pause();
    getCommandsTl(commandsTl);
  }, [getCommandsTl]);

  return (
    <CommandsComp ref={(el) => (commandsRef = el)}>
      <AlphaBackground />
      <TextArea ref={(el) => (textAreaRef = el)}>
        <Title>Commands</Title>
        <CommandCategory>
          <CommandTitle>General</CommandTitle>
          <CommandList>
            <CommandItem>hello</CommandItem>
            <CommandItem>commands</CommandItem>
            <CommandItem>clear</CommandItem>
          </CommandList>
        </CommandCategory>
        <CommandCategory>
          <CommandTitle>Music</CommandTitle>
          <CommandList>
            <CommandItem>play</CommandItem>
            <CommandItem>playbatch</CommandItem>
            <CommandItem>skip</CommandItem>
            <CommandItem>stop</CommandItem>
            <CommandItem>loop</CommandItem>
            <CommandItem>loopqueue</CommandItem>
            <CommandItem>noloop</CommandItem>
            <CommandItem>queue</CommandItem>
            <CommandItem>clearqueue</CommandItem>
            <CommandItem>pause</CommandItem>
            <CommandItem>resume</CommandItem>
            <CommandItem>remove</CommandItem>
            <CommandItem>nowplaying</CommandItem>
            <CommandItem>save</CommandItem>
            <CommandItem>load</CommandItem>
          </CommandList>
        </CommandCategory>
      </TextArea>
    </CommandsComp>
  );
};

export default Commands;
