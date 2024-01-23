import 'a/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from "next-auth/react"
import Header from 'a/components/Header';


export default function App({ Component, 
  pageProps: { session, ...pageProps },
  

}) {
  return (
    <SessionProvider session={session}>
      <Header/>
      <Component {...pageProps} />
    
      <ToastContainer/>
    </SessionProvider>
  )
}

