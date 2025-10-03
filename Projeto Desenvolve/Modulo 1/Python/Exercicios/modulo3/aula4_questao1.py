n1 = int(input("Digite um número: "))
n2 = int(input("Digite um número: "))
soma = (n1 + n2 % 2) == 0 
if soma:
    print("A soma dos números é par")
else :
    print ("A soma dos números é impar")