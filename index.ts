import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter firstnumber", type: "number", name: "firstnumber" },
  { message: "Enter secondnumber", type: "number", name: "secondnumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Division", "Multiplication"],
  },
]);
// conditional statement 
if (answer.operator === "Addition") {
    console.log( answer.firstnumber + answer.secondnumber);
}  
  else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}  
  else if (answer.operator === "Division") {
 console.log(answer.firstnumber / answer.secondnumber);
}   
  else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber); 
} else {
    console.log("Please use valid operator");
}
