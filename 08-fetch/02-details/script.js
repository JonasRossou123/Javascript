/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const getData = async (id, lol) => {
        const data = await fetch(`http://localhost:3000/heroes?id=`+ id);
        const result = await data.json();
        lol(result);
    };

    document.getElementById('run').addEventListener('click', () => {
        const hero = document.getElementById('hero-id').value;
        const target = document.getElementById('target');

        getData(hero, (x) => {
            const temp = document.getElementById('tpl-hero');
            const clone = temp.content.cloneNode(true);
            clone.querySelector('.name').innerHTML = x[0].name;
            clone.querySelector('.alter-ego').innerHTML = x[0].alterEgo;
            clone.querySelector('.powers').innerHTML = x[0].abilities;
            target.appendChild(clone);
        });


        //added this for practice purposes -> has nothing to do with actual exercise
        const trolol = (mijnFunction) => {
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

    });
})();
