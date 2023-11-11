import React from "react";
import logoimg from "../../assets/Logo.png";
import "./style.css";
import {Link} from "react-router-dom" ;

const Header = () => {
    return ( 
        <div>
        <div className="header">
            <div className="header-logo">
              
                    <img src={logoimg} />
                </div>
            <div className="header-navlist">
                <Link to = {"/"}>
            <p>Home</p>
            </Link>
            <Link to = {"/user"}>
            <p>Users</p>
            </Link>
            <Link to = {""}>
            <p>About Us</p>
            </Link>
            <Link>
            <p>Contact</p>
            </Link>
        </div>
        <div className="header-buttons">
            <button>Login</button>
            <button>SignUp</button>
        </div>
        </div>
        </div>
        
    );
};

export  default Header ;
