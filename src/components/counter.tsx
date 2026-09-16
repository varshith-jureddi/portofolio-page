import { counterItems } from "../constants";
import CountUp from "react-countup";
export default function Counter(){
    return(
        <div id="counter"className="px-5 md:px-20 xl:mt-0 mt-32">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
                {counterItems.map((item)=>(
                    <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">

                    <div key={item.label} className="counter-number text-white text-5xl font-bold mb-2">
                            {/* <CountUp suffix={item.suffix} end={item.value}/> */}
                            {item.value} {item.suffix}
                    </div>
                    <div className="text-white-50 text-lg">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}