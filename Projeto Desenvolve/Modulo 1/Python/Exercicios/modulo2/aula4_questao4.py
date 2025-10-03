# Entrada
v1 = int(input("Digite o valor total:"))

# Processamento
nota100 =int(v1 /100)  
v1 -= nota100 * 100
nota50 =int(v1 /50) 
v1 -= nota50 * 50
nota20 =int(v1 /20) 
v1 -= nota20 * 20
nota10 =int(v1 /10)  
v1 -= nota10 * 10
nota5 =int(v1 /5) 
v1 -= nota5 * 5
nota2 =int(v1 /2) 
v1 -= nota2 * 2 
nota1 =int(v1 /1) 
v1 -= nota1 * 1

# Saída
print(f"{nota100} notas(s) de 100,00")
print(f"{nota50} notas(s) de 50,00")
print(f"{nota20} notas(s) de 20,00")
print(f"{nota10} notas(s) de 10,00")
print(f"{nota5} notas(s) de 5,00")
print(f"{nota2} notas(s) de 2,00")
print(f"{nota1} notas(s) de 1,00")