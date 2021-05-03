/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let x = document.getElementsByTagName("img")[0]

    let y = x.getAttribute("data-hover")

    let z = x.getAttribute("src")

    x.addEventListener("mouseover", function(){
       x.setAttribute("src", y)
    });
    x.addEventListener("mouseleave", function () {
        x.setAttribute("src", z)

    })
    // your code here

})();
