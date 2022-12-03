# Frontend Challenge:

Create a new React project in Typescript with Create React App or NextJS, the choice is yours. 
For the UI, feel free to use Material UI built components or custom styled components, 
whatever you prefer.

### The website should have 2 pages with proper routing:

1. List of Quotes Page, i.e. /quotes

a. Fetch the list of quotes from an API and display them in a Material UI or custom table;

b. The table should consist of 3 columns, the ID of the Quote, the Quote itself, and the 
Author of the corresponding quote;

c. Add a button to get a random quote, the button should redirect to the random quote 
page defined in (2.);


2. Random Quote, i.e. /random-quote

a. Fetch a random quote from the API;

b. Display the random quote in the centre of the screen with the author below it entered 
as well;

c. Add a button to go back to the list, and a button to get a new random quote;


3. Enrich the Quotes table with additional data

a. To make things interesting, for each row in the quotes table from (1.), make an API call 
to https://genderize.io/ by passing the first name from the Quote Author i.e. https://
api.genderize.io/?name=sarah for Sarah;

b. The above response will give you the gender of the corresponding name;
c. In a new table column i.e. Gender, add the gender from the API response for that row. 

If the Gender is female show a female icon/emoji i.e. 👨 and if the gender is male show 
a male icon/emoji i.e. 👩 ;

The API used to fetch the list of quotes should be either the custom API from the Backend 
challenge above OR use the free API from https://zenquotes.io/ (see documentation)

For random quotes I was using API from https://api.quotable.io/random

The API for fetching list of quotes was from https://dummyjson.com/quotes

And the last API was https://genderize.io/ but while I was working on it I get error '429 Too Many Requests', so I've changed for working API from namsor.com

I hope you'll like my work.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
