import styled from "styled-components";
import { deviceSizes } from "./themes";

export const Wrapper = styled.section`
  padding: 150px 20px 20px;
  background: #feffed;

  @media ${deviceSizes.tablet} {
    padding: 150px 40px 20px;
  }
  @media ${deviceSizes.laptop} {
    padding: 150px 40px 20px;
  }
  @media ${deviceSizes.desktop} {
    padding: 150px 80px 90px;
  }

  header {
    margin-bottom: 25px;
    h1 {
      color: #22262a;
      font-family: Poppins;
      font-size: 54px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: capitalize;
      max-width: 700px;
      /* text-align: center; */
    }
    span {
      color: #22262a;
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      max-width: 700px;
    }
  }

  .our-mission {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 25px;

    h2 {
      color: #22262a;
      font-family: Poppins;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: capitalize;
    }

    span {
      color: #22262a;
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      max-width: 900px;
    }
  }
  .choose {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 25px;

    .cards {
      display: flex;
      flex-direction: column;
      gap: 14px;
      .card {
        display: flex;
        flex-direction: column;

        h4 {
          color: #22262a;
          font-family: Poppins;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-transform: capitalize;
        }

        p {
          color: #22262a;
          font-family: Poppins;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          max-width: 500px;
        }
      }
    }
  }

  .commitment {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 25px;

    h2 {
      color: #22262a;
      font-family: Poppins;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: capitalize;
    }

    p {
      color: #22262a;
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      max-width: 900px;
    }
  }
`;
