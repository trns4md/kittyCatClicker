let display = document.getElementsByClassName("displayCat");
let nameList = document.getElementsByClassName("catName");
let catPost = document.getElementsByClassName("catPic");
let counter = document.getElementsByClassName("clickCount");


const rollCall = [{
        name: 'Charlie',
        image: 'images/charlie.jpg',
    },
    {
        name: 'Mugsy',
        image: 'images/mugsy.jpg',
    },
    {
        name: 'Pumpkin',
        image: 'images/orangeTabby.jpg',
    },
    {
        name: 'Scooby Gang',
        image: 'images/kittyLitter.jpg',
    },
    {
        name: 'Violet',
        image: 'images/violet.jpg',
    }
];


for (i = 0; i < rollCall.length; i++) {
    let name = rollCall[i].name;
    let image = rollCall[i].image;
    let moves = 0;
    let li = document.createElement('li');
    let node = document.createTextNode(name);
    li.appendChild(node);


    let ul = document.getElementById('catList');
    ul.appendChild(li);




    // li.addEventListener('click', function(name, image, moves) {
    //moves++;
    // click.innerHTML = "Clicks:" + moves;
};