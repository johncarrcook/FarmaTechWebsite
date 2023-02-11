
var slideposition = 1;
var timer;
SlideShow();

// default carousel
function SlideShow() {
    var i;
    var slides = document.getElementsByClassName("Carousel-Containers")
    for (i = 0; i < slides.length; i ++) {
        slides[i].style.display = "none";
    }
    slideposition++
    if (slideposition > slides.length) {slideposition = 1}
    slides[slideposition-1].style.display = "block";
    timer = setTimeout(SlideShow, 4000) // Change image every 8 seconds    
}

// forward/back controls
function PlusSlides(n) {
    clearTimeout(timer);
    slideposition += n
    var i;
    var slides = document.getElementsByClassName("Carousel-Containers");
    if (slideposition > slides.length) {slideposition = 1}
    else if (slideposition < 1) {slideposition = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideposition-1].style.display = "block";
    timer = setTimeout(SlideShow, 4000) // Change image every 8 seconds 
}