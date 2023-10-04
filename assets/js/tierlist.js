//Functions that make the tierlist images drag/droppable

function allowDrop(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragDrop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

//Fetch Cat Images

var apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10'

var catBtn = document.querySelector('#image-getter')

var resetBtn = document.querySelector('#image-resetter')

function getImages(){
    fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        for (var i = 0; i < data.length; i++) {
            var imgEl = document.createElement('img');
            var imageSpawner = document.querySelector('#image-spawner');
            imgEl.src = data[i].url;
    
            imgEl.setAttribute('id', 'div' + [i] );
            imgEl.setAttribute('class', 'tier-img');
            imgEl.setAttribute('draggable', 'true');
            imgEl.setAttribute('ondragstart', 'dragStart(event)');
            imageSpawner.appendChild(imgEl);
          }
    })
}

//Start Sorting Button

catBtn.addEventListener('click', getImages)

//Reset Sorter Button

resetBtn.addEventListener('click', function(){

    document.querySelector(".tier-img").remove();

})