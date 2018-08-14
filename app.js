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
    adminShow: false,
};
const octopus = {

    init: function() {
        //create the cat name list
        model.currentCat = model.cats[0];
        //tell the view to render name list
        catDetails.init();
        catView.init();
        adminView.init();
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
    },
    adminDisplay: function() {
        if (model.adminShow === false) {
            model.adminShow = true;
            adminView.show();
        } else if (model.adminShow === true) {
            model.adminShow = false;
            adminView.hide();
        }
    },
    adminSave: function() {
        model.currentCat.name = admin.newCatName;
        model.currentCat.image = admin.newSite;
        model.currentCat.newClicks = admin.newClicks;
        catView.render();
        catDetails.render();
        adminView.hide();
    },
    adminCancel: function() {
        adminView.hide();
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
const adminView = {
    init: function() {
        let admin = document.getElementById('button');
        let save = document.getElementById('save');
        let cancel = document.getElementById('cancel');

        admin.addEventListener('click', function() {
            octopus.adminDisplay();
        });
        save.addEventListener('click', function() {
            octopus.adminSave();
        });
        cancel.addEventListener('click', function() {
            octopus.adminCancel();
        });
        this.render();
    },
    render: function() {
        let newCurrentCat = octopus.getCurrentCats();
        let box = document.getElementById('hidden-box');
        let newCatName = document.getElementById('name');
        let newSite = document.getElementById('imgURL');
        let newClicks = document.getElementById('clicks');

        newCatName.value = newCurrentCat.name;
        newSite.value = newCurrentCat.image;
        newClicks.value = newCurrentCat.clickCount;
    },
    show: function() {
        let change = document.getElementById('hidden-box');
        change.style.display = "block";
    },
    hide: function() {
        change.style.display = "none";
    }


};
octopus.init();