import React, { useState } from "react";
import { DesktopLinks, HeaderWrapper, MobileLinks } from "./style";
import Link from "next/link";
import { Button } from "antd";
import Logo from "../../../public/icons/logo.svg";
import Auth from "../Auth";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <Link href={"/"}>
          <Logo className="logo-img" />
        </Link>
        <DesktopLinks>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>

          <li>
            <Button
              className="btn"
              onClick={() => setIsModalOpen((prev) => !prev)}
            >
              <span>Sign up / Login</span>
            </Button>
          </li>
        </DesktopLinks>
        <div
          className="hamburger-icon"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <div className={`icon-1 ${isNavOpen ? "a" : ""}`}></div>
          <div className={`icon-2 ${isNavOpen ? "c" : ""}`}></div>
          <div className={`icon-3 ${isNavOpen ? "b" : ""}`}></div>
          <div className="clear"></div>
        </div>

        <MobileLinks className={isNavOpen ? "is-open" : ""}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>

          <li>
            <Button className="btn">
              <span>Sign up / Login</span>
            </Button>
          </li>
        </MobileLinks>
      </HeaderWrapper>
      <Auth handleClose={() => setIsModalOpen(false)} openModal={isModalOpen} />
    </>
  );
};

export default Header;
