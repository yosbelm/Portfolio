 import Moon from "./assets/Moonblack.png"


export const Header = () => {
    return (
         
        <div id= "#nav" className="nav">
            <div><a href="#proyects" className="atrib">Proyects</a></div>
            <div ><a href="" className="atrib">Skills</a></div>
            <div><a href="" className="atrib">About me</a></div>
            <div><a href="" className="atrib">Contact</a></div>
            <img src={Moon} alt="Moon switch" className="atrib-moon"/>
        </div>
         
    
    )
}
       