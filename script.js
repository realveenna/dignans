/* Registration */
document.addEventListener("DOMContentLoaded", () => {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const registerForm = document.getElementById("register-form");

    function clearInput() {
        document.getElementById("confirm-password").value = "";
        document.getElementById("password").value = "";
        document.getElementById("password-label").style.color = "";
        document.getElementById("confirm-password-label").style.color = "";
        document.getElementById("password").style.borderColor = "";
        document.getElementById("confirm-password").style.borderColor = "";
        document.getElementById("incorrect-password").innerHTML = "";
    }

    registerForm.addEventListener("submit", (event) => {
        if (password.value !== confirmPassword.value) {
            event.preventDefault(); 
            document.getElementById("incorrect-password").innerHTML = "Password does not match.";
            document.getElementById("password").style.borderColor = "red";
            document.getElementById("confirm-password").style.borderColor = "red";
            document.getElementById("password-label").style.color = "red";
            document.getElementById("confirm-password-label").style.color = "red";
            document.getElementById("password").addEventListener("focus", () => {
                clearInput(); 
            });
        }
        else{
            alert("Successful account registration!");
        }
    });
});


/*Hamburger Menu */
document.querySelector(".hamburger").onclick = function() {
    document.querySelector("nav ul").classList.toggle("active");
    document.querySelector("svg.hamburger-open").classList.toggle("active");
    document.querySelector("svg.hamburger-close").classList.toggle("active");
    document.querySelector(".nav-links").classList.toggle("active");
    this.classList.toggle("is-active"); 
    }

/*Menu Dropdown*/
document.querySelectorAll(".dropdown-class").forEach((menu) => {
    const button = menu.querySelector(".menu-dropdown-btn");
    const menuContent = menu.querySelector(".menu-con");
    const dropdownBtn = menu.querySelector(".menu-dropdown-btn");
    const plusIcon = menu.querySelector(".plus");
    const downIcon = menu.querySelector(".down");

    button.addEventListener("click", () => {
        menuContent.classList.toggle("active");
        dropdownBtn.classList.toggle("active");
        plusIcon.classList.toggle("active");
        downIcon.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const hash = window.location.hash; // Get the current hash (e.g., #party-menu)
    if (hash) {
        const targetSection = document.querySelector(hash); // Find the matching section
        if (targetSection) {
            const menuButton = targetSection.querySelector(".menu-dropdown-btn");
            if (menuButton) {
                menuButton.click(); // Simulate a click
                menuButton.classList.add("active"); // Add a class for styling if needed
            }
        }
    }
});

/* Header Sticky Navigation */
const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        body.classList.remove("scroll-up", "scroll-down"); 
    } else if (currentScroll > lastScroll) {
        body.classList.add("scroll-down");
        body.classList.remove("scroll-up");
    } else {
        body.classList.add("scroll-up");
        body.classList.remove("scroll-down");
    }

    lastScroll = currentScroll;
});

/*Print PDF */
function printPDF() {
    var pdfWindow = window.open('DignansMenu.pdf','_blank');
    pdfWindow.onload = function() {
        pdfWindow.print();
    };
}
