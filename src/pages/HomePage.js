import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import CheckExpiry from "../components/CheckExpiry";


function HomePage(){
    return(
        <Button onClick={() => console.log(CheckExpiry.IsExpired())} >sdfsdfsdf</Button>
    )
}
export default HomePage;