import Image from 'next/image'
import Header from 'a/components/Header'
import Skills from 'a/components/Skills'
import Footer from 'a/components/Footer'
import { useRouter } from 'next/router'
export default function Home() {


  const router = useRouter()

 return  (
  <div>
    <div className='skills-container'>
    <h1 className='acquire'>
    Acquire the
Skills you need
to Suceed
      </h1>
      <Image className='people' src='/people.jpg' width={500} height={500} />
    </div>
    <div className=' common p-4'>
      <h1 className='font-bold' >
      COMMON SKILLS
      </h1>
      <div className='py-16'>
        <Skills/>
      </div>

    </div>
    <div className='why-skills-container'>
      <div className='why-skills-wrapper'>
            <div className='why'>
        <h1 className='text-4xl'>
        Why you should learn a skill
        </h1>
        <p>
        Learning a new skill is an investment in personal growth and career advancement. It enhances problem-solving abilities, fosters creativity, and keeps your mind engaged. Plus, 
        it’s a gateway to social connections and overall well-being. So go ahead—pick a skill and enjoy the journey!” 🌟🚀.  <b className='text-2xl'>
        You can start learning or request to post your own skills  now by contacting us through 
        the below button 👇
        </b>
        </p>
        <button onClick={() => router.push('https://wa.me/09066777502')} className=' mx-30 hovers shadow-2xl shadow-slate-900 start'>
        Start Now!!
        </button>
      </div>

      <div className='why-container-right'>
       <Image src='/person.png' width={500} height={900}  />
      </div>
      </div>
    </div>
    <div className='names-of-students'>
      <h1 className='text-center'>
      MEMBERS OF THE GROUP
      </h1>
<Footer/>
    </div>


   
  </div>


 )
}
