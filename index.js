#! /usr/bin/env node 
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let ans = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter Your Name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                console.log("invalid");
            }
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Select Course to Enrolled",
        choices: ["Typescript", "Javascript", "CSS", "HTML", "Python", "Web 3.0"]
    }
]);
const tutionFee = {
    "Typescript": 10000,
    "Javascript": 8000,
    "CSS": 6000,
    "HTML": 5000,
    "Python": 15000,
    "Web 3.0": 20000
};
console.log(`\n Course Fee : ${tutionFee[ans.courses]}\n`);
console.log(` Your Balance : ${myBalance}\n`);
let payMethod = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select Your Payment Method",
        choices: ["Easypaisa", "Jazzcash", "Bank Transfer"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money :",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                console.log("Invalid!!!");
            }
        }
    },
]);
console.log(`You Select ${payMethod.payment} Payment Method \n`);
const courseFee = tutionFee[ans.courses];
const payAmount = parseFloat(payMethod.amount);
if (courseFee === payAmount) {
    console.log(`"Congratulations , You have successfully enrolled in ${ans.courses}\n`);
    let answer = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (answer.select === "View Status") {
        console.log(" \n**** Status ****\n");
        console.log(` Student Name : ${ans.student}`);
        console.log(` Student ID : ${randomNumber}`);
        console.log(` Course : ${ans.courses}`);
        console.log(` Tution Fee Paid : ${payAmount}`);
        console.log(` Balance : ${myBalance += payAmount}`);
    }
    else {
        console.log("\nExit Program!!!!");
    }
}
else {
    console.log("\nInvalid Amount due to Course!!\n");
}
