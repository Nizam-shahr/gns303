import { deviceSizes } from "@/styles/themes";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

export const Wrapper = styled.section`
  padding: 150px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #feffed;
  @media ${deviceSizes.tablet} {
    padding: 150px 40px 20px;
  }
  @media ${deviceSizes.laptop} {
    padding: 150px 40px 20px;
    flex-direction: row;
  }
  @media ${deviceSizes.desktop} {
    padding: 150px 80px 90px;
  }
`;

export const LeftContainer = styled.div``;
export const RightContainer = styled.div`
  margin-top: 54px;

  @media ${deviceSizes.laptop} {
    margin-top: 0;
  }
`;
export const TextWrapper = styled.div`
  h1 {
    color: #22262a;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
  }

  span {
    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  p {
    color: #22262a;
    text-align: justify;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
  }
`;
