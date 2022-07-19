import React from "react";
import './Menu.css'
import { Link } from "react-router-dom";

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/param/123">param#01</Link>
                </li>
                <li>
                    <Link to="/param/aoba">param#02</Link>
                </li>
                <li>
                    <Link to="/asjajsash">Not Found</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu