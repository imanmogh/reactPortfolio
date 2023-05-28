import React from 'react'
import profile from '../assets/profilePic.jpeg'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

export const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm::text-7xl font-bold text-white'>I am a Full Stack Developer</h2>
                <p className=' text-gray-500 py-4 max-w-md '>
                Hi my name is Iman Moghaddas and I am 24 year old software developer. 
                I graduated from Kennesaw State Universiy in December of 2021 with a bachelors of science in Software Engineering.
                Currently I am in the Gerogia Tech bootcamp program for web development to help advance my skills and make a more proficent sofgware developer. 
                Besides software development my hobbies including creating and recording music. I am a singer-songwriter who has been making music since a teenager. 
                I also enjoying learning new activites so I can be well versed in multiple things.
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </button>
                </div>
            </div>

            <div className='px-10'>
                <img src={profile} alt='Iman' className=' rounded-2xl h-auto max-w-md '></img>
            </div>
        </div>
    </div>
  )
}
