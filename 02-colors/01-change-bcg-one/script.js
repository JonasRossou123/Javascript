/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let redbut = document.getElementById('red');
    let greenbut = document.getElementById('green');
    let yellbut = document.getElementById('yellow');
    let bluebut = document.getElementById('blue');

    redbut.addEventListener("click", function(){document.body.style.background = "red"} )
    greenbut.addEventListener('click', function(){document.body.style.background = "green"})
    yellbut.addEventListener('click', function(){document.body.style.background = "yellow"})
    bluebut.addEventListener('click', function(){document.body.style.background = "blue"})

    // your code here

})();
