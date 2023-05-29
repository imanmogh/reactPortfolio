import React from 'react'
import profile from '../assets/profilePic.jpeg'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { Link } from 'react-scroll'

export const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm::text-7xl font-bold text-white'>I am a Full Stack Developer</h2>
                <p className=' text-gray-500 py-4 max-w-md '>
                Qualified and reliable Professional with strong expertise in Programming, Technology, Troubleshooting, Innovation, and Customer Service. 
                Proficient in assisting clients and customers to help organize and increase efficiency within a private organization or business. 
                Thrive in culturally diverse environments with high client satisfaction. Strong administrative, organizational and technology experience with keen 
                attention to detail. Also, a love for music, music creation/production and entertainment that helps keep mind very creative/innovative and alert.
                </p>

                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </Link>
                </div>
            </div>

            <div className='px-10'>
                <img src={profile} alt='Iman' className=' rounded-2xl h-auto max-w-md '></img>
            </div>
        </div>
    </div>
  )
}
