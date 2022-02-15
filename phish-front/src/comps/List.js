import axios from "axios";
import React, { useEffect, useContext } from "react";
import Row from "./Row";
import TableHeader from "./TableHeader";


function List() {
    const [emails, setEmails] = React.useState([]);


    useEffect(() => {
        const gettEmails = async () => {
            let res = await axios.get(
                `http://localhost:3000/api/v1/emails`);
            setEmails(res.data);
        };
        gettEmails();
    }, []);

    return (
        <div className="">
            <TableHeader></TableHeader>
            {emails.map(e => <Row props={e}> </Row>)}
        </div>
    );
}

export default List;
