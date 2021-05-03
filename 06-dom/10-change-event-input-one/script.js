/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let x = document.getElementById("pass-one");
    let counter = document.getElementById("counter")

    x.addEventListener("input", function (){
        let y = x.value.length

        if (y == 10){
            x.disabled = true;
        }

        counter.innerHTML = y + "/10"
        console.log(y)
    });

    // your code here

})();
