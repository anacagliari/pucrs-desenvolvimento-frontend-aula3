import React from "react";

function ParentComponent(props) {
    return (
        <>
            <p>Número de filhos: {React.Children.count(props.children)}</p>
            {props.children}
        </>
    );
}

export default ParentComponent;