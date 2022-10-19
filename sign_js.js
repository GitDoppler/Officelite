

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");

const formInput = document.querySelectorAll(".form-input");

const optionsList = document.querySelectorAll(".option");

const basicPack = document.getElementById("basic-pack");
const proPack = document.getElementById("pro-pack");
const ultimatePack = document.getElementById("ultimate-pack");

let open = false;


selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
    console.log(optionsContainer);
    open = true;
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.querySelector(".cock").innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
        o.querySelector("input").checked = true;
        selected.querySelector(".arrow").classList.remove("arrow-active");
        open = false;
    });
});

optionsList.forEach((label) => {
    label.addEventListener("mouseover", () => {
        label.querySelector(".price-line").classList.toggle("activated");
        label.querySelector(".price-pack").classList.toggle("name-active");
    });

    label.addEventListener("mouseout", () => {
        label.querySelector(".price-line").classList.remove("activated");
        label.querySelector(".price-pack").classList.remove("name-active");

    });
});

selected.addEventListener("mouseover", () => {
    selected.querySelector(".arrow").classList.toggle("arrow-active", true);
    selected.querySelector(".price-line").classList.toggle("activated");
    selected.querySelector(".price-pack").classList.toggle("name-active");
});

selected.addEventListener("mouseout", () => {
    if (optionsContainer.classList.contains("active") == false) {
        selected.querySelector(".arrow").classList.toggle("arrow-active", false);
    }
    selected.querySelector(".price-line").classList.remove("activated");
    selected.querySelector(".price-pack").classList.remove("name-active");

});




formInput.forEach((input) => {

    input.addEventListener("focus", () => {
        if (input.value == "") {
            input.parentElement.querySelector(".name-label").classList.toggle("name-label-active");
        }
    });

    input.addEventListener("blur", () => {
        if (input.value == "") {
            input.parentElement.querySelector(".name-label").classList.remove("name-label-active");
        }
    });

});


let loc = window.location.search;
if (loc[loc.length - 2] == 'o' && loc[loc.length - 1] == 'n') {
    if (loc[1] == "b") {
        selected.querySelector(".cock").innerHTML = basicPack.innerHTML;
    }
    if (loc[1] == "p") {
        selected.querySelector(".cock").innerHTML = proPack.innerHTML;
    }
    if (loc[1] == "u") {
        selected.querySelector(".cock").innerHTML = ultimatePack.innerHTML;
    }

};

//Slide In Animations
function leftSlide() {
    document.querySelector(".Hero").style.display = "block";
}

leftSlide();






