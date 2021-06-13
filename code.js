function stringWay(id, anime, character, photos){
    
    let elements = `<div class="card"><div id=${id}
     class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div 
     class="carousel-item active"><img src=${photos[0]} class="d-block w-100" alt=${anime}></div><div 
     class="carousel-item"><img src=${photos[1]} class="d-block w-100" alt=${anime}> </div><div 
     class="carousel-item"><img src=${photos[2]} class="d-block w-100" alt=${anime}></div></div><button 
     class="carousel-control-prev" type="button" data-bs-target=${id} data-bs-slide="prev"><span 
     class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button 
     class="carousel-control-next" type="button" data-bs-target=${id} data-bs-slide="next"><span 
     class="carousel-control-next-icon" aria-hidden="true"></span><span 
     class="visually-hidden">Next</span></button></div><div class="card-body center"><h5 
     class="card-title">${character}</h5><p class="card-text">${anime}</p></div></div>`;

     let colmDiv = document.createElement("div");
     colmDiv.className = "col";

     colmDiv.innerHTML = elements;


    return colmDiv;
}

function createWay(id, anime, character, photos){
     let colmDiv = document.createElement("div");
     colmDiv.className = "col";



    return colmDiv;
}

stringWay(1, "nami", "onepiece", ['./11', './22', './33']);
createWay(1, "nami", "onepiece", ['./11', './22', './33']);
