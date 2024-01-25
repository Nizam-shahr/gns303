import { deviceSizes } from "@/styles/themes";
import styled from "styled-components";

export const Wrapper = styled.section`
  background: #991c3a;
  padding: 40px 20px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  @media ${deviceSizes.tablet} {
    padding: 0px 40px 0px;
  }

  @media ${deviceSizes.laptop} {
    flex-direction: row;
    padding: 0px 80px 0px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 61px;
  h1 {
    color: #feffed;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 126px */
    letter-spacing: 0.5px;
    text-transform: capitalize;
    max-width: 758px;

    @media ${deviceSizes.laptop} {
      font-size: 72px;
    }
  }
  p {
    color: #fff;
    text-align: justify;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    max-width: 666px;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 300px;
  height: 521px;

  @media ${deviceSizes.laptop} {
    width: 500px;
  }
`;
