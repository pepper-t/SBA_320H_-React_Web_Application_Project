# Goal: To create a website application based on the following objectives:
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
a. Application Built with React JS/TS and CSS\\\\\\\\\\\\\\\\\\\\\
b. Use AJAX to make a request to an external data source like OMDB api, and \\\\\\\\\\\
insert some of the data retrieved into the DOM.\\\\\\\\\\\\\\\\\\\\
c. Use at least 2 react hooks\\\\\\\\\\\\\\\\\\\\
d. Commit Frequently- at least 8 commits\\\\\\\\\\\\\\\\\\\\
e. A README.md file in your GitHub repository with:\\\\\\\\
 Explanations of the technologies used.\\\\\\\\
Explanations of the approach taken.\\\\\\\\\\\\\\\\\\\
Usage instructions, if relevant.\\\\\\\\\\\\\\\\
Unsolved problems.\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


## Web Application: HouseTrap Free Zone 

This is a basic and different version of the Capstone project. It is an educational website application for aspiring real estate investors who want to know the best way to learn how to invest in real estate without getting scammed. 

EXTERNAL SOURCE: I have chosen OpenLibrary.org as the source to use. There are numerous books in the real estate investment niche.

## Development Process

To get started on the frontend I installed:
Vite: npm create vite@latest .
Axios: npm i axios
React Router: npm i react-router-dom //I realize I no longer needed a Router

I updated the App.jsx to reflect that the url is a free public api url without an api key.

The React Hooks: I used useState and useEffects


## Errors

http://localhost:5173 is blank

I added the Open Library api code to App.jsx

I also watched a YouTube Video: "Book Search App With Open Library Search API Using React JS | React JS Project For Beginners" - GeekProbin

to get a better understanding of how to integrate the Open Library api url into my code.

* * *
The script is working but now the images take up the whole width of the page. I will adjust in the css files
The pages that I am using are: 

App.jsx
/components/BookList.jsx
/components/Form.jsx
/components/BookList.css
/components/Form.css


### Helpful Sources

YouTube Video: "Book Search App With Open Library Search API Using React JS | React JS Project For Beginners" - GeekProbin - According to the comments section there were flaws in the code, whci led to errors.

Medium: Article for creating a simple book search app using React and the Open Library API from scratch - https://medium.com/@kol3wang/building-a-beginner-friendly-book-search-and-library-with-react-7b964f8e615c 

Dev.To: https://dev.to/fonyuygita/your-gateway-to-building-readtrackr-mastering-the-open-library-api-j9n 
Note: This article presenting info that was wrong. Many of the requests in the code were outside the components, according to Ai which is why it did not work. But even when the script was fixed it did not operate properly. 

A clickable search box appeared but was not responsive.

### Starting Over

I went back and used the codes for App.jsx and commented out the last two updates.
I added Form.css and BookList.css with some suggestions from AI and using React_Superhero frontend code done in class (2/18/26).

The app is identifiable and functioning properly. I wish I had more time to style it. Most of the time was spent debugging the code.

I deleted the unnecessary files: NavBar.jsx, BookDetails.jsx, and Headers.jsx in github because they were not necessary.