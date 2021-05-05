/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const getData = async (lol) => {
        const data = await fetch("http://localhost:3000/heroes");
        const result = await data.json();
        lol(result);
    };

    document.getElementById('run').addEventListener('click', () => {

        const target = document.getElementById('target');

        getData( (x) => {
            const temp = document.getElementById('tpl-hero');

            x.forEach((hero) =>{
                const clone = temp.content.cloneNode(true);
                clone.querySelector('.name').innerHTML = hero.name;
                clone.querySelector('.alter-ego').innerHTML = hero.alterEgo;
                clone.querySelector('.powers').innerHTML = hero.abilities;
                target.appendChild(clone);
            })

        });


        //added this for practice purposes -> has nothing to do with actual exercise
        /*const trolol = (mijnFunction) => {
            const arr = [1,2,3];
            mijnFunction(arr);
        }

        trolol ((x) => {
            console.log(x)
        });


        //same example but written differently
        function greeting(x) {
            console.log(x);
        }

        function processUserInput(callback) {
            const arr = [1,2,3];
            callback(arr);
        }

        processUserInput(greeting);
*/
    });

    // your code here
})();
