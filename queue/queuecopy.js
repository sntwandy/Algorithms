// Hacer la funcion de una cola mediante un numero definido de datos, en la cual vamos  a procesar, y luego a borrar para tener mas espacio.
let array = [0,0,0,0,0]; //Array
let front = -1; //First value
let rear = -1; //Last value

// Queue para agregar valores al Que.
const queue = n =>{
    if(rear < (array.lenght-1)){
        rear++;
        array[rear] = n;
            console.log(`El valor ${n} ha sido agregado con éxito.`);
        front = 0;    
    } else {
        console.log(`La Queue está llena, intenta hacer un deQueue. ${array}`);
    }
}

// deQueue para sacar los valores del Que.
const deQueue = n =>{
    if(front == -1){
        console.log(`Nuestro Que está vacío. ${array}`);
    } else{
        console.log(`Se ha eliminado correctamente el valor de: ${array[front]}`);
        array[front] = 0;
        rear--;
        if(front == array){
            front = -1;
            rear = -1;
        }
        
    }
}
queue(5);
queue(4);
queue(34);
queue(78);
queue(9);
