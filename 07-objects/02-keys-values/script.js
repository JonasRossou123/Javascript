/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let x = document.getElementById("run")

    x.addEventListener("click", function(){

        const person = {
            lastname: "Delnatte",
            firstname: "Pierre-Antoine",
            nickname: "Leny",
            birthDate: "08-05-1985",
            city: "Liège",
            status: "married",
        };

        for (const prop in person) {
            console.log(prop);}

        console.log(Object.values(person))


        for (const prop in person) {
            console.log(person[prop])};
        // your code here
    })

    // your code here
})();
