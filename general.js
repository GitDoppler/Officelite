const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 47);
console.log(futureDate);

function updateCountdown() {
    const currentDate = new Date();
    const diff = futureDate - currentDate;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;


    day.innerHTML = d;
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
}

setInterval(updateCountdown, 1000);


//SlideIn Animations
function leftSlide() {
    document.querySelector(".hero-content").style.display = "flex";
    document.querySelector(".hero-image").style.display = "flex";
}

leftSlide();


//Products
const options = {
    root: null,
    threshold: 0.5,
    rootMargin: "0px"
};

const products = document.querySelectorAll(".product");
console.log(products.length);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });
}, options);

products.forEach((item) => {
    observer.observe(item);
});


//Loader 
const elementLoading = document.querySelectorAll(".loading");
function showPage() {
    document.getElementById("loader").style.display = "none";
    elementLoading.forEach((obj) => {
        obj.style.display = "block";
        console.log("auyhwdaw");
    });
};

setTimeout(showPage, 1000);

