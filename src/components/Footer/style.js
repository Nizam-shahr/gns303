import { deviceSizes } from "@/styles/themes";
import styled from "styled-components";

export const Wrapper = styled.section`
  background: #00c0e4;
  padding: 60px 20px 20px;

  @media ${deviceSizes.tablet} {
    padding: 60px 40px 20px;
  }

  @media ${deviceSizes.laptop} {
    padding: 60px 80px 20px;
  }

  h1 {
    color: #fff;
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .names {
    margin: 25px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(333px, 1fr));
    @media ${deviceSizes.tablet} {
      grid-template-columns: repeat(2, minmax(322px, 1fr));
    }
    @media ${deviceSizes.laptop} {
      grid-template-columns: repeat(auto-fill, minmax(490px, 1fr));
    }
    row-gap: 20px;

    .name {
      display: flex;
      gap: 5px;
      .flex {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;
        @media ${deviceSizes.tablet} {
          align-items: center;
          flex-direction: row;
        }
      }

      span {
        color: #fff;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      h2,
      h3 {
        color: #fff;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }

  .copy-right {
    border-top: 1px solid #fff;
    padding-top: 33px;
    display: flex;
    flex-wrap: wrap;

    p {
      flex: 1;
      color: #c1c8ce;
      font-family: Arial;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
