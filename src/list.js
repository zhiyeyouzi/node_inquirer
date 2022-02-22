const inquirer = require("inquirer");
inquirer.prompt([
    {
        type: "list",
        message: "请选择一个选项：",
        name: "fruit",
        default: "Apple",
        prefix: "☆☆☆☆",
        suffix: "****",
        choices: [
            { key: "苹果", value: "Apple" },
            { name: "梨", value: "pear" },
            { key: "香蕉", value: "Banana" }
        ],
        filter: function (val) { // 使用filter将值变为大写
            return val.toUpperCase();
        }
    }
]).then(answer => {
    console.log(answer);
});