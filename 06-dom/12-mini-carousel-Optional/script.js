/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    const button =  document.getElementById('next')

    button.addEventListener('click', function(){

        let x = document.getElementsByTagName("img")[0];
        let photo = x.getAttribute("src")
        let index = (gallery.indexOf(photo));
        console.log(index)

        let end = gallery.length

        x.setAttribute("src", gallery[index + 1])
        if (index === end-1)
            x.setAttribute("src", gallery[0])

    })

    // your code here

})();
