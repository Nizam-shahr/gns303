import React from "react";
import {
  ImageWrapper,
  ImageWrapperMobile,
  TextWrapper,
  Wrapper,
} from "./style";
import { Button } from "antd";
import Image from "next/image";

const Hero = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <h1>Acquire the Skills you need to Suceed</h1>
        <a
          href="https://api.whatsapp.com/send?phone=2349066777502&text=Hi, I'm messaging you from the skill acquisition page."
          target="_blank"
          rel="noreferrer"
        >
          <span>Start Now!!</span>
        </a>
      </TextWrapper>
      <ImageWrapper>
        <Image
          src="/images/hero.png"
          width={631}
          height={613}
          alt="hero-alt"
          objectFit="contain"
          placeholder="blur"
          blurDataURL={"/images/hero.png"}
        />
      </ImageWrapper>
      <ImageWrapperMobile>
        <Image
          src="/images/hero.png"
          width={334}
          height={291}
          alt="hero-alt"
          objectFit="contain"
          placeholder="blur"
          blurDataURL={"/images/hero.png"}
        />
      </ImageWrapperMobile>
    </Wrapper>
  );
};

export default Hero;
