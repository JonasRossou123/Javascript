/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function looper() {

    const age = prompt("Please enter your age");
    const gen = prompt("Please enter your gender");
    const town = prompt("Please enter your town");

    const answers = confirm(`Your age is ${age}, you live in ${town} and you are a ${gen}.`);

    if (answers == false){
        looper();
    }

}

looper()


