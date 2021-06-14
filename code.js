function stringWay(id, anime, character, photos){
    
    let elements = `<div class="card"><div id=id${id}
     class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div 
     class="carousel-item active"><img src=${photos[0]} class="d-block w-100" alt=${anime}></div><div 
     class="carousel-item"><img src=${photos[1]} class="d-block w-100" alt=${anime}> </div><div 
     class="carousel-item"><img src=${photos[2]} class="d-block w-100" alt=${anime}></div></div><button 
     class="carousel-control-prev" type="button" data-bs-target=#id${id} data-bs-slide="prev"><span 
     class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button 
     class="carousel-control-next" type="button" data-bs-target=#id${id} data-bs-slide="next"><span 
     class="carousel-control-next-icon" aria-hidden="true"></span><span 
     class="visually-hidden">Next</span></button></div><div class="card-body center"><h5 
     class="card-title">${character}</h5><p class="card-text">${anime}</p></div></div>`;

     let colmDiv = document.createElement("div");
     colmDiv.className = "col";

     colmDiv.innerHTML = elements;

    return colmDiv;
}

function createWay(id, anime, character, photos){
    // there is 19 variables with createElement statement, and 19 className statement
    let colmDiv = document.createElement("div");
    colmDiv.className = "col";
    let card = document.createElement("div");
    card.className = "card";

    let carousel = document.createElement("div");
    carousel.id = "id" + id;
    carousel.className = "carousel slide";
    carousel.dataset.bsRide = "carousel";
    card.appendChild(carousel);

    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    img1.src = photos[0];
    img2.src = photos[1];
    img3.src = photos[2];
    img1.className = img2.className = img3.className = "d-block w-100";
    img1.alt = img2.alt = img3.alt = anime;

    let imgDiv1 = document.createElement("div");
    let imgDiv2 = document.createElement("div");
    let imgDiv3 = document.createElement("div");
    imgDiv1.className = "carousel-item active";
    imgDiv2.className = imgDiv3.className = "carousel-item";
    imgDiv1.appendChild(img1);
    imgDiv2.appendChild(img2);
    imgDiv3.appendChild(img3);

    let imgDivs = document.createElement("div");
    imgDivs.className = "carousel-inner";
    imgDivs.appendChild(imgDiv1);
    imgDivs.appendChild(imgDiv2);
    imgDivs.appendChild(imgDiv3); //imgDivs is sparate append
    carousel.appendChild(imgDivs);

    let button1span1 = document.createElement("span");
    let button1span2 = document.createElement("span");
    button1span1.className = "carousel-control-prev-icon";
    button1span1.ariaHidden = "true";
    button1span2.className = "visually-hidden";
    button1span2.innerText = "Previous";

    let button1 = document.createElement("button");
    button1.className = "carousel-control-prev";
    button1.type = "button";
    button1.dataset.bsTarget = "#id" + id;
    button1.dataset.bsSlide = "prev";
    button1.appendChild(button1span1);
    button1.appendChild(button1span2);

    let button2span1 = document.createElement("span");
    let button2span2 = document.createElement("span");
    button2span1.className = "carousel-control-next-icon";
    button2span1.ariaHidden = "true";
    button2span2.className = "visually-hidden";
    button2span2.innerText = "Next";
    
    let button2 = document.createElement("button");
    button2.className = "carousel-control-next";
    button2.type = "button";
    button2.dataset.bsTarget = "#id" + id;
    button2.dataset.bsSlide = "next";
    button2.appendChild(button2span1);
    button2.appendChild(button2span2);
    carousel.appendChild(button1);
    carousel.appendChild(button2);

    let h5 = document.createElement("h5");
    let p = document.createElement("p");
    h5.className = "card-title";
    h5.innerText = anime;
    p.className = "card-text";
    p.innerText = character;

    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body center";
    cardBodyDiv.appendChild(h5);
    cardBodyDiv.appendChild(p);

    card.appendChild(cardBodyDiv);

    colmDiv.appendChild(card); // TODO:
    return colmDiv;
}



// result in function onw (string Way)
document.querySelector("body").appendChild(stringWay(2, "nami", "onepiece", ['./images/1.jpg', './images/2.jpg', './images/3.jpg']));


// // result in function two (create Way)
// document.querySelector("body").appendChild(createWay(1, "nami", "onepiece", ['./images/1.jpg', './images/2.jpg', './images/3.jpg']));