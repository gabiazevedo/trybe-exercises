numbers = input("Digite tês números, separando-os com espaço: ").split()

sum = 0
for number in numbers:
    if not number.isdigit():
        print(f"Erro ao somar valores, {number} não é um valor inválido")
    else:
        sum += int(number)

print(f"A soma de valores válidos é: {sum}")
