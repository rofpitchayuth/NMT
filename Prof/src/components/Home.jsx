import portrait from '../assets/portrait.png';
import backgroundImage from '../assets/01BG.avif';
import { HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
function Home  () {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about'); 
    };

    return (
        // Home Page
        <div className="flex relative bg-cover bg-center items-center w-full p-6 mx-auto"
             style={{ backgroundImage: `url(${backgroundImage})` }}>
                
                <div className="p-6 w-full rounded-lg text-center flex flex-col items-center">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                        Hello !
                    </p>
                    <p className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-700 dark:text-gray-400 leading-relaxed">
                        Welcome to Prof Tutor
                    </p>
                    <p className="mt-2 px-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium text-gray-700 dark:text-white leading-relaxed">
                        Pitchayuth Jampong
                    </p>
                    <p className="mt-2 px-10 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal text-gray-700 dark:text-gray-400 leading-relaxed">
                        Computer Engineering
                    </p>
                    <button className = "flex items-center mt-4 px-6 py-2 bg-blue-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white rounded-lg hover:bg-blue-600 transition"
                            onClick={handleClick}>
                        About Me
                    <HiOutlineArrowRight className="ml-4 h-5 w-5" /> 
                    </button> 
                </div>
                <img
                        className="ml-auto w-1/3 rounded-md"
                        alt="Meaningful alt text for an image that is not purely decorative"
                        src={portrait}
                />
        </div>
    )
}

export default Home;