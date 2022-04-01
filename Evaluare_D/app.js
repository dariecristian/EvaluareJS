//Ex 1-5
class Worker {
    constructor(name, surname, hourRate, hours){
    this.name=name;
    this.surname=surname;
    this.hourRate=hourRate;
    this.hours=hours;
}
    getName(){
        return this.name;
    }

    getSurname(){
        return this.surname;
    }

    getHourRate(){
        return this.hourRate;
    }

    getHours(){
        return this.hours;
    }

    getSalary() {
        return (this.hourRate * this.hours) + ` = ${this.hourRate} * ${this.hours}`;
    }

    increaseHourRate(addHour) {
        this.hours += this.hours + addHour;
    }
}

var worker1 = new Worker('Ion', 'Creanga', 10, 176);
console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.hourRate);
console.log(worker1.hours);
console.log(worker1.getSalary());

var worker2 = new Worker('Mihai', 'Eminescu', 7, 123);
console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.hourRate);
console.log(worker2.hours);
console.log(worker2.getSalary());

var worker3 = new Worker('George', 'Bacovia', 8, 343);
console.log(worker3.name);
console.log(worker3.surname);
console.log(worker3.hourRate);
console.log(worker3.hours);
console.log(worker3.getSalary());

var worker4 = new Worker('Lorem', 'Ipsum', 9, 500);
console.log(worker4.getName());
console.log(worker4.getSurname());
console.log(worker4.getHourRate());
console.log(worker4.getHours());
console.log(worker4.getSalary());

var worker5 = new Worker('Ion', 'Ionut', 10, 199);
console.log(worker5.name);
console.log(worker5.surname);
console.log(worker5.hourRate);
console.log(worker5.hours);
console.log(worker5.getSalary());
console.log(worker5.increaseHourRate(2));
console.log(worker5.getSalary());


console.log("Worker with the biggest salary is:");
/*const viewBiggestSalary = (worker2,worker3)=>{
    if(worker2.getSalary() > worker3.getSalary())
    console.log(worker2.name + worker2.surname);
    console.log("With the difference of" + worker2.getSalary() - worker3.getSalary()); 
    }else if{(worker2.getSalary() < worker3.getSalary())
    console.log(worker3.name + worker3.surname);
    console.log("With the difference of" + worker3.getSalary() - worker2.getSalary());
    } else {
    console.log("They is no worker with bigger salary");
    }
} */    


