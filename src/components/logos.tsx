// import { logoIconsList } from "../constants";
import { logoIconsList } from "../constants"

export default function Logos(){
    // interface icons{
    //     imgPath:string,
    //     name:string,
    // }
    // function logoicon(icon: icons){
    //     return(
    //         <div className="flex-none flex-center marquee-item">
    //         <img src="{icon.imgPath}" alt={icon.name} />
    //         </div>
    //     )
    // }
    return(
        <div className="md:my-20 my-10 relative">
            <div className="gradient-edge"/>
            <div className="gradient-edge"/>

            <div className="marquee h-32">
                <div className="marquee-box md:gap-12 gap-5">
                    {logoIconsList.map((icon)=>(
                        <div key= {icon.url} className="flex-none flex-center marquee-item">
                            <img src={icon.url} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}