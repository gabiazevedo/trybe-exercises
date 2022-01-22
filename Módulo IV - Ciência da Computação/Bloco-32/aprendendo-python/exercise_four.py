# Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres.


def biggest_name(names):
    big_name = ''
    for name in names:
        if len(name) > len(big_name):
            big_name = name
    return big_name


print(biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
