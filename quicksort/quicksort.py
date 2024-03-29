def particion(arr, low, high):
    i = (low-1)
    pivot = arr[high]

    for j in range(low, high):
        if arr[j] <= pivot:
            i = i+1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i+1], arr[high] = arr[high], arr[i+1]
    return (i+1)

def quicksort(arr, low, high):
    if low < high:
        pi = particion(arr, low, high)
        quicksort(arr, low, pi-1)
        quicksort(arr, pi+1, high)

arr = [1992, 1990, 10, 5, 6, 100, 0, 1, -10]
n = len(arr)
quicksort(arr, 0, n-1)
print("El array ordenado: ")
for i in range(n):
    print("%d" %arr[i]),
