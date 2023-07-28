// class
class Person {
  public name: string;
  private userName: string;

  constructor(
    name: string,
    public age: number,
    userName: string,
    protected family: string
  ) {
    this.name = name;
    this.userName = userName;
  }
}
const person = new Person("Hossein", 26, "hofa", "fatemi");

console.log(person);
