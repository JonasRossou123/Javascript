/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const loadData = async (callb) => {
        const response = await fetch('http://localhost:3000/heroes');
        const data = await response.json();
        callb(data)
    };

    document.getElementById('run').addEventListener('click', () => {
        loadData((arr) => {

            const name = document.getElementById('hero-name').value;
            const alter = document.getElementById('hero-alter-ego').value;
            const powers = document.getElementById('hero-powers').value.split(',');
            console.log(powers)

            const hero = {id: 6, name:name, alterEgo:alter, abilities: powers};

            arr.push(hero)
            console.log(arr)

        });
    });

    // your code here
})();
