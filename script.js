function bookTable(){

let name = document.querySelector('input[type="text"]').value;
let phone = document.querySelector('input[type="tel"]').value;
let date = document.querySelector('input[type="date"]').value;
let bookingType = document.getElementById("bookingType").value;
let persons = document.getElementById("persons").value;
let time = document.getElementById("time").value;
let message =
"New Booking\n" +
"Name: " + name + "\n" +
"Mobile: " + phone + "\n" +
"Date: " + date;
let url = "https://wa.me/918605030382?text=" + encodeURIComponent(message);

window.location.href = url;

}
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    index++;
    if (index > slides.length) {
        index = 1;
    }

    slides[index - 1].style.display = "block";
    setTimeout(showSlide, 3000);
}

showSlide();
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
function closePopup(){
    document.getElementById("welcomePopup").style.display = "none";
}
