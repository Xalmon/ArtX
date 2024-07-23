import React from "react";
import Inroduction from "./introduction/index";
import Browse from "./browseSection/index";
import Hero from "./heroSection/index";
import Final from "./finalsection/index";



const home  = () => {
    return (
        <div>
            <Inroduction />
            <Browse />
            <Hero />
            <Final />
        </div>
    );
}



export default home;