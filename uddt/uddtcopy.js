// Hacer un tipo de dato propio de un cliente, que contenga: Nombre, Id, Credito, Dinero Disponible.

// My class
class client{
    constructor($name, $id, $credits, $moneyavailable){
        this.name = $name;
        this.id = $id;
        this.credits = $credits;
        this.moneyavailable = $moneyavailable;
    }

    showData(){
        console.log(`Client: ${this.name} with ID: ${this.id}, has a credit: ${this.credits} and his Money Available is: ${this.moneyavailable}`);
    }

    calculaTotal(){
        let total = this.moneyavailable - this.credits;
        console.log(`Total money if you: ${this.name} paid the credits: ${this.credits} is: ${total}`);
    }
}

let client1 = new client('Megan Herrera', '0017', 24000, 1500000);
let client2 = new client('Wandy Santana', '0018', 35678, 1300000);
client1.showData();
client2.showData();
client1.calculaTotal();
client2.calculaTotal();