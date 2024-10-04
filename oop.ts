class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  //Method
  public makeSound(): void {
    console.log("Animal Sound");
  }

  public getName(): string {
    return this.name;
  }
}

//inheritance
class Dog extends Animal {
  private breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  public makeSound(): void {
    console.log("The dog barks");
  }

  public getBreed(): string {
    return this.breed;
  }
}
const MyAnimal = new Animal("John");
console.log(MyAnimal.getName());

const MyDog = new Dog("Bull", "Dog");
console.log(MyDog.getName());
console.log(MyDog.makeSound());
