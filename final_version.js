
const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
]

//1. Count Employees Number by Factory
function employeesPerFactory(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        for (let j in inputArray[i]) {
            if (j == "employees") {
                console.log(j + ": " + inputArray[i][j].length);
            }
            else {
                console.log(j + ": " + inputArray[i][j]);
            }

        }
    }
};

console.log("first:---------------------------------------")
employeesPerFactory(factories);


//2. Count Factories Number by Employee // => [ {employee: 'John', count: 2}, ... ]
function numberOfEachEmployee() {
    dictOfEmployees = {}
    for (let i = 0; i < factories.length; i++) {
        for (let j in factories[i]) {
            if (j == "employees") {
                for (let k = 0; k < factories[i][j].length; k++) {
                    if (factories[i][j][k] in dictOfEmployees) {
                        dictOfEmployees[factories[i][j][k]]++;
                    }
                    else {
                        dictOfEmployees[factories[i][j][k]] = 1;
                    }
                }

            }

        }
    }
    for (let j in dictOfEmployees) {
        console.log("employee: " + j + ", count: " + dictOfEmployees[j]);
    }

};

console.log("second:---------------------------------------")
numberOfEachEmployee();

//3. Order employees list by alphabetical order // =>   { name: "BR2", employees: ["Jessie", "John", "Karen"] }
function orderEmployeesAlphabetically() {
    for (let i = 0; i < factories.length; i++) {
        for (let j in factories[i]) {
            if (j == "employees") {
                factories[i][j] = factories[i][j].sort();
            }

        }
    }
    console.log(factories)
};
console.log("third:---------------------------------------")

//4. Count total hours worked in 1 day ? // => 39
orderEmployeesAlphabetically();



const employeeType = [
    { id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00" },
    { id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00" },
    { id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00" },
];

const employees = [
    { id: 1, name: "Alice", type: 2 },
    { id: 2, name: "Bob", type: 3 },
    { id: 3, name: "John", type: 2 },
    { id: 4, name: "Karen", type: 1 },
    { id: 5, name: "Miles", type: 3 },
    { id: 6, name: "Henry", type: 1 }
];

const tasks = [
    { id: 1, title: "task01", duration: 60 }, //min},
    { id: 2, title: "task02", duration: 120 },
    { id: 3, title: "task03", duration: 180 },
    { id: 4, title: "task04", duration: 360 },
    { id: 5, title: "task05", duration: 30 },
    { id: 6, title: "task06", duration: 220 },
    { id: 7, title: "task07", duration: 640 },
    { id: 8, title: "task08", duration: 250 },
    { id: 9, title: "task09", duration: 119 },
    { id: 10, title: "task10", duration: 560 },
    { id: 11, title: "task11", duration: 340 },
    { id: 12, title: "task12", duration: 45 },
    { id: 13, title: "task13", duration: 86 },
    { id: 14, title: "task14", duration: 480 },
    { id: 15, title: "task15", duration: 900 }
];
console.log("fourth:---------------------------------------")
function countTotalHours() {
    dictOfEmployees = {}
    for (let i = 0; i < factories.length; i++) {
        for (let j in factories[i]) {
            if (j == "employees") {
                for (let k = 0; k < factories[i][j].length; k++) {
                    if (factories[i][j][k] in dictOfEmployees) {
                        dictOfEmployees[factories[i][j][k]]++;
                    }
                    else {
                        dictOfEmployees[factories[i][j][k]] = 1;
                    }
                }

            }

        }
    }

    console.log(dictOfEmployees);
    let totalHoursWorked = 0;

    console.log(totalHoursWorked);
    for (let j in dictOfEmployees) {
        if (j == "Karen" || j == "Henry") {
            totalHoursWorked += (8 * dictOfEmployees[j]);
        }
        else if (j == "Alice" || j == "John") {
            totalHoursWorked += (9 * dictOfEmployees[j]);
        }
        else {
            totalHoursWorked += (4 * dictOfEmployees[j]);
        }
    }
    console.log("The total number of hours worked is: " + totalHoursWorked);

};
countTotalHours()

//5. Make a function that take as parameters dayTime and return number of employee working // howManyEmployeeByTime(time) => int
function howManyEmployeesByTime(inputTime) {
    dictOfEmployees = {}
    for (let i = 0; i < factories.length; i++) {
        for (let j in factories[i]) {
            if (j == "employees") {
                for (let k = 0; k < factories[i][j].length; k++) {
                    if (factories[i][j][k] in dictOfEmployees) {
                        dictOfEmployees[factories[i][j][k]]++;
                    }
                    else {
                        dictOfEmployees[factories[i][j][k]] = 1;
                    }
                }

            }

        }
    }

    console.log(dictOfEmployees);

    if (inputTime == 1 || inputTime.toLowerCase() == "fulltime") {
        console.log(dictOfEmployees["Karen"] + dictOfEmployees["Henry"]);
    }

    else if (inputTime == 2 || inputTime.toLowerCase() == "midtime") {
        console.log(dictOfEmployees["Alice"] + dictOfEmployees["John"]);
    }
    else if (inputTime == 3 || inputTime.toLowerCase() == "halftime") {
        console.log(dictOfEmployees["Bob"] + dictOfEmployees["Miles"]);
    }
    else {
        console.log("error in input format");
    }
}
console.log("fifth:---------------------------------------")

howManyEmployeesByTime("halftime");


//6. How many days of work needed to done all tasks ? // => 1 day = 9:00 to 00:00 between 00:00 and 09:00 doesnt count.
function howManyDays() {

    dictOfEmployees = {}
    for (let i = 0; i < factories.length; i++) {
        for (let j in factories[i]) {
            if (j == "employees") {
                for (let k = 0; k < factories[i][j].length; k++) {
                    if (factories[i][j][k] in dictOfEmployees) {
                        dictOfEmployees[factories[i][j][k]]++;
                    }
                    else {
                        dictOfEmployees[factories[i][j][k]] = 1;
                    }
                }

            }

        }
    }

    let totalHoursWorked = 0;

    for (let j in dictOfEmployees) {
        if (j == "Karen" || j == "Henry") {
            totalHoursWorked += (8 * dictOfEmployees[j]);
        }
        else if (j == "Alice" || j == "John") {
            totalHoursWorked += (9 * dictOfEmployees[j]);
        }
        else {
            totalHoursWorked += (4 * dictOfEmployees[j]);
        }
    }



    let totalMinutes = 0;
    for (let i = 0; i < tasks.length; i++) {
        for (let j in tasks[i]) {
            if (j == "duration") {
                //console.log(tasks[i][j]);
                totalMinutes += tasks[i][j];
            }
        }
    }

    let floatNumOfDays = totalMinutes / 60 / totalHoursWorked;

    console.log("It will take " + Math.ceil(floatNumOfDays) + " day(s)");

};
console.log("sixth---------------------------------------")
howManyDays();

