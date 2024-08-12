import React from "react";

function NavLink(props) {
    return (
        <nav>
            <ul>
                {props.links.map(
                    link => 
                    <li><a href="/">{link}</a></li>
                )}
            </ul>
        </nav>
    );
}

export default NavLink;