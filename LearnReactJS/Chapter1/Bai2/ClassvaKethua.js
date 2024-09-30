class Father{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;

    }
    getFirstName(){
        return this.firstname;
    }
    getLastName(){
        return this.lastname;
    }
    getAge(){
        return this.age;
    }
    toString(){
        return this.firstname + " " + this.lastname + " " + this.age;
    }
}

class Son extends Father{
        constructor(firstname,lastname,age,skill){
        super(firstname,lastname,age);
        this.skill = skill;
    }
    getSkill(){
        return this.skill;
    }
}

let father = new Father("John","Doe",35);
console.log(father.toString());
let son = new Son("John","Doe",35,"Java");
console.log(son.toString()+" "+son.getSkill());