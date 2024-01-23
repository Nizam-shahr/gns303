import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import Modal from "react-modal";
import Register from "./Register";
import SignIn from "./SignIn";
import Image from "next/image";
function Header() {
  const router = useRouter();
const changeColor = router.pathname === '/'
const changeColors = router.pathname === '/about'

  const auth = getAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false);
  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: "100",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "#b14d4d 4px solid",
      borderRadius: "16px",
      boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(10px)',
    },
  };
  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: "100",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "#991C3A 4px solid",
      backgroundColor:'#EDEEDD',
      borderRadius: "16px",
      boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(10px)',
    },
  };
  const secondModalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      zIndex: "100",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "#b14d4d 4px solid",
      borderRadius: "16px",
    },
  };
  const handleSignUp = () => {
    setIsOpen(true);
  };
  const onLogOut = () => {
    auth.signOut();
    router.push('/')
    setLoggedIn(false);
    setIsLogoutOpen(false)
  };
  const clickCart = () => {
    if (loggedIn) {
      router.push("/Cart");
    } else {
      setIsModalOpen(true);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setLoggedIn(true);
      }
      console.log(data);
    });
  }, []);

  return (
    <div className="flex p-4 items-center bg-yellow-400 header-container flex-shrink-0 w-full">
      <div className="header flex items-center gap-4 justify-between ">
        <div onClick={() => router.push("/")} className="headerName">
         <Image className="header-imag cursor-pointer" src='/headerlogo.jpg' alt="header-logo" width={100} height={50}/>
        </div>
        <div className="flex items-center gap-8">
        <div className="flex gap-4 header-items">
         <ul className="flex gap-8 text-xl">
            <li onClick={()=> router.push('/')} className={changeColor ? 'router-color' : 'header-item'} >Home </li>
            <li onClick={()=> router.push('/about')} className={changeColors ? 'router-color cursor-pointer' : 'header-item cursor-pointer'}>About</li>
            <li>Contact</li>
         </ul>
        </div>
        <div className="navBar">
        
          <div>
            {" "}
            {loggedIn ? (
              <div>
              <button onClick={()=> setIsLogoutOpen(true)} className="logoutContainer">
                <Image className="use cursor-pointer" src='/user.png' width={30} height={30}  />
              </button>
              </div>
            ) : (
              <button className="SignIn shadow-slate-400 text-2xl" onClick={() => setIsModalOpen(true)}>
                  Log in
              </button>
            )}
             <Modal isOpen={isLogoutOpen} onRequestClose={() => setIsLogoutOpen(false)} style={modalStyles}>
                <div className="logout">
                  <h2  className="text-xl">Do you want to logout?</h2>
                  <div className="flex gap-20"><button className=" hovers px-2 " onClick={onLogOut} >Yes</button> <button className=" hovers px-2" onClick={()=>setIsLogoutOpen(false) } >No</button></div>
                </div>
              </Modal>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={() => setIsModalOpen(false)}
              style={modalStyle}
            >
              <SignIn
                setIsModalOpen={setIsModalOpen}
                setIsLogoutOpen={setIsLogoutOpen}
                setIsOpen={setIsOpen}
                isModalOpen={isModalOpen}
                loggedIn={loggedIn}
                handleSignUp={handleSignUp}
              />

              <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={secondModalStyle}
              >
                <Register
                  setIsOpen={setIsOpen}
                  setIsModalOpen={setIsModalOpen}
                setIsLogoutOpen={setIsLogoutOpen}
                  loggedIn={loggedIn}
                />

               
              </Modal>
              
            </Modal>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Header;
