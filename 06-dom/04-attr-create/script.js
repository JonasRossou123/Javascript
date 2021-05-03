/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let x = document.getElementById("source")
    let y = x.getAttribute("data-image")
            console.log (y)
    // your code here

    let element = document.getElementById('target');
    console.log(element)

    let z = document.createElement("img")
    z.setAttribute("src", y);
    z.setAttribute("alt","cat")

    console.log(z)

    element.appendChild(z)

    document.getElementById("source").remove();

})();
