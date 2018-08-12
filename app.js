const model = {
    currentCat: null,
    cats: [{
            name: 'Charlie',
            image: 'images/charlie.jpg',
            clickCount: 0,
        },
        {
            name: 'Mugsy',
            image: 'images/mugsy.jpg',
            clickCount: 0,
        },
        {
            name: 'Pumpkin',
            image: 'images/orangeTabby.jpg',
            clickCount: 0,
        },
        {
            name: 'Scoobies',
            image: 'images/kittyLitter.jpg',
            clickCount: 0,
        },
        {
            name: 'Violet',
            image: 'images/violet.JPG',
            clickCount: 0,
        }
    ],
};
const octopus = {

    init: function() {
        //create the cat name list
        model.currentCat = model.cats[0];
        //tell the view to render name list
        catDetails.init();
        catView.init();

    },
    getCurrentCats: function() {
        //changes the current cat in the model
        return model.currentCat;
    },
    getCats: function() {
        return model.cats;
    },
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },
    //run the click counter method
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }

};
const catView = {
    //view of cat details view
    init: function() {
        this.catDisplay = document.getElementById("displayCat");
        this.catName = document.getElementById("catName");
        this.catPic = document.getElementById("catPic");
        this.clickCount = document.getElementById("clickCount");

        this.catDisplay.addEventListener('click', function(e) {
            octopus.incrementCounter();
        });
        this.render();
    },

    render: function() {
        let currentCat = octopus.getCurrentCats();
        this.clickCount.textContent = currentCat.clickCount;
        this.catName.textContent = currentCat.name;
        this.catPic.src = currentCat.image;
    }
};

const catDetails = {

    //view of cat name list
    init: function() {
        this.catList = document.getElementById('catList');
        this.render();
    },

    //render method
    render: function() {
        var cat, elem, i;
        //get the cats listed 
        const cats = octopus.getCats();
        //empty the cat list
        this.catList.innerHTML = '';
        //loop over the cats
        for (i = 0; i < cats.length; i++) {
            cat = cats[i];

            const node = document.createElement('li');
            const textNode = document.createTextNode(cat.name);
            node.appendChild(textNode);

            node.addEventListener('click', function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            }(cat));
            this.catList.appendChild(node);
        }

    }

};
octopus.init();