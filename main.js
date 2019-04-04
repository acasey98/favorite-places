const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

let places = [];

const domStringBuilder = (arrayToPrint) =>{
    let domString = '';
    arrayToPrint.forEach((place)=> {
        
        
            domString += `<div class="col-sm-3">`;
            domString += `  <div class="card">`;
            domString += `     <div class="card-body">`;
            domString += `      <img class='card-img-top' src=${place.cityImage}>`;
            domString += `      <p class="card-text">${place.cityName}</p>`;
            domString += `      <p class="card-text">State: ${place.cityState} per pack.</p>`;
            domString += `      <p class="card-text">Favorite Restaurant: ${place.favoriteRestaurant}</p>`;
            domString += `     </div>`;
            domString += `  </div>`;
            domString += `</div>`;     
    });
    printToDom('place-list', domString);
};


function executeThisCodeAfterFileLoads(){
    const data= JSON.parse(this.responseText);
    places = data.places;
    domStringBuilder(data.places);
};

function executeThisCodeIfXHRFails(){
    console.error('???')
};



const getPlacesData=()=>{
    const myRequest= new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
    myRequest.addEventListener('error', executeThisCodeIfXHRFails);
    myRequest.open('GET', './data/places.json');
    myRequest.send();
};

/*const buttonEvents = () => {
    document.getElementById('dog').addEventListener('click', buttonClick);
    document.getElementById('cat').addEventListener('click', buttonClick);
    document.getElementById('dino').addEventListener('click', buttonClick);
    document.getElementById('All').addEventListener('click', buttonClick);
    document.getElementById('test').addEventListener('click', checkTrue);
  }; */

const init=()=>{
    getPlacesData();
    //buttonEvents();
};

init();