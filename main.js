let places = [];

const domStringBuilder=(arrayToPrint)=>{
    console.log(arrayToPrint);

};

function executeThisCodeAfterFileLoads(){
    const data= JSON.parse(this.responseText);
    places = data.rides;
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

const init=()=>{
    getPlacesData();
};

init();