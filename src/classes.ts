// classes são como fôrmas, pra você reaproveitar e criar a partir dela

class Character {
    name: string;
    strength: number;
    skill: number;

    constructor( name: string, strength: number, skill: number) {
        this.name = name,
        this.strength = strength
        this.skill = skill
    };

    attack(): void {
        console.log(`Attack with ${this.strength} points.`);
    };
};

const p1 = new Character("Puppy",10, 98);
console.log(p1);

// subclasses (herdam uma classe)
// Character: superclass (classe pai)
// Magician: subclass (classe filha)

class Magician extends Character{
    magicPoints: number;
    constructor(
        name: string,
        strength: number,
        skill: number,
        magicPoints: number
    ) {
        super(name, strength, skill);
        this.magicPoints = magicPoints
    }
}

const p2 = new Magician("Mago", 9, 60, 100)
