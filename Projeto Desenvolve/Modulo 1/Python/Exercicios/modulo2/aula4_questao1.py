#Entrada
comprimento = int (input("Qual o comprimento do terreno? ")) ## Leitura e armazenamento do comprimento 
largura = int (input ("Qual a largura do terreno? "))   ##Leitura e armazaenamento da largura do terreno. 
preco_m2=float(input("Qual o valor do metro quadrado da região?")) ## Leitura e armazenamento do preço do m2.

#Processamento
area_m2 = comprimento * largura ##Armazenamento da area, multiplicando o comprimento pela largura.
preco_total = preco_m2 * area_m2  ##Armazenamento do preço total, multiplicando a area pelo preço em m2.

# Saída
print (f"O terreno possui {area_m2}m2 e custa R${preco_total:,.2f}") ##Imprimir na tela a frase com o tamanho do terreno e preço total formatado.