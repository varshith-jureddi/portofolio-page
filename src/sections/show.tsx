import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Show(){
    const sectionRef=useRef(null);
    const project1Ref=useRef(null);
    const project2Ref=useRef(null);
    const project3Ref=useRef(null);


    
    useGSAP(()=>{
        gsap.fromTo(sectionRef.current, {opacity:0,}, {opacity:1, duration:1.5});

        const projects=[project1Ref.current,project2Ref.current,project3Ref.current]
        projects.forEach((project,index)=>{
            gsap.fromTo(
                project, 
                {y:50, opacity:0},
                {y:0, opacity:1,duration:1,delay:(0.3)*(index+1), scrollTrigger:{trigger:project,start:'top bottom-=100'}})
            })
    },[]);
    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcase-layout">
                    {/* LEFT */}
                    <div ref={project1Ref} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="p1" />
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div ref={project2Ref} className="project-list-wrapper overflow-hidden">
                        <div className="project">
                            <div className="image-wraper bg-[#ffefdb] rounded-xl">
                                <img src="/images/project2.png" alt="p2" />
                            </div>
                        </div>
                        <div ref={project3Ref} className="project">
                            <div className="image-wraper bg-[#ffe7eb] rounded-xl">
                                <img src="/images/project3.png" alt="p3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}