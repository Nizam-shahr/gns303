import React from 'react'

const about = () => {
  return (
    <div className='about-container flex flex-col gap-8 p-16'>
       <header className='flex flex-col gap-4' >
        <h1 className='font-bold text-center text-5xl '>Welcome to <em>GNS 303 SKILLS ACQUISITION WEBSITE</em></h1>
        <p className='text-2xl text-center font-bold '>A premier platform dedicated to empowering individuals with the knowledge, tools, and resources essential for personal and professional growth.</p>
    </header>

    <section id="mission" className=''>
        <h2 className='font-bold text-center text-3xl'>Our Mission</h2>
        <p className='text-2xl'>At <em>GNS 303 SKILLS ACQUISITION WEBSITE</em>, our mission is to democratize access to high-quality skill acquisition opportunities. We believe that everyone, irrespective of their background or current skill set, should have the chance to unlock their full potential.</p>
    </section>

    <section  className='flex flex-col gap-4' id="why-choose-us">
        <h2 className='font-bold text-center text-3xl'>Why Choose Us?</h2>
        <ul className='text-2xl'>
            <li><strong>Diverse Course Offerings:</strong> From beginner to advanced levels, our platform hosts a diverse range of courses curated by industry experts and thought leaders.</li>
            <li><strong>Interactive Learning Experience:</strong> We prioritize engaging, interactive learning experiences that foster comprehension, retention, and practical application.</li>
            <li><strong>Flexible Learning Paths:</strong> Whether you're looking for a short-term workshop or a comprehensive program, we offer flexible learning paths tailored to your needs.</li>
            <li><strong>Community Engagement:</strong> Our platform encourages collaboration, networking, and community building, allowing learners to connect, share insights, and grow together.</li>
        </ul>
    </section>

    <section  className='flex flex-col gap-4 text-2xl' id="commitment">
        <h2 className='font-bold text-center text-3xl'>Commitment to Excellence</h2>
        <p>Quality is at the heart of everything we do. We continuously update our curriculum to reflect industry trends, emerging technologies, and best practices. Our instructors are vetted professionals with real-world expertise, ensuring that you receive practical insights and actionable knowledge.</p>
    </section>
    </div>
  )
}

export default about
