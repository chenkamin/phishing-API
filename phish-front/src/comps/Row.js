import axios from "axios";
import React, { useEffect, useContext } from "react";

function Row({ props }) {

    console.log(props)

    return (
        <div className="list-grid">
            <div className="grid-items">{props.name}</div>
            <div className="grid-items">{props.email}</div>
            <div className="grid-items">{props.phishingStatus ? "true" : "false"}</div>
        </div>
    );
}

export default Row;
