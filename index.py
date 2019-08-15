#coding: utf-8
from math import ceil

w_wall = input("Digite a largura da parede:")
w_paper = input("Digite a altura do papel de parede:")

result = float(w_wall / w_paper)
loss_paper = 0
result_end = 0
h_wall = input("Digite a altura da parede:")
loss = input("Esse papel possui perda?Digite o numero correspondente 1-Sim 2-Não: ")
if loss == 1:
    loss_paper = input("Digite a perda do papel:")
    result_end = result * (float(h_wall + loss_paper))
else:
    result_end = float(result * h_wall)

result_papers = ceil(result_end / 10)

print(ceil(result_end),"mt ou", result_papers, "Rolos")
