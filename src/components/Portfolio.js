import React from 'react'
import ABMR from '../assets/ABMR.png'
import codeQuiz from '../assets/codeQuiz.png'
import noteTaker from '../assets/noteTaker.png'
import passwordGenerator from '../assets/passwordGenerator.png'
import textEditor from '../assets/textEditor.png'
import tripPlanner from '../assets/tripPlanner.png'
import calmQuest from '../assets/calmQuest.png'



export const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: ABMR,
            demoLink: "https://another-bad-music-review-woo.herokuapp.com/",
            codeLink: "https://github.com/imanmogh/anotherBadMusicReview"
        },
        {
            id: 2,
            src: codeQuiz,
            demoLink: "https://imanmogh.github.io/codeQuiz/",
            codeLink: "https://github.com/imanmogh/codeQuiz"
        },
        {
            id: 3,
            src: noteTaker,
            demoLink: "https://immense-journey-79759.herokuapp.com/",
            codeLink: "https://github.com/imanmogh/noteTaker"
        },
        {
            id: 4,
            src: passwordGenerator,
            demoLink: "https://imanmogh.github.io/passwordGenerator/",
            codeLink: "https://github.com/imanmogh/passwordGenerator"
        },
        {
            id: 5,
            src: textEditor,
            demoLink: "https://polar-caverns-59390.herokuapp.com/",
            codeLink: "https://github.com/imanmogh/textEditor"
        },
        {
            id: 6,
            src: tripPlanner,
            demoLink: "https://wkerby.github.io/trip-planner/",
            codeLink: "https://github.com/imanmogh/tripPlanner"
        },
        {
            id: 7,
            src: calmQuest,
            demoLink: "https://calmquest.herokuapp.com/login",
            codeLink: "https://github.com/imanmogh/CalmQuest"
        }
    ]



  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my projects right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({id, src, codeLink, demoLink}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'> 
                            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                                <a href={demoLink}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target="_blank" rel="noreferrer">Demo</button></a>
                                <a href={codeLink}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target="_blank" rel="noreferrer">Code</button></a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio