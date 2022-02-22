const inquirer = require("inquirer");
inquirer.prompt([
    {
        type: "checkbox",
        message: "选择一至多种颜色：",
        name: "color",
        choices: [
            "red",
            "blue",
            "green",
            "pink",
            "orange"
        ]
    }
]).then(answer => {
    console.log(answer);
});