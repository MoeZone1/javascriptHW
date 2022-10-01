let toDoList = ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom" 
]

    let numberofchores = toDoList.length;

    while (numberofchores > 2) {
        toDoList.pop();
        numberofchores = toDoList.length;
    }

    console.log(toDoList);
    