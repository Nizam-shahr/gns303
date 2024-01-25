import { deviceSizes } from "@/styles/themes";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 150px 20px 20px;
  background-image: url("/images/hero-bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  height: 100vh;
  @media ${deviceSizes.tablet} {
    padding: 150px 40px 20px;
    background-position: center 288%;
    background-size: cover;
    height: 100vh;
  }
  @media ${deviceSizes.laptop} {
    padding: 150px 40px 20px;
    background-size: cover;
    background-position: center left;
    height: 100vh;
    flex-direction: row;
  }
  @media ${deviceSizes.desktop} {
    padding: 150px 80px 20px;
    height: 100vh;
    background-position: bottom left;
  }
`;

export const TextWrapper = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${deviceSizes.laptop} {
    align-items: flex-start;
    margin-top: 100px;
  }

  h1 {
    color: #991c3a;
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 126px */
    letter-spacing: 0.5px;

    @media ${deviceSizes.laptop} {
      max-width: 681px;
      text-align: left;
      font-size: 64px;
      margin: 0 0 12px;
    }

    @media (min-width: 1500px) {
      max-width: 681px;
      text-align: left;
      font-size: 84px;
      margin: 0 0 12px;
    }
  }

  button {
    width: 260px;
    height: 70px;
    border-radius: 20px;
    background: #00c0e4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 20px;
    span {
      color: #feffed;
      font-family: Poppins;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%; /* 54px */
      letter-spacing: 0.5px;
    }
  }
`;
export const ImageWrapper = styled.div`
  display: none;

  @media ${deviceSizes.tablet} {
    //margin-top: 60px;
    display: flex;
    justify-content: center;
    //display: block;
    max-width: 100%;
    margin: 0 auto;
  }

  @media ${deviceSizes.desktop} {
    /* margin-top: 50px; */
  }
`;
export const ImageWrapperMobile = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  margin-top: 50px;
  justify-content: center;
  // @media ${deviceSizes.tablet} {
  //   width: 50%;
  // }

  @media ${deviceSizes.tablet} {
    display: none;
  }
`;
