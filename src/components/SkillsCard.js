import React from 'react'
import { useRouter } from 'next/router'

function SkillsCard({image, name, id}) {
    const router =useRouter()
    return(
        <div className='product-container-details'>
        <img src={image[0]} alt='product-image'/>
       <div className='product-container-detail p-4'> <h2 className='text-2xl text-center font-bold min-w-60 '>{name.toUpperCase()}</h2>
       <button onClick={()=> router.push(`/product-details/${id}`)} className='view-button shadow-lg shadow-slate-800 hovers '>View</button>
       </div>
      
      </div>
  )
}

export default SkillsCard
