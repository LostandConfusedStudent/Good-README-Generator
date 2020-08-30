var inquirer = require("inquirer");
var fs = require('fs');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project title?"
    },

    {
        type: "input",
        name: "description",
        message: "Description?"
    },

    {
        type: "input",
        name: "installation",
        message: "Installation instructions?"
    },

    {
        type: "input",
        name: "usage",
        message: "Usage information?"
    },

    {
        type: "input",
        name: "contribution",
        message: "Contribution?"
    },

    {
        type: "input",
        name: "test",
        message: "Test instructions?"
    },

    {
        type: "input",
        name: "license",
        message: "License?"
    },

    {
        type: "input",
        name: "badge",
        message: "Badge?"
    },

    {
        type: "input",
        name: "profile",
        message: "GitHut profile?"
    },

    {
        type: "input",
        name: "email",
        message: "Email address?"
    },

];

inquirer.prompt(questions)
.then(function(data) {

    var filename = data.name.toLowerCase().split(" ").join("") + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), function(err) {

        if (err) {
            return console.log(err);
        };
    
        console.log("worked");
    });
    
})

// function to write README file
function writeToFile(fileName, data) {






};

// function to initialize program
function init() {

}

// function call to initialize program
init();
