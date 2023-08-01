// Class
class Department {
  public name: string;
  private employees: string[] = [];
  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    console.log("Department : " + this.name);
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

const accounting = new Department("Accounting");

accounting.addEmployee("Jhon");
accounting.addEmployee("Anna");

// accounting.employees[2] = "ASD";
// accounting.name = "IT";
accounting.printEmployee();

// accounting.describe();
// const accountingCopy = { name: "S", describe: accounting.describe };
// accountingCopy.describe();
