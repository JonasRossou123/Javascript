/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) {
        let o1 = parseInt(document.getElementById('op-one').value);
        let o2 = parseInt(document.getElementById('op-two').value);

        switch (operation) {
            case 'addition':
                alert(o1+o2);
                break;
            case 'substraction':
                alert(o1-o2);
                break;
            case 'multiplication':
                alert(o1*o2);
                break;
            case 'division':
                alert(o1/o2);
                break;
            default:
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
