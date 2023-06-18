import React from "react";
import "./navbar.css"

export default function Navbar(){
    return(
        <footer>
            <nav>
                <div className="navbar_holder">
                    <div className={"navbar_leftSide"}>
                        <ul>
                            <li>
                                <button>Portfolio</button>
                            </li>
                            <li>
                                <button>Blog</button>
                            </li>
                        </ul>
                    </div>

                    <div className={"navbar_middle"}>
                        <div className={"box_shadow_holder"}>

                        </div>
                    </div>

                    <div className={"navbar_rightSide"}>
                        <ul>
                            <li>
                                <button>Projects</button>
                            </li>
                            <li>
                                <button>Contact</button>
                            </li>
                            <li>
                                <button>CV</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </footer>
    )
}