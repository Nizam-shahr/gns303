import { useState } from 'react'
import { toast } from 'react-toastify'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Spinner from './Spinner';
function SignIn({ setIsModalOpen, loggedIn, handleSignUp, setIsOpen}) {
  const [showPassword, setShowPassword] = useState(false)
  const[text, setText] = useState('Sign In')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex:'100',
      padding:'0px'
    },
    content: {
      bottom: "20%",
      left: "50%",
      right: "auto",
      padding: '0',
      marginRight: "-50%",
      height: '1000px',
      transform: "translate(-50%, -50%)",
     boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
     backdropFilter: 'blur(10px)'
    },
  };

  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      
      
      setIsModalOpen(false)
    } catch (error) {
      toast.error('Bad User Credentials')
      if (error) {
        setText('Sign in')
      }
    }
  }
  const handleText = () => {
    if (!loggedIn) {
      setText(() => {
        return <Spinner/>
      })
    }
    
   
  }

  return (
    <div className='registerContainer'>
      <button
                className="closeModal"
                onClick={() => setIsModalOpen(false)}
              >
                <span>X</span>
              </button>
      <div className="signDetails ">
       <img className='signin-person' src="/person.png" alt="person" />
       <div className='sign'>
        <h1>Welcome Back</h1>
        <h2>Your skills matter. Login and level up Now!!</h2>
        <div className='ellipse-2'></div>
       </div>
      </div>
      <div className='register-form-container '>
      <div className="flex flex-col py-4 px-10 register-form">
        <form onSubmit={onSubmit} className='register flex flex-col'>

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
      <div className="create px-4"> <h2>Don't have an account ?</h2><button  className=''  onClick={handleSignUp} >
                 Create One
            </button></div>
                   
    </div>
    </div>
 
  )
}

export default SignIn