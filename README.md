# my-webdev-boilerplate
my personal webdev boilerplate

Steps to initialize:

1) at terminal:
npm init -y
npm install webpack webpack-cli --save-dev

2) at package.json:
"private": "true",
"scripts": {
  "build": "webpack --mode development",
  "watch": "webpack --mode development --watch",
  "test": "jest",
  "test-watch": "jest --watch",
  "prod": "webpack --mode production"
},

3) at terminal:
npm install --save-dev html-webpack-plugin
npm install --save-dev html-loader
npm install --save-dev style-loader css-loader
npm install --save-dev jest
npx webpack