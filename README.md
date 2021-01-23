# Overview

## What is this project?

The goal of this project is to create a mobile web app that shows you [nearby Wikipedia entries](https://thenextweb.com/media/2013/05/29/wikipedia-surfaces-articles-based-on-your-location-and-wants-you-to-add-photos-with-your-mobile-phone/).

## How does it work?

Upon opening the app, users can pan and zoom to discover points of interest. They can also give the app access to their location to find points of interest near them.

The app will work in many of the same ways as [whats-near.me](https://whats-near.me) (on which our project is based).

For additional details, please check out the [project brief](PROJECT-BRIEF.md).

## More details for contributors

🎉  If you’re a Collab Lab participant, first of all: WELCOME! We’re so excited to work with you and collaborate on something amazing.

### Make your first contribution!

The first thing you will want to do before your kick-off call is make your first contribution to this repo. This will help make sure you’re ready to go on day one.

- Get this project set up locally by following the instructions [below in this README](#project-setup).
- Add your name to the [CONTRIBUTORS.md](CONTRIBUTORS.md) file
  - Be sure to do this from your local environment and not from GitHub in your browser. The purpose (aside from highlighting our amazing team) is to make sure you’re local environment is all set up and ready to go come day 1!
  - Commit to the `main` branch and push it up to the remote repo. (Over the next 8 weeks, we will rely on feature branches as we collaborate on the project, but for this task committing to `main` will do just fine.)

### What else should contributors know?

For additional details on how your cohort will operate, please check out the [project brief](PROJECT-BRIEF.md).

<hr>

# Project setup

## Download Node and NPM

* `npm` is distributed with Node.js which means that when you download Node.js, you automatically get `npm` installed on your computer.
* Follow the [instructions here to install Node.js and `npm`](https://nodejs.org/en/).

## Clone project locally

* On GitHub, navigate to the repo for your cohort’s project (you’re probably there right now, click the "Code" tab at the top).
![screenshot of "Code" tab on GitHub](https://cdn.zappy.app/7751e7784910a8c64b47106e24fd3dd1.png)
* Click the green "Clone or download" button and copy the web URL.
![screenshot of how to copy the web URL for a GitHub repo](https://cdn.zappy.app/c5fa2c9e72f6cfbd15fb27f4ed2dc898.png)
* From your terminal, `cd` into the directory where you want this project to live.
![screenshot of how to navigate folders in terminal](https://cdn.zappy.app/8a4302d1262bc08fa61e8cd2f3b7c3b8.png)
* Once you’re in the directory, type `git clone` followed by the web URL you just copied to your clipboard from GitHub.
![screenshot of how to git clone](https://cdn.zappy.app/7a9553b7cc4949beecd8db6f32e631a4.png)
* Then navigate into the project by typing `cd` followed by the project directory’s name.
![screenshot of how to cd into the project directory](https://cdn.zappy.app/62e50c2658f91f01b22383d04c5a5e3a.png)

## Update dependancies

* Once you have the project locally and you and in the project directory, you’ll want to update all the project’s dependancies. To do so, type the following into your terminal: `npm update`
![screenshot of npm update in the terminal](https://cdn.zappy.app/b7619c19e38166329334430335746d3b.png)
* Maybe take a sip of coffee or check in on Twitter, this could take a minute—don’t worry.

## Access the project in your browser

* After you’ve cloned the project locally and updated the dependancies, you should be able to see the project at `localhost:3000`.
![screenshot of the react project](https://cdn.zappy.app/30d5733fe9abc6d74d3adde2d046c101.png)


🎉 You did it! You’re ready to start contributing. Don’t forget to complete the first task by adding your name to [CONTRIBUTORS.md](CONTRIBUTORS.md) from your local enviroment, committing those changes, and creating a pull request.

<hr>

# Boilerplate information

Everything in this section is automatically generated when you create a new app using `create-react-app`. These details can be really helpful in learning how to launch and manage your React app with `npm`.

## ↓↓↓ create-react-app boilerplate ↓↓↓

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
