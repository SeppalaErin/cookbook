import React from "react";

function Header({title}) {
    return (
        <div className="header">

            <div className="container-fluid">
                <div className="row">
                    <div className="contactHeaderBackground">
                        <h2 className="pt-5">{title}</h2>
                    </div>
                </div>
            </div>
            

            
        </div>
            


    );
}

export default Header;

