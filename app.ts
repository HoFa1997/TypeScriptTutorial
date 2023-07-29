// class
class Person {
  constructor(
    public name: string,
    private age: number,
    protected family: string
  ) {}

  printAge() {
    console.log(this.age);
    this.setFamilyName("Olayii");
    console.log(this.family);
  }

  private setFamilyName(family: string) {
    this.family = family;
  }
}
const person = new Person("Hossein", 26, "Fatemi");

// person.setFamilyName("Vosoghi");

person.printAge();

console.log(person);
