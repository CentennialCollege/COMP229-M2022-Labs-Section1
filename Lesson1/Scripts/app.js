//IIFE -- Immediately Invoked Function Expression
//AKA -- anonymous self-executing function

(function()
{
    function Start() 
    {
        console.log("App Started!...");
    }

    window.addEventListener("load", Start);

})();