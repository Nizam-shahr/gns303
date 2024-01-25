import { deviceSizes } from "@/styles/themes";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: #feffed;
  padding: 40px 20px 80px;

  @media ${deviceSizes.tablet} {
    padding: 60px 40px 80px;
  }

  @media ${deviceSizes.laptop} {
    padding: 60px 80px 80px;
  }

  header {
    text-align: center;
    margin-bottom: 50px;

    h1 {
      color: #22262a;
      font-family: Poppins;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }

  .skills {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(333px, 1fr));
    @media ${deviceSizes.tablet} {
      grid-template-columns: repeat(2, minmax(322px, 1fr));
    }
    @media ${deviceSizes.laptop} {
      grid-template-columns: repeat(auto-fill, minmax(362px, 1fr));
    }
    gap: 50px;

    .skill {
      display: flex;

      padding: 0px 1px 19.81px 0px;
      flex-direction: column;
      align-items: center;
      border-radius: 20px;
      background: #edeedd;

      img {
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 20px;

        span {
          color: var(--Neutral-Dark, #223263);
          font-family: Poppins;
          font-size: 32px;
          font-style: normal;
          font-weight: 700;
          line-height: 150%; /* 48px */
          letter-spacing: 0.5px;
        }

        button {
          width: 191.84px;
          height: 47.19px;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 20px;
          background: #00c0e4;
          gap: 10px;

          span {
            color: #feffed;
            font-family: Poppins;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%; /* 27px */
            letter-spacing: 0.5px;
          }
        }
      }
    }
  }
`;
