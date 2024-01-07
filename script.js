let nob = document.getElementById("No")

nob.addEventListener("mousemove", function() {
    let alto = random(1,10)
    let ancho = random(1,10)
    console.log(alto, ancho)
    nob.style.gridRow = alto;
    nob.style.gridColumn = ancho;

    })


function random(min,max) {
    let numero = Math.floor(Math.random() * (max - min + 1) + min)
    return numero
}

let sib = document.getElementById("Si")

sib.addEventListener("click", function() {
    document.getElementById("p").removeAttribute("hidden")
    console.log("click")
    document.getElementById("1").style.color = "transparent";
    document.getElementById("Si").style.display = "none";
    document.getElementById("No").style.display = "none";
})
document.getElementById('Si').addEventListener('click', function() {
    // Rivelare l'elemento <p>
    document.getElementById('p').style.display = 'block';

    // Rivelare l'elemento imgContainer (contenente l'immagine)
    document.getElementById('imgContainer').style.display = 'block';
});
