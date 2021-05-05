import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Promoviendo desarrollo web</h1>
                <Typed 
                    className="typed-text"
                    strings={["Diseño Web", "Front End", "UX/UI", "Diseño de Plataforma"]}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                />
                <a href="#" className="btn-main-offer">Línea Directa</a>
            </div>
        </div>
    )
}

export default Header
