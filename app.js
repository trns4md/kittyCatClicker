const kittyLitter = "Kitty Litter";
const charlie = "Charlie Cat";



let catPicture = document.getElementById('kittyClowder');
let moves = 0;
catPicture.addEventListener('click', function() {
    let click = document.getElementById('catCounter');

    moves++;
    click.innerHTML = "Clicks:" + moves;
});

let nextPicture = document.getElementById('charlieCat');
let choose = 0;
nextPicture.addEventListener('click', function() {
    let click = document.getElementById('nextCounter');

    choose++;
    click.innerHTML = "Clicks:" + choose;
});