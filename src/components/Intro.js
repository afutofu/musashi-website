import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap, { Power3 } from "gsap";

import musashiAvatar from "../assets/musashi-avatar-medium.png";

const IntroComp = styled.div`
  position: relative;
  background-color: none;
  display: flex;

  @media only screen and (max-width: 992px) {
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 450px) {
  }

  @media only screen and (max-width: 350px) {
  }
`;

const Image = styled.div`
  background-color: #f9f9f9;
  background-position: -5px 0px;
  background-image: url(${musashiAvatar});
  background-size: cover;
  background-repeat: no-repeat;
  width: 150px;
  height: 150px;
  margin-right: 25px;
  box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.5);
  /* border-radius: 50%; */

  @media only screen and (max-width: 992px) {
  }

  @media only screen and (max-width: 600px) {
    margin: 0;
    margin-bottom: 25px;
  }

  @media only screen and (max-width: 450px) {
  }

  @media only screen and (max-width: 350px) {
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  font-family: "Raleway", sans-serif;

  @media only screen and (max-width: 992px) {
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 450px) {
  }

  @media only screen and (max-width: 350px) {
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 800;
  text-shadow: 0px 0px 5px white;

  @media only screen and (max-width: 992px) {
  }

  @media only screen and (max-width: 600px) {
    margin: 0;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 450px) {
  }

  @media only screen and (max-width: 350px) {
    font-size: 28px;
  }
`;

const Text = styled.p`
  color: black;
  margin: 0;
  padding: 0;
  font-size: 26px;
  font-weight: 500;
  text-shadow: 0px 0px 5px white;

  @media only screen and (max-width: 992px) {
  }

  @media only screen and (max-width: 600px) {
    margin: 0;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 350px) {
  }
`;

const Button = styled.a.attrs(({ href }) => {
  return {
    href,
    target: "_blank",
  };
})`
  padding: 6px 22px;
  padding-left: 24px;
  margin-left: 1px;
  margin-top: 10px;
  border: 3px solid black;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: black;
  letter-spacing: 3px;
  text-shadow: 0px 0px 5px white;

  transition: background-color 0.3s;

  :hover {
    background-color: white;
  }

  @media only screen and (max-width: 992px) {
  }

  @media only screen and (max-width: 600px) {
    margin: 0;
  }

  @media only screen and (max-width: 450px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 350px) {
  }
`;

const Intro = ({ getIntroTl }) => {
  let introRef = useRef(null);

  useEffect(() => {
    const introTl = gsap.timeline();
    introTl.from(introRef, {
      opacity: 0,
      duration: 2,
      ease: Power3.easeInOut,
    });
    getIntroTl(introTl);
  }, [getIntroTl]);

  return (
    <IntroComp ref={(el) => (introRef = el)}>
      <Image />
      <TextArea>
        <Title>Musashi</Title>
        <Text>Simplicity is the standard</Text>
        <Button
          href={
            "https://discord.com/api/oauth2/authorize?client_id=887982950560464916&permissions=534760652096&scope=bot"
          }
        >
          INVITE
        </Button>
      </TextArea>
    </IntroComp>
  );
};

export default Intro;
