function signup() {
    document
        .getElementById("signup-form")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            const fullName = document.getElementById("full-name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            const userData = {
                fullName: fullName,
                email: email,
                password: password,
            };
            localStorage.setItem("userData", JSON.stringify(userData));
            alert("Thank you for signing up with Cartier!");
            // Optionally, you can redirect to a login page or clear the form
            document.getElementById("signup-form").reset();
            window.location.href = "cartier.html";
        });
}

function login() {
    document
        .getElementById("login-form")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            // Retrieve stored user data from local storage
            const storedUserData = localStorage.getItem("userData");
            if (storedUserData) {
                const userData = JSON.parse(storedUserData);
                if (email === userData.email && password === userData.password) {
                    alert("Welcome Back " + userData.fullName + "!");
                    window.location.href = "cartier.html";
                } else {
                    alert("Invalid email or password!");
                }
            } else {
                alert("You are not registered. Please sign up first!");
            }
        });
}
