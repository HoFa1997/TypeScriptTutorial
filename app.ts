type Admin = {
  name: string;
  permission: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface IEmployee extends Admin, Employee {}
type IEmployee = Admin & Employee;

const e1: IEmployee = {
  name: "Ali",
  permission: ["list-of-user"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
