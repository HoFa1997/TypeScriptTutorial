// Class
class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    // this.name = n;
    // this.id = id;
  }
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
