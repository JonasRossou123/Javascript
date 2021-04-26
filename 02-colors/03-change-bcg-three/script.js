
(function() {

let press = document.getElementById('run')

press.addEventListener('click', function() {
        let symbols = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0;i<6;i++){
            color += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }

    document.body.style.backgroundColor = color;
    });
})();
