import React from 'react'
import { products } from './data'
import SkillsCard from 'a/components/SkillsCard'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
function Skills() {

  const router = useRouter()
  return (
    <div className='flex py-4 px-6 gap-8 flex-wrap product-container justify-center'>
      {products.map((product) => (
       <SkillsCard 
       image={product.images}
       name ={product.name}
       id={product.id}
       key={product.id}
       />
       
      ))}
    </div>
  )
}

export default Skills






