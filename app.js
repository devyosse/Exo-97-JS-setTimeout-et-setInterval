let timeout = document.getElementById('timeout');
let Divtimeout = document.getElementById('timeout-div');

timeout.addEventListener('click', () => {
    let newDiv = document.createElement('div');
    newDiv.style.color = 'orange';
    newDiv.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !"
    Divtimeout.appendChild(newDiv);
})

let boutonInterval = document.getElementById('interval-start');
let intervalDiv = document.getElementById('interval-div');
let intervalStop = document.getElementById('interval-stop');
let decompte = 60;


boutonInterval.addEventListener('click', () => {
    let inter = setInterval(function () {
        if (decompte > 0) {
            intervalDiv.innerHTML = "Décompte : " + decompte;
            decompte--;
        }
        }, 1000);
    intervalStop.addEventListener('click', function () {
        clearInterval(inter);
    })
})
