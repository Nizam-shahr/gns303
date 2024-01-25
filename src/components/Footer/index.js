import React from "react";
import { Wrapper } from "./style";
import { names } from "../../../data";
import Logo from "../../../public/icons/logo.svg";
const Footer = () => {
  return (
    <Wrapper>
      <h1>MEMBERS OF THE GROUP</h1>
      <div className="names">
        {names.map(({ matric, name }, index) => (
          <div className="name" key={index}>
            <span>{index + 1}.</span>
            <div className="flex">
              <h3>{name}</h3>
              <h2>{matric}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="copy-right">
        <p>
          {" "}
          © {new Date().getFullYear()} This Project was Built my the member of
          Group 37 GNS303
        </p>
        <Logo />
      </div>
    </Wrapper>
  );
};

export default Footer;
