import React from 'react';

function Footer()
{
    /**
     * This method returns the Current Year
     *
     * @returns {number}
     */
    function getDate(): number
    {
        let date = new Date();
        return date.getFullYear();
    }

    return(
        <nav className="navbar fixed-bottom bg-light">
            <div className="container-fluid">
                <h5>&copy; Copyright {getDate()}</h5>
            </div>
        </nav>
    );
}

export default Footer;