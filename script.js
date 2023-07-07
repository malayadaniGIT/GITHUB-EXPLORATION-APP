document.getElementById("RightcontainerTOP").addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var emailPassword = document.getElementById("emailpassword").value;
    var username = document.getElementById("github_username").value;
    var gitPassword = document.getElementById("git_password").value;

    fetch("https://api.github.com/users/" + username)
        .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(function (data) {
            var userData = {
                email: email,
                emailPassword: emailPassword,
                username: username,
                gitPassword: gitPassword,
                githubData: data
            };

            localStorage.setItem("userData", JSON.stringify(userData));
            window.location.href = "Home.html";
        })
        .catch(function (error) {
            console.error(error);
        });
});