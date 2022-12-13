# Rock, Paper, Scissors with React

This is a project made with the **React.js** Framework and part of a series to learn software-engineering.  

## Visit the website

The Website is hosted with **Github Pages**.  
Find the website here: [react-rockpaperscissor](https://xamma.github.io/react-rockpaperscissor)

### Other projects of the series

***Python:***  
[python-rockpaperscissor](https://github.com/xamma/python-rockpaperscissor)  
[Dockerhub](https://hub.docker.com/repository/docker/xamma/python-rockpaperscissor)  

***Java:***
[java-rockpaperscissor](https://github.com/xamma/java-rockpaperscissor)  
[Dockerhub](https://hub.docker.com/repository/docker/xamma/java-rockpaperscissor)

### Just some notes for setup

npm i react-router-dom --save  
npm i react-icons --save  
import {itemName} from "react-icons/fa"  
npm install gh-pages --save-dev  

Add a homepage property in this format: ```https://{username}.github.io/{repo-name}``` in ```package.json```.  
Add a predeploy property and a deploy property to the scripts object:  
```
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```
Deploy the app
```
npm run deploy -m "Deploy React app to GitHub Pages"
```
