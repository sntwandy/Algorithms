const factorial = numero => {
	// Sacar valor absoluto
	numero = Math.abs(numero);
	if (numero <= 1) return 1;
	return numero * factorial(numero - 1);
};
num = 5;
for (let x = 0; x < num; x++) {
    console.log(`El factorial de ${x} es ${factorial(x)}`);
};