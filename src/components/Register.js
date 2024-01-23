import { useState } from "react";
import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import Spinner from "./Spinner";

function Register({ setIsModalOpen, loggedIn, setIsOpen, }) {
  // const { data: session } = useSession();
  const [text, setText] = useState("Register");
  const [insteadText, setInsteadText] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      setIsModalOpen(false);
    } catch (error) {
      if (error) {
        setText("Register");
        setInsteadText(() => {
          return (
            <div className="instead">
              <h2>Already have an account?</h2>
              <h2 className="black">Sign In</h2>
            </div>
          );
        });
      }
      toast.error(
        "Something went wrong with registration or user already exist"
      );
    }
  };
  const handleText = () => {
    if (!loggedIn) {
      setText(() => {
        return <Spinner />;
      });
    }
  };
  return (
    <div className="registerContainer">
       <button className="closeModal" onClick={() => setIsOpen(false)}>
                  <span>X</span>
                </button>
     <div className="registerDetails ">
       <img className='signin-person' src="/person.png" alt="person" />
       <div className='join'>
        <h1>Join the winning team today</h1>
        <h2>Your skills matter. Login and level up Now!!</h2>
        <div className='ellipse'></div>
       </div>
      </div>
      <div className='register-form-container '>
      <div className="flex flex-col py-4 px-10 register-form">
        <form onSubmit={onSubmit} className='register flex flex-col'>
        <label>Name</label>
<input
  className=" w-96 h-[50px] p-4 bg-white"
  type="name"
  id="name"
  value={name}
  onChange={onChange}
/> 
          <label>Email</label>
          <input
            className=" w-96 h-[50px] p-4 bg-white"
            type="email"
            id='email'
            value={email}
            onChange={onChange}
          />

          <label>Password</label>
          <input
            className=" w-96 h-[50px] p-4 bg-white "
            type="password"
            id='password'
            value={password}
            onChange={onChange}

          />

          <button onClick={handleText}
            className="bg-blue-800 w-40 p-3 text-center registerButton"
          >{text}</button>
        </form>
      </div>
      <div>
      </div>
        <button onClick={() => setIsOpen(false)}> {insteadText}</button>
      </div>
    </div>
  );
}



export default Register;
