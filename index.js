var inquirer = require("inquirer");
var fs = require('fs');
var generateMarkdown = require("./utils/generateMarkdown.js");

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
        type: "list",
        name: "license",
        message: "License?",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },

    {
        type: "input",
        name: "profile",
        message: "GitHub profile?"
    },

    {
        type: "input",
        name: "email",
        message: "Email address?"
    },

];


// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function (data) {

            var filename = "README.md";

            fs.writeFile(filename, generateMarkdown(data), function (err) {

                if (err) {
                    return console.log(err);
                };

                console.log("worked");
            });

        })
}

// function call to initialize program
init();
