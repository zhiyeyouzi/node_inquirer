const inquirer = require("inquirer");
inquirer.prompt([
    {
        type: "input",
        message: "请输入你的姓名：",
        name: "name",
        default: "jay"
    }, {
        type: "input",
        message: "请输入你的年龄：",
        name: "age",
        default: 18,
        validate: (val) => {
            if (val > 10 && val < 120) {
                return val;
            } else {
                return "我猜你绝对不是一个正常人类";
            }
        }
    }
]).then(res => {
    // 用户输入的结果最终会在这里输出
    console.log(res);
});