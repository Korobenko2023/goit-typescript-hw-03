class Key {
    private signature: number = Math.random();

    getSignature(): number {
        return this.signature
    }
}
class Person {
   constructor(public name: string, private key: Key) { }

    getKey(): Key {
        return this.key;
    }
}
abstract class House {
    protected tenants: Person[] = [];
    protected door: boolean = false;
    constructor(protected key: Key) { }
    
    comeIn(person: Person): void {
        if (this.door) {
          this.tenants.push(person);
          console.log(`Welcome ${person.name}! Door open!`);
        } else {
             console.log("Door closed");
         }
    }     
    
    abstract openDoor(key: Key): void;
}
class MyHouse extends House {   
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;           
       }
    }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person('Merlin', key);
const person1 = new Person('Anna', new Key());


house.openDoor(key);
house.comeIn(person);
house.openDoor(person.getKey());
house.comeIn(person1);

export {};