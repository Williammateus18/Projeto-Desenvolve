n = int(input("Digite um número n: "))
maior = 0
while n > 0:
    x = int(input("Digite um núemro x: "))
    while x > maior:
        maior = x
    n = n -1
print(maior)