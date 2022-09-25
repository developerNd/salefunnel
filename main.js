// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    document.getElementById("hidden_input").style.display = "none";
    document.getElementById("modalText").style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("hidden_input").style.display = "none";
    }
}

let email = document.getElementById("email");
email.addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("hidden_input").style.display = "block";
        document.getElementById("modalText").style.display = "none";
    }, 1000);
});
