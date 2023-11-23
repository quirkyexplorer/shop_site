import "../styles/header.css"
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div className="header">
                <div className="edit">
                  <Link to={'/edit'}>Edit</Link>
                </div>
                <div className="menu">
                    Menu
                </div>
                <div className="logo">
                    <Link to={"/"}> logo</Link>
                </div>
                <div className="right">
                    <div className="about">
                        About
                    </div>
                    <div className="cart">
                        Cart
                    </div>
                </div>
        </div>
    ); 
}