/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let x = document.getElementById("pass-one");
    let validator = document.getElementById("validity")
    let teller = 0

    x.addEventListener("input", function () {

        let newArr = []
        teller = 0

        let y = x.value.length;

        for (let j = 0; j < y; j++) {
            let c = x.value.charAt(j);
            newArr.push(c);
            console.log(newArr);
            if (!isNaN(newArr[j])) {
                teller = teller + 1;
            }
        }

        console.log(y);
        console.log(teller)
        if (y > 7 && teller > 1) {
            validator.innerHTML = "ok";
        }
            else {
                validator.innerHTML = "Not ok"
            }
    })

})();
