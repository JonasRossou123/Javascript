/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const now = (hours + ',' + minutes);

    console.log(hours)
    console.log(minutes)
    console.log(now)

    if (hours <= 17) {
        if (minutes <= 30) {
            document.getElementById('target').innerHTML = "Hello";
        }
        else {
            document.getElementById('target').innerHTML = "Good evening";
        }
    }
    else {
        document.getElementById('target').innerHTML = "Good evening";
    }

    /*if (now < "17,30") {
        document.getElementById('target').innerHTML = "Hello";
    } else {
        document.getElementById('target').innerHTML = "Good evening";
    }*/

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
