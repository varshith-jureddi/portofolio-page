import { words } from "../constants/index"
import Button from "../components/Button"
import HeroModel from "../components/hero models/Hero3d"
import Counter from "../components/counter";
export default function Hero(){
    
    return (
        <>
        <section id="hero" className="relative overflow-hidden">
            <div className="hero-layout relative z-10 xl:mt-20 mt-32 md:h-dvh h-[80vh] flex xl:items-center items-start justify-center">
                {/* Left */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                    <div className="hero-text md:text-[60px] text-[30px] font-semibold pointer-events-none">
                        <h1>Shaping 
                            <span className="slide absolute pt-0 px-2 md:px-5 py-[30px] h-[48px] md:h-[78px] md:translate-y-1 translate-y-0 overflow-hidden">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center gap-1 md:gap-3 pb-2">
                                            <span>{word.text}</span>
                                            <img src={word.url} alt="word.text" className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />
                                        </span>
                                    ))}
                                    
                                </span>
                            </span></h1>
                        <h1>Into Real Projects</h1>
                        <h1>That deliver results</h1>
                    </div>
                        <p className="text-white-50 md:text-xl z-10 mb-10 relative pointer-events-none">
                            Hi im varshith a developer based in hyderabad.
                        </p>
                        <Button 
                        className="md:w-80 w-60 md:h-16 h-12"
                        id="button"
                        text="See More"
                        />
                    </div>
                </header>
                {/* right */}
                <figure>
                    <div className="xl:w-[70%] w-full h-full min-h-[20vh] absolute xl:-top-20 top-24 xl:-right-20 right-0 ">{/*{ border-red-200 border-2}*/}
                        <HeroModel/>
                    </div>

                </figure>
            </div>
            <Counter/>
        </section>
        </>
    )
}