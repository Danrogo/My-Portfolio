import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import ME from '../../public/assets/ME.jpg';
import ME3 from '../../public/assets/ME3.jpg';
import ME2 from '../../public/assets/ME2.jpg';
import ME4 from '../../public/assets/ME4.jpg';


const images = [ME4, ME, ME2, ME3];

const Home = () => {
    return (
        <section id="home" className=" text-white py-16 px-6 md:px-20 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left Text Area */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex-1"
                >
                    <h6 className="text-2xl mb-2">Hello, I'm</h6>
                    <h1 className="text-4xl md:text-6xl font-bold text-green-400 leading-tight">
                        <Typewriter
                            words={['Daniel Cherogony']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={120}
                            deleteSpeed={80}
                            delaySpeed={2000}
                        />
                    </h1>
                    <div className="flex flex-wrap gap-2 mt-6 w-full justify-center text-center">
                        <span className="bg-yellow-500 text-sm px-3 py-1 rounded-full font-medium">Fullstack Developer</span>
                        <span className="bg-blue-500 text-sm px-3 py-1 rounded-full font-medium">Network Engineer</span>
                        <span className="bg-purple-500 text-sm px-3 py-1 rounded-full font-medium">Tech Enthusiast</span>
                    </div>
                    <div className="mt-8">
                        <a
                            // href="https://drive.google.com/file/d/1qDF0iTLJ7Ooaj28rAFf5w1Gik4Ou3vFV/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-green-500 hover:bg-white hover:text-green-700 transition text-white px-6 py-3 rounded shadow-lg hover:shadow-green-500/50 font-semibold">
                                📄 Download Resume
                            </button>
                        </a>
                    </div>
                </motion.div>

                {/* Right Image Carousel */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="flex-1 w-full md:max-w-md"
                >
                    <div className="rounded-xl p-1 backdrop-blur-md shadow-lg">
                        <div className="flex overflow-x-auto space-x-4 p-4 w-full max-w-full scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-300">
                            {images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt="Daniel Cherogony"
                                    className="h-60 w-48 object-cover rounded-lg border border-white/10"
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
