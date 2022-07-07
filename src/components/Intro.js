import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap, { Power3 } from "gsap";

import musashiAvatar from "../assets/musashi-avatar-medium.png";

const IntroComp = styled.div`
  opacity: 0;
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

const TextBox = styled.div`
  position: relative;
  width: 305px;
  height: 30px;
  margin: 0;

  @media only screen and (max-width: 600px) {
    margin-bottom: 16px;
    text-align: center;
  }

  @media only screen and (max-width: 450px) {
  }
`;

const Text = styled.p`
  opacity: 0;
  color: black;
  margin: 0;
  padding: 0;
  font-size: 26px;
  font-weight: 500;
  text-shadow: 0px 0px 5px white;

  @media only screen and (max-width: 992px) {
  }

  @media only screen and (max-width: 600px) {
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
  let text1Ref = useRef(null);
  let text2Ref = useRef(null);

  useEffect(() => {
    const introTl = gsap.timeline();
    introTl.to(introRef, {
      opacity: 1,
      duration: 2,
      ease: Power3.easeInOut,
    });
    getIntroTl(introTl);

    const textTl = gsap.timeline({ repeat: -1 });
    textTl
      .to(text1Ref, { autoAlpha: 1, duration: 2 })
      .to(text1Ref, { autoAlpha: 1, duration: 3 })
      .to(text1Ref, { autoAlpha: 0, duration: 1 })
      .to(text2Ref, { y: -31, duration: 0 })
      .to(text2Ref, { autoAlpha: 1, duration: 2 })
      .to(text2Ref, { autoAlpha: 1, duration: 3 })
      .to(text2Ref, { autoAlpha: 0, duration: 1 });
  }, [getIntroTl]);

  return (
    <IntroComp ref={(el) => (introRef = el)}>
      <Image />
      <TextArea>
        <Title>Musashi</Title>
        <TextBox>
          <Text ref={(el) => (text1Ref = el)}>Discord Music Bot</Text>
          <Text ref={(el) => (text2Ref = el)}>Simplicity is the standard</Text>
        </TextBox>

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
