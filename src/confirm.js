const inquirer = require("inquirer");
inquirer.prompt([
    {
        type: "confirm",
        message: "是否现在监听？",
        name: "watch",
        default: true,
        prefix: "❤"
    },
    {
        type: "confirm",
        message: "是否能看到我取决于上面是否通过？",
        name: "pass",
        suffix: "后缀",
        when: function (answer) { // 当watch为true的时候才会到达这步
            return answer.watch//只有我return true才会这个confirm
        }
    }
]).then(answer => {
    console.log(answer);
});