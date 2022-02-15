import axios from "axios";
import React, { useEffect, useContext } from "react";

function TableHeader() {



    return (
        <div className="list-grid">
            <div className="grid-items">name</div>
            <div className="grid-items">email</div>
            <div className="grid-items">status</div>
        </div>
    );
}

export default TableHeader;