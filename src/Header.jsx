import React from "react";
import "./header.css"
import sign from "./assets/Peter F Schabarum Regional County Park2.jpeg"

function Header(props){

    return <>
    <div className="container">
        <table className="table">
        <thead className="thead">
        <tr>
            <th>
                <img src="https://www.fs.usda.gov/sites/nfs/files/styles/thumbnail/public/r05/angeles/image/mt_baldy_visitor_center.jpg?h=a1e1a043" alt="Mount Baldy Visitor Center" style={{width: "200px"}}></img>
            </th>
            <th>
                <h1><a href={props.reference}>{props.title}</a></h1>  
            </th>
        </tr>
        </thead>    
        </table>
    </div>
    </>;
}

export default Header;