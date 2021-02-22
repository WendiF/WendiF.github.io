var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    console.log("hi")
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n % slides.length].style.display = "block";
}

var input = [];
var konami = ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a"];
document.addEventListener('keydown', event => {
    if (event.key.toLowerCase() === konami[input.length]) {
        input.push(event.key.toLowerCase());
    } else {
        input = [];
    }
    if (JSON.stringify(input)===JSON.stringify(konami)) {
        getGIF()
    }

})

var xhr = new XMLHttpRequest();

let animals = ["dragon", "shark", "hamster", "bat", "seal", "penguin"];
function getGIF() {
    xhr.addEventListener('load', function () {
        let url = JSON.parse(xhr.responseText)["data"][Math.floor(Math.random() * 25)].url;

        alert('Konami Code activated! Redirecting you to cuteness.')
        window.location.href = url;
    })

    let animal = animals[Math.floor(Math.random() * animals.length)]

    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=QCaVYsJunUh3N1tUajZTN9KgiVtqCAp0&q=cute%20${animal}&limit=25&offset=0&rating=g&lang=en`);
    xhr.send();
}
