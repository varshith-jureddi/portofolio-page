import { abilities } from "../constants";

export default function Features(){
    return(
        <div className="w-full px-5 md:px-20">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {abilities.map(({url,title,desc})=>(
                    <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
                        <div className="size-14 flex items-center justify-center rounded-full">
                            <img src={url} alt={title} />
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                        <p>{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}