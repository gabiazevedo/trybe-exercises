# Faça um programa que, dado um valor n qualquer, tal que n > 1 ,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

def print_asterisk(n):
    for row in range(n):
        print('*' * n)


print(print_asterisk(5))
