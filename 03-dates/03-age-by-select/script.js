/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    document.getElementById('run').addEventListener('click',() =>{

    const dag = document.getElementById('dob-day').value
    const maand = document.getElementById('dob-month').value
    const jaar = document.getElementById('dob-year').value

    const dezedag = new Date().getDate();
    const dezemaand = new Date().getMonth() + 1;
    const ditjaar = new Date().getFullYear();

        console.log(dezedag);
        console.log(dezemaand);
        console.log(ditjaar);
        console.log(dag);
        console.log(maand);
        console.log(jaar);

let lftd =ditjaar-jaar

    if (dezemaand>maand) {
        console.log("verjaardag al even achter de rug")
        alert(`Your birthdate is ${dag}/${maand}/${jaar} so you are ${lftd} years old.`)
    }
    else if (dezemaand == maand) {
        if (dezedag>=dag) {
            console.log("verjaardag net gepasseerd")
            alert(`Your birthdate is ${dag}/${maand}/${jaar} so you are ${lftd} years old.`)
        } else {
            console.log("verjaardag komt deze maand nog")
            alert(`Your birthdate is ${dag}/${maand}/${jaar} so you are ${lftd-1} years old.`)
        }
    }
    else if (dezemaand<maand) {
        console.log("verjaardag is nog ver weg")
        alert(`Your birthdate is ${dag}/${maand}/${jaar} so you 1/1/1 are ${lftd-1} years old.`)
    }

});

})();
