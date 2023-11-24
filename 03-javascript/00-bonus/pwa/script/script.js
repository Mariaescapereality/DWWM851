if("serviceWorker" in navigator)
{
    navigator.serviceWorker.register("./sw.js");
}

//exemple
if(!Math.trunc)
{
    Math.trunc = function(number)
    {
        return number<0? Math.ceil(number): Math.floor(number);
    }
}
// "??" ne peut etre facilement remplace, l'utilisation d un transiler comme "babbel.js" permet cela:
//const h = Element.height??100;
var h = (element.height !== undefined && element.height !== null)? element.height:100;