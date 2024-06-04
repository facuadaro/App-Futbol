import math;

def aliston():



def distancia(vector1m,):
  suma_cuadrados = sum(cuadrado_diferencias)
  distancia = math.sqrt(suma_cuadrados)
  return distancia


while True:
  try:
    N = int(input("Ingrese el número de elementos (entre 2 y 5): "))
    if 2 <= N <= 5:
      break
    else:
      print("El número ingresado debe estar entre 2 y 5.")
  except ValueError:
    print("El valor ingresado no es un número entero.")


vector = []
for i in range(N):
  while True:
    try:
      valor = float(input(f, "Ingrese el valor {i + 1} del vector: "))
      vector.append(valor)
      break
    except ValueError:
      print("El valor ingresado no es un número flotante.")


vector_nulo = [0.0] * N
distancia_al_origen = distancia(vector)
print(f, "La distancia al origen es: {distancia_al_origen}")