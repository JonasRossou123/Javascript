/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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

            const id = parseInt(document.getElementById('hero-id').value);
            console.log(id)
            arr.forEach( hero => {
                if (hero.id === id) {
                    arr.splice(arr.indexOf(hero), 1);
            }
        })

            console.log(arr)

        });
    });

})();
