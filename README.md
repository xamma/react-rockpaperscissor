### Just some notes for setup

npm i react-router-dom --save  
npm i react-icons --save  
import {itemName} from "react-icons/fa"  
npm install gh-pages --save-dev  

Add a homepage property in this format: ```https://{username}.github.io/{repo-name}``` in ```package.json```.  
Add a predeploy property and a deploy property to the scripts object:  
```
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```