"use strict";
// Class
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    reportAdmins() {
        console.log(this.admins);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "IT");
        this.reports = reports;
    }
    addEmployee(employee) {
        if (employee === "Ali") {
            return;
        }
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReport() {
        console.log(this.reports);
    }
}
const it = new ITDepartment("I1", ["A", "B"]);
const accounting = new AccountingDepartment("D2", []);
accounting.addEmployee("Ali");
accounting.addEmployee("Hossein");
accounting.printEmployee();
