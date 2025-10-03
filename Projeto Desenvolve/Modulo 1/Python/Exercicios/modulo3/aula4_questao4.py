distancia = int(input("Qual a distancia em km: "))
peso = float (input("Qual o peso do pacote em quilogramas (kg): "))
taxa = 10
if peso >= 10: 
    if distancia <= 100:
       print(f"O preço do frete será {peso * 1 + taxa}")
    if distancia >= 101 and distancia <= 300:
       print(f"O preço do frete será {peso * 1.5 + taxa}")
    if distancia > 300:
       print(f"O preço do frete será {peso * 2 + taxa}")
else: 
     if distancia <= 100:
       print(f"O preço do frete será {peso * 1 }")
     if distancia >= 101 and distancia <= 300:
       print(f"O preço do frete será {peso * 1.5 }")
     if distancia > 300:
       print(f"O preço do frete será {peso * 2 }")