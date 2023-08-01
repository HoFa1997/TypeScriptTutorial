// Class
class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {}
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

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

  reportAdmins() {
    console.log(this.admins);
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "IT");
  }

  addReport(text: string) {
    this.reports.push(text);
  }
  printReport() {
    console.log(this.reports);
  }
}
const it = new ITDepartment("I1", ["A", "B"]);
const accounting = new AccountingDepartment("A1", []);
accounting.addReport("This is test");
console.log(it.reportAdmins());
console.log(accounting.printReport());

// const accounting = new Department("A1", "Accounting");
