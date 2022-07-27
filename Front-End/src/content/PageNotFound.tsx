import React, { useEffect } from 'react';

function PageNotFound()
{
    useEffect(()=>{
        document.title = "ERROR: 404";
    }, []);

    return (
        <div className="container">
            <h1>Oops, the page you requested does not exist.</h1>
            <hr />
            <h2>ERROR: 404 - Page not found!</h2> 
        </div>
    );
}

export default PageNotFound;