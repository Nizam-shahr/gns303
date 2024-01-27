import styled from "styled-components";
import { Modal } from "antd";
import { deviceSizes } from "@/styles/themes";

export const ModalWrapper = styled(Modal)`
  .ant-modal-content,
  .ant-modal-header {
    border-radius: 12px;
    padding: 0px !important;
  }

  .ant-modal-body {
    padding: 0px;
    display: flex;

    border-radius: 12px;
  }
`;
export const LeftContainer = styled.div`
  background: #00c0e4;
  width: 579px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  display: none;
  @media ${deviceSizes.laptop} {
    display: flex;
  }
  .text {
    margin-top: 90px;
    margin-left: -155px;

    h1 {
      color: #fff;
      font-family: Poppins;
      font-size: 42px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%; /* 63px */
      letter-spacing: 0.5px;
    }
    p {
      color: #fff;

      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 36px */
      letter-spacing: 0.5px;
      width: 243px;
    }
  }
`;
export const RightContainer = styled.div`
  background: #feffed;
  width: 579px;
  border-radius: 12px;
  padding: 80px 2px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .ant-input {
    width: 100%;
    height: 67.728px;
  }
  .disclaimer {
    color: black;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
    letter-spacing: 0.5px;
    padding-top: 20px;
    text-align: center;

    span {
      font-weight: 500;
      cursor: pointer;
    }
  }
  button {
    width: 191.255px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #00c0e4;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    &:hover {
      background: transparent;
      border: 1px solid #00c0e4;
      span {
        color: #262626;
      }
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
`;
