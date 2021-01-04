export default abstract class Person {
  name: string;
  age: number;
  static isFly = false;

  get getAge(): number {
    return this.age;
  }

  set setAge(age: number) {
    this.age = age;
  }

  sayHello(): void {
    console.log(`Hi all!!! I am ${this.name}`);
  }

  abstract description(): { type: string } | { alive: boolean };
}
