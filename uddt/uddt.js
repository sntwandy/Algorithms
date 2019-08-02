//MY Class
class client {
    constructor($name, $id, $credits, $address){
        this.name = $name;
        this.id = $id;
        this.credits = $credits;
        this.address = $address;
    }
    //Function Printing the data
    showData(){
        console.log(`Client: ${this.name}\nId: ${this.id}\nCredits: ${this.credits}\nAddress: ${this.address}`);
    }
}
//Entering Data
let client1 = new client('Megan Herrera de Santana', '0000000001', 1000000, 'C/ Mi corazón, esquina mi vida, numero infinito. Te Amo.\n')
let client2 = new client('Wandy Santana de Herrera', '0000000002', 1000000, 'C/ Mi corazón, esquina mi vida, numero infinito. Te Amo.\n')
//Printing data.
client1.showData();
client2.showData();