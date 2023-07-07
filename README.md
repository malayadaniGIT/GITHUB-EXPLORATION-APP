# GITHUB EXPLORATION APP
## WEBSITE LINK-https://malayadanigit.github.io/GITHUB-EXPLORATION-APP/
## Description:
### This project is a GitHub Exploration App that allows users to explore GitHub and view user details and repositories.
## ABOUT PROJECT-
### This GitHub Exploration application consists of three web pages: Index.html, Home.html, and Details.html.
### This project is built only in HTML, CSS, JavaScript and some external libraries for Css
## index.html:
### The index.html file represents the login page of the application. It contains a form where users can enter their login credentials, including email, email password, GitHub username, and Git password. Upon form submission, the JavaScript code makes a request to the GitHub API to retrieve user data based on the provided username. If the request is successful, the user data is stored in the browser's local storage, and the user is redirected to the home.html page.

## home.html:
### The home.html file serves as the main dashboard page of the application. It retrieves user data from the local storage and displays a greeting message to the user. It also fetches a list of GitHub users from the GitHub API and dynamically generates cards for each user. These cards display the user's avatar, username, and some basic information like followers, following, and repositories. The JavaScript code handles the API requests, dynamically generates the cards, and provides functionality to search for specific user details and navigate to the details.html page.

## details.html:
### The details.html file displays detailed information about a specific GitHub user. It retrieves the username from the URL query parameter and makes an API request to fetch the user's data from the GitHub API. The retrieved data includes the user's avatar, name, bio, number of followers, following, and repositories. The JavaScript code handles the API request, populates the user's information on the page, and dynamically generates links to the user's repositories.

#### Overall, the project allows users to log in, explore GitHub users, view their details, and navigate between different pages. The JavaScript code interacts with the GitHub API to fetch user data, store it locally, and dynamically generate the necessary elements on the pages.
## You can see like this of anyone's Profile- ![image](https://github.com/malayadaniGIT/GITHUB-EXPLORATION-APP/assets/109133343/70a42742-2c3b-4033-b18b-16a2574353e0)
