import styled from "styled-components";
import { deviceSizes } from "../../styles/themes";

export const HeaderWrapper = styled.nav`
  background-color: #eecb00;
  padding: 30px 20px;
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 20;
  box-shadow: 0px 0px 28px rgba(170, 170, 170, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${deviceSizes.tablet} {
    padding: 30px 40px;
  }

  @media ${deviceSizes.desktop} {
    padding: 20px 80px;
  }

  .logo-img {
    position: relative;
    z-index: 10;

    flex: 1;
    cursor: pointer;
  }

  .icon-1,
  .icon-2,
  .icon-3 {
    position: absolute;
    left: 25%;
    top: 50%;
    width: 32px;
    height: 3px;
    background-color: #000;
    transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
  }

  .icon-1 {
    transform: translateY(-8px);
    animation-delay: 100ms;
  }

  .icon-3 {
    transform: translateY(8px);
    animation-delay: 250ms;
  }
  .hamburger-icon {
    position: absolute;
    height: 60px;
    width: 60px;
    top: 32px;
    right: 3%;
    z-index: 10;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    /* background: rgba(255, 255, 255, 0.2); */

    @media (min-width: 1024px) {
      display: none;
    }

    .icon-1.a {
      transform: rotate(40deg);
    }

    .icon-3.b {
      transform: rotate(-40deg);
    }

    .icon-2.c {
      opacity: 0;
    }

    .clear {
      clear: both;
    }

    @keyframes slideIn {
      0% {
        width: 0%;
        opacity: 0;
      }
      100% {
        width: 50%;
        opacity: 1;
      }
    }
  }
`;

export const DesktopLinks = styled.ul`
  display: none;

  @media ${deviceSizes.laptop} {
    list-style-type: none;
    width: 67%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    li {
      margin: 0;
      padding: 0;

      @media ${deviceSizes.tablet} {
        &:not(:last-of-type) {
          margin-right: 10px;
        }
      }

      @media ${deviceSizes.laptop} {
        &:not(:last-of-type) {
          margin-right: 18px;
        }
      }

      @media ${deviceSizes.desktop} {
        &:not(:last-of-type) {
          margin-right: 70px;
        }
      }

      a {
        display: inline-block;
        position: relative;
        padding: 0.5em 10px;
        color: #262626;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: capitalize;
        &:hover,
        &:active {
          &::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: black;
          }
        }

        &.active {
          &::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: black;
          }
        }

        .external-link {
          width: 16px;
          height: 16px;
          display: inline-block;
          margin: 0 0 0 2px;
        }
      }

      button {
        background-color: #00c0e4;
        width: 190px;
        height: 48px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #00c0e4;
        &:hover {
          border: 1px solid #00c0e4;
        }
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

      &:last-of-type {
        margin-left: auto;
      }
    }
  }
`;

export const MobileLinks = styled.ul`
  z-index: 3;
  position: fixed;
  top: 0;
  left: -100%;
  height: 100%;
  width: 100%;
  background: #f2fcff;
  text-align: center;
  padding: 140px 20px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  transition: all 0.5s;

  &.is-open {
    left: 0%;
    transition: all 0.5s;
  }

  li {
    margin: 0;
    padding: 0;
    margin-bottom: 28px;

    a {
      display: inline-block;
      position: relative;
      padding: 0.5em;
      font-size: 20px;
      color: #323d53;
      font-weight: 500;
      line-height: 120%;

      &:hover,
      &:active {
        &::after {
          position: absolute;
          content: "";
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: black;
        }
      }

      &.active {
        &::after {
          position: absolute;
          content: "";
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: black;
        }
      }

      .external-link {
        width: 16px;
        height: 16px;
        display: inline-block;
        margin: 0 0 0 2px;
      }
    }
  }

  @media ${deviceSizes.laptop} {
    display: none;
  }

  .link {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 159px;
    h3 {
      margin-bottom: 0;
      font-size: 18px;
      color: #64748b;
    }
  }
  .social-links {
    display: flex;
    justify-content: center;

    gap: 20px;

    a:hover,
    a:focus {
      transform: scale(1.2);
    }

    svg {
      cursor: pointer;
      &:hover,
      &:active {
      }
    }
  }
`;
