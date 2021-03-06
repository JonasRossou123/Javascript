/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    async function loadData(){
        const response = await fetch('http://localhost:3000/heroes');
        const data = await response.json();
        console.log(data)
    }

    document.getElementById('run').addEventListener('click', () => {
        loadData();
    });
    // your code here
})();
