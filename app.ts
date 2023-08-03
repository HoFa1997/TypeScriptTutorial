// Class
abstract class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, private name: string) {}

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // Validation
    this.employees.push(employee);
  }

  printEmployee() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  describe(this: Department): void {
    console.log("This is IT Dp");
  }

  reportAdmins() {
    console.log(this.admins);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  static myNum = 1;
  constructor(id: string, private reports: string[]) {
    super(id, "IT");
    this.lastReport = reports[0];
  }

  describe(this: Department): void {
    console.log("this is accounting");
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("please pass in valid value");
    }
    this.addReport(value);
  }

  static printAEmployee(name: string) {
    console.log(name);
  }

  addEmployee(employee: string): void {
    if (employee === "Ali") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReport() {
    console.log(this.reports);
  }
}
const it = new ITDepartment("I1", ["A", "B"]);
const accounting = new AccountingDepartment("D2", []);
it.describe();
accounting.describe();
