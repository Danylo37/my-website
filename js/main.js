document.addEventListener("DOMContentLoaded", function () {
    /**********************************
     *          Burger menu           *
     **********************************/
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector(".header").classList.toggle("open");
    });

    document.getElementById("menu").addEventListener("click", (event) => {
        event._isClickWithInMenu = true;
    });

    document.getElementById("burger").addEventListener("click", (event) => {
        event._isClickWithInMenu = true;
    });

    document.body.addEventListener("click", (event) => {
        if (event._isClickWithInMenu) return;
        document.querySelector(".header").classList.remove("open");
    });

    const navButtons = document.querySelectorAll("#menu a");
    navButtons.forEach((button) => {
        button.addEventListener("click", () => {
            document.querySelector(".header").classList.remove("open");
        });
    });

    /**********************************
     *        Form validation         *
     **********************************/
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.style.color = "red";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        if (message.length < 3) {
            formMessage.textContent = "Message must be at least 3 characters long.";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "Thank you for your message!";
        formMessage.style.color = "green";
        form.reset();
    });

    /**********************************
     *         Accordion menu         *
     **********************************/
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
