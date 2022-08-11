
function getplayer1() {
    var player = document.getElementById('player').value;
    lista = player.split(",");
    document.getElementById('p1').textContent = 'Players: ' + lista;
}
function pickrandom () {
    getplayer1()
    document.getElementById('resultado').textContent = "Result: "
    for (let i = 0; i < 5; i++) {
        var numSorteado = Math.floor(Math.random() * lista.length)
        var lista1 = document.getElementById('resultado').textContent;
        if (lista[numSorteado] === undefined) {
            document.getElementById('resultado').textContent = lista1;
        } else {
            if (i === 4) {
                document.getElementById('resultado').textContent = lista1 + (lista[numSorteado] + '.')
            } else {
                document.getElementById('resultado').textContent = lista1 + (lista[numSorteado]) + ', '
                lista.splice(numSorteado, 1)
            }

        }
    }
}
    /* Depuração
    console.log(lista1)
    console.log(lista[numSorteado])
    */
        function reset_animation() {
            var el = document.getElementById('resultado');
            el.style.animation = 'none';
            el.offsetHeight;
            el.style.animation = null;
        }
window.onload = doStuff;

function doStuff() {
    if (document.querySelector('.checkbox11').checked) {
        document.getElementById("resultado").className="form-control animated";
    } else {
        document.getElementById("resultado").className="form-control";
    }
}

