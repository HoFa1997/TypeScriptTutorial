"use strict";
// Class
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
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
    describe() {
        console.log("This is IT Dp");
    }
    reportAdmins() {
        console.log(this.admins);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "IT");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("D2", []);
        return this.instance;
    }
    describe() {
        console.log("this is accounting");
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("please pass in valid value");
        }
        this.addReport(value);
    }
    static printAEmployee(name) {
        console.log(name);
    }
    addEmployee(employee) {
        if (employee === "Ali") {
            return;
        }
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.reports);
    }
}
AccountingDepartment.myNum = 1;
const it = new ITDepartment("I1", ["A", "B"]);
// const accounting = new AccountingDepartment("D2", []);
const accounting = AccountingDepartment.getInstance();
const accounting1 = AccountingDepartment.getInstance();
console.log(accounting, accounting1);
