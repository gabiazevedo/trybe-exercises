# Calcule a média aritmética dos valores contidos em uma lista.

def get_average(numbers):
    average = 0
    for number in numbers:
        average += number
        return average / len(numbers)


print(get_average([10, 23, 45, 69, 54]))
