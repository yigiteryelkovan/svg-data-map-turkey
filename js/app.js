/**
 * Created by Yigiter on 28.03.2017.
 */
var map = document.querySelector('#map')
var paths = document.querySelectorAll('.map__image a')
var links = document.querySelectorAll('.map__list a')

if(NodeList.prototype.forEach === undefined){
    NodeList.prototype.forEach = function (callback) {
        [].forEach.call(this, callback)
    }
}

var activeArea = function (id) {
    map.querySelectorAll('.is-active').forEach(function (item) {
        item.classList.remove('is-active')
    })

    if (id !== undefined){
        document.querySelector('#list-'+id).classList.add('is-active')
        document.querySelector('#TR-'+id).classList.add('is-active')
    }
}
paths.forEach(function (path) {
    var id
    path.addEventListener('mouseenter', function () {
        id = this.id.replace('TR-','')
        activeArea(id)
    })

    path.addEventListener('click', function () {
        // When the user clicks the area, open the modal
        modal.style.display = "block";
        //$("#modalheader").text("Updated Text");
        document.getElementById("modalheader").innerHTML = "New text!"+id;
    })
})

links.forEach(function (link) {
    link.addEventListener('mouseenter', function () {
        var id = this.id.replace('list-','')
        activeArea(id)
    })
})

map.addEventListener('mouseover',function () {
    activeArea()
})


// Get the modal
var modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}