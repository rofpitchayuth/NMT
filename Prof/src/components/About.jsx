import portrait from '../assets/portrait.png';
import Sirisoft  from '../assets/Sirisoft.jpg';
import TKN from '../assets/Ca-ase_TKN.png';
import WRO from '../assets/Wro.jpg';
import Modmed from '../assets/Mod.png';
import Asteroid from '../assets/Digital.png';
import Mastermind from '../assets/Mastermind.png';
import Spotify from '../assets/Spotify.png';
import { Card } from 'flowbite-react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About  ()  {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }
    , []);
    
    return (
        
    <div>    
        {/* Text About Me */}
        <div className ="flex relative"> 
            <div className ="bg-dark-900 bg-cover">
                <div className ="flex relative w-full ml-6 mx-auto">
                    <div className ="mt-8 ml-8 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white">
                        About Me
                    </div>
                </div>
                <div className="mt-8 font-normal text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal ml-8 mt-4 w-2/3"
                    style={{ textIndent: '2rem' }}>
                    I'm Pitchayuth Jampong , Now studying in Computer Engineering at King Mongkut's University of Technology Thonburi (KMUTT).
                </div>
            </div>
            <img
            className="ml-auto w-1/3 rounded-md"
            src={portrait}
            />
        </div>
    {/* Event Card */}
        <div className="flex relative justify-center mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-bold text-6xl bg-dark-900 bg-cover">
            Competitions    
        </div>
        {/* Sirisoft */}
        <div className="flex justify-center bg-gray-100 dark:bg-gray-900 animation" data-aos="zoom-in">
            <Card href="/" className="flex w-3/4 mt-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col sm:grid sm:grid-cols-2 justify-center mt-1">
                    {/* image */}
                    <img className="ml-auto mt-auto mb-auto rounded-md hover:scale-105 transition-transform duration-300" src={Sirisoft}/>
                    {/* description */}
                    <div className="flex flex-col ml-0 ">
                        <h1 className="mt-auto ml-16 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Teamwork & Social Hacker</h1>
                        <p className="mb-auto ml-8 mt-2 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal text-gray-700 dark:text-gray-400"
                            style={{ textIndent: '2rem' }}>
                        Won the 'The Team Work Hacker' and 'The Social Hacker' awards at the Sirisoft Hackathon in the CITYHACK challenge. The awards were presented by the Governor of Bangkok.
                        </p>
                    </div>
                </div>
            </Card>
        </div>
        {/* WRO */}
        <div className="flex justify-center bg-gray-100 dark:bg-gray-900 animation" data-aos="zoom-in">
            <Card href="/" className="flex w-3/4 mt-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col sm:grid sm:grid-cols-2 justify-center mt-1">
                    {/* image */}
                    <img className="ml-auto mt-auto mb-auto rounded-md hover:scale-105 transition-transform duration-300" src={WRO}/>
                    {/* description */}
                    <div className="flex flex-col ml-0 ">
                        <h1 className="mt-auto ml-16 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Coaching @WRO</h1>
                        <p className="mb-auto ml-8 mt-2 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal text-gray-700 dark:text-gray-400"
                            style={{ textIndent: '2rem' }}>
                        Served as a coach, instructing students to participate in the robotics competition at the World Robot Olympiad(WRO). The team achieved the 1st runner-up award
                        </p>
                    </div>
                </div>
            </Card>
        </div>
        {/* TKN Competition */}
        <div className="flex justify-center bg-gray-100 dark:bg-gray-900 animation" data-aos="zoom-in">
            <Card href="/" className="flex w-3/4 mt-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col sm:grid sm:grid-cols-2 justify-center mt-1">
                    {/* image */}
                    <img className="ml-auto mt-auto mb-auto rounded-md hover:scale-105 transition-transform duration-300" src={TKN}/>
                    {/* description */}
                    <div className="flex flex-col ml-0 ">
                        <h1 className="mt-auto ml-16 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Ca-ase Competition 2024</h1>
                        <p className="mb-auto ml-8 mt-2 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal text-gray-700 dark:text-gray-400"
                            style={{ textIndent: '2rem' }}>
                        Served as a coach, instructing students to participate in the robotics competition at the World Robot Olympiad(WRO). The team achieved the 1st runner-up award
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    {/* Project */}
    <div className="flex relative justify-center mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-bold bg-dark-900 bg-cover">
        My Project    
    </div>
    <div className="grid grid-cols-2 gap-2 mt-8" data-aos="fade-up">
        <div className="flex justify-center items-center animation p-2">
            <img className="w-1/2 h-auto rounded-md hover:scale-105 transition-transform duration-300" src={Modmed} />
        </div>
        <div className="flex justify-center items-center animation p-2">
            <img className="w-1/2 h-auto rounded-md hover:scale-105 transition-transform duration-300" src={Asteroid} />
        </div>
        <div className="flex justify-center items-center animation p-2">
            <img className="w-1/2 h-auto rounded-md hover:scale-105 transition-transform duration-300" src={Mastermind} />
        </div>
        <div className="flex justify-center items-center animation p-2">
            <img className="w-1/2 h-auto rounded-md hover:scale-105 transition-transform duration-300" src={Spotify} />
        </div>
</div>


     </div>   
    )
}

export default About;