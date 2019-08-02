let array = [0,0,0,0,0];
let front = -1;
let rear = -1;

const enQueue = n => {
    if(rear < (array.length-1)){
        rear++;
        array[rear] = n;
            console.log(`El valor insertado ${n}, fue insertado en la posicion ${rear}`);
        front = 0;
    } else{
        console.log(`No podemos insertar el valor ${n}, el array esta lleno`);
    }
}
// deQueue Function
const  deQueue = () => {
    if(front == -1){
        console.log("Nuestro Que está vacío");
    } else {
        console.log(`Se elimino el valor de: ${array[front]}`);
        array[front] = 0;
        front++;
        rear--;
        if(front == array){
            front = -1;
            rear = -1;
        }
    }
}
// Calling functions
enQueue(1);
enQueue(2);
enQueue(3);
enQueue(4);
enQueue(5);
deQueue();
deQueue();
enQueue(6);