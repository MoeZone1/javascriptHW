const todolist = ["fold laundry",
"mow law",
"do dishes",
"mop bathroom"

] 

const numberofchores = todolist.length;

for (var i=0; i < numberofchores; i++) {
    todolist.pop();
    console.log(todolist);
}

console.log(todolist);