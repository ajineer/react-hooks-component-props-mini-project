import React from "react";

function About({blogname, about, image="https://via.placeholder.com/215"}){
    return <aside>
        <h1>{blogname}</h1>
        <img src={image} alt="blog logo"></img>
        <p>{about}</p>
    </aside>
}

export default About