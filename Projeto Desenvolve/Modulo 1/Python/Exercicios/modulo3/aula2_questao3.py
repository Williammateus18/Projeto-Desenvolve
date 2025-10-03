idade = int(input("Qual sua idade? "))
jogos = (input("Já jogou pelo menos 3 jogos de tabuleiro? Responda com True ou False! "))
ganhou = int (input ("Qauntas vezes ganhou? "))
print(f"Apto para ingressar no clube de jogos de tabuleiro: {((idade >= 16 and idade <= 19) and (jogos == "True" or "true") and (ganhou >= 1))}")
