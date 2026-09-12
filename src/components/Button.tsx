export default function Button({className, text, id}){
    return(
        <a className={`${className} ?? ""} relative z-20 cursor-pointer`}>
            <div className="cta-button group:">
                <div className="bg-circle"/>
                <div className="text">{text}</div>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt=">" />
                </div>
            </div>
            
        </a>
    );
};