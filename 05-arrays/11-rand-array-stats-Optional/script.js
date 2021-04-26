/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener('click',function(){

    const int = Array.from({length:10}, () => Math.floor(Math.random() *100));

    int.forEach((x, y) => {
        document.getElementById(`n-${y + 1}`).innerHTML = x;
    });

        const minimum = document.getElementById('min');
        minimum.innerHTML = Math.min(...int);

        const maximum = document.getElementById('max');
        maximum.innerHTML = Math.max(...int);

        const sum = document.getElementById('sum');
        const realsum = int.reduce((a, b) => a + b, 0)
        sum.innerHTML = realsum;

        const average = document.getElementById('average');
        average.innerHTML = realsum/(int.length);

});


})();
