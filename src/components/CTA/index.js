import React from "react";
import { ImageWrapper, TextWrapper, Wrapper } from "./style";
import Image from "next/image";

const CTA = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <h1>Why you should learn a skill</h1>
        <p>
          Learning a new skill is an investment in personal growth and career
          advancement. It enhances problem-solving abilities, fosters
          creativity, and keeps your mind engaged. Plus, it’s a gateway to
          social connections and overall well-being. So go ahead—pick a skill
          and enjoy the journey!” 🌟🚀
        </p>
      </TextWrapper>
      <ImageWrapper>
        <Image src="/images/CTA.png" fill alt="cta" className="img" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default CTA;
