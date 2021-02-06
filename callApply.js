const normalPerson ={
    firstName: 'Rahim',
    lastName: 'uddin',
    salary:15000,

    getfullname: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount,tips,tax){
        console.log(this);
        this.salary = this.salary - amount -tips -tax;
        return this.salary;
    }

}
const heroPerson ={
    firstName: 'hero',
    lastName: 'Balam',
    salary: 25000
}
const friendlyPerson ={
    firstName: 'hero',
    lastName: 'salam',
    salary: 20000
}
    // const herochargeBill = normalPerson.chargeBill.bind(heroPerson);
    // herochargeBill(2000);
    // console.log(heroPerson.salary);

// const friendlychargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlychargeBill(5000);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson,3000,300,30);
// console.log(heroPerson.salary);
normalPerson.chargeBill.apply(heroPerson, [5000,300,30]);
console.log(heroPerson.salary);