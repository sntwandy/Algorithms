/*Buscaremos el mínimo de monedas posibles para obtener el cambio total de N,
tomando monedas del set monedas coinSet[],
necesitamos un auxiliar "res" stack recursivo,
crear una función recursiva para encontrar el valor y retornar "Monedas necesarias para el cambio".
*/
#include <iostream>
#include <climits>
using namespace std;

int greedyAlgorithm(int coinSet[], int n, int N){
    if(N == 0){
        return 0;
    } else if(N < 0){
        return INT_MAX;
    }
    int coins = INT_MAX;
    // Recorremos todo nuestro set de monedas AKA opciones para dar cambio.
    for(int i = 0; i < n; i++){
        int res = greedyAlgorithm(coinSet, n, N - coinSet[i]);
        if(res != INT_MAX){
            coins = min(coins, res+1);
        }
    }
    return coins;
}
// Código MAIN.
int main(int argc, char const *argv[] ){
    int coinSet[] = {1,5,10,15,20};
    int n = sizeof(coinSet)/sizeof(coinSet[0]);
    int N = 27;

    cout << "El mínimo de monedas para dar cambios es: " << greedyAlgorithm(coinSet, n, N);
    return 0;
}