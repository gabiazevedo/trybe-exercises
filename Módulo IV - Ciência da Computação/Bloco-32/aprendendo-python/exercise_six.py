# Crie uma função que receba os três lado de um triângulo e informe qual o tipo
# de triângulo formado ou "não é triangulo",
# caso não seja possível formar um triângulo.

def is_triangle(side_a, side_b, side_c):
    triangle = (
        side_a + side_b > side_c and
        side_a + side_c > side_b and
        side_b + side_c > side_a
    )
    if not triangle:
        return "Is not a triangle!!!"
    elif side_a == side_b == side_c:
        return "Triângulo Equilátero"
    elif side_a == side_b or side_a == side_c or side_b == side_c:
        return "Triângulo Isósceles"
    else:
        return "Triângulo Escaleno"


print(is_triangle(5, 5, 7))
