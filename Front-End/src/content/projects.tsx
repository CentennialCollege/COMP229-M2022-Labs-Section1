import React, { useEffect } from 'react';

function Projects()
{
    useEffect(()=>{
        document.title = "Our Projects";
    }, []);

    return (
        <div className="container">
            <h1>Our Projects</h1>
            <hr />
            <p>Detail about Our Projects...</p> 
        </div>
    );
}

export default Projects;