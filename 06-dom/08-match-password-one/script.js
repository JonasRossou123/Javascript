/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let x = document.getElementById('run')
    let change1 = document.getElementsByTagName("input")


    x.addEventListener('click', function () {
        for (let i = 0; i < change1.length; i++) {
            change1[i].setAttribute("style", "border-color:internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))");
        }

        let pass1 = document.getElementById('pass-one').value
        let pass2 = document.getElementById("pass-two").value

        if (pass1 === pass2) {

        } else {
            for (let i = 0; i < change1.length; i++) {
                change1[i].setAttribute("style", " border-color:red;")
            }
        }
    })
       // your code here

})();
