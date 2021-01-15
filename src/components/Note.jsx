import React from "react";

function Note(props){
    const {item,...restProps}=props;
    return (
        <div className="note" {...restProps}>{item || ""}</div>
    );
}
export default Note;