genero = input("Qual seu gênero? Responsa com m ou f? " )
idade = int(input("Qual sua idade? "))
servico = int(input("Qual seu tempo de serviço em anos? "))
a = genero == "m" and idade >= 65 or genero == "f" and idade >= 60
b = servico >= 30 
c = idade >= 60 and servico >= 25
print(f"Pode aposentar: {a or b or c}")
