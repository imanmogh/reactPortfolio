import React from 'react'

export const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20 '>
              Hi my name is Iman Moghaddas and I am 24 year old software developer. 
              I graduated from Kennesaw State Universiy in December of 2021 with a bachelors of science in Software Engineering.
              Currently I am in the Gerogia Tech bootcamp program for web development to help advance my skills and make a more proficent sofgware developer. 
              Besides software development my hobbies including creating and recording music. I am a singer-songwriter who has been making music since a teenager. 
              I also enjoying learning new activites so I can be well versed in multiple topics.
            </p>
        </div>
    </div>
  )
}

export default About