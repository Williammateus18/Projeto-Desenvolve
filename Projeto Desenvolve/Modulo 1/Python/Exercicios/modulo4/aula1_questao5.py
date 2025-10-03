quantidade = int(input("Digite o número de participantes: "))
soma = 0 
cont = 0
while cont < quantidade:
    idade = int(input())
    soma += idade
    cont += 1
print(f"A media das idades é {soma/quantidade:.0f} anos")