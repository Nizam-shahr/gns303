import React, { useState } from "react";
import { DesktopLinks, HeaderWrapper, MobileLinks } from "./style";
import Link from "next/link";
import { Button, Dropdown, Image, Menu, message } from "antd";
import Logo from "../../../public/icons/logo.svg";
import Auth from "../Auth";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const logUserOut = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      message.error("Network error. Please try again.");
      console.log("logout error: " + error);
    }
  };

  const menu = (
    <Menu>
      <Menu.Item key="2" onClick={logUserOut}>
        Log out
      </Menu.Item>
    </Menu>
  );
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
            {user === null ? (
              <Button onClick={() => setIsModalOpen(true)} className="btn">
                <span>Sign up / Login</span>
              </Button>
            ) : (
              <Dropdown overlay={menu} trigger={["click"]}>
                <div className="dropdown">
                  <span>{user.name}</span>
                  <div>
                    <Image
                      src="/user.png"
                      width={50}
                      height={50}
                      style={{
                        border: "1px solid red",
                        borderRadius: 50,
                      }}
                    />
                  </div>
                </div>
              </Dropdown>
            )}
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
            {user === null ? (
              <Button onClick={() => setIsModalOpen(true)} className="btn">
                <span>Sign up / Login</span>
              </Button>
            ) : (
              <h1>welcome{user.name}</h1>
            )}
          </li>
        </MobileLinks>
      </HeaderWrapper>
      <Auth
        handleClose={() => setIsModalOpen(false)}
        openModal={isModalOpen}
        setUser={setUser}
      />
    </>
  );
};

export default Header;
