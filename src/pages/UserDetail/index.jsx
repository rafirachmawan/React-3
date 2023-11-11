import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {

    const param = useParams()  ;
        console.log(param.id);
    
    return ( 
        <div>
            <h1>Ini Detail Halaman</h1>
            <h1>ini data ide ke {param.id}</h1>
        </div>
    ) ;
};

export default UserDetail ;