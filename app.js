"use strict";
// Class
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.name = n;
        // this.id = id;
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        // Validation
        this.employees.push(employee);
    }
    printEmployee() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("A1", "Accounting");
accounting.addEmployee("Jhon");
accounting.addEmployee("Anna");
accounting.describe();
console.log(accounting);
// accounting.employees[2] = "ASD";
// accounting.name = "IT";
accounting.printEmployee();
// accounting.describe();
// const accountingCopy = { name: "S", describe: accounting.describe };
// accountingCopy.describe();
