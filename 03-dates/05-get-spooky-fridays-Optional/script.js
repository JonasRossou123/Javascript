/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const pushbtn = document.getElementById('run');
    pushbtn.addEventListener('click', () => {
        const maanden = [];
        const jaar = document.getElementById('year').value;

        [...Array(12)].map((_, i) => {
            const datum = new Date(jaar, i, 13);
            if (datum.getDay() === 5)
                maanden.push(datum.toLocaleString('NE', { month: 'long' }));
        });

        alert(maanden);
    });
})();