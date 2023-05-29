def main():
    #Entrada
    N = float(input('Quantidades de anôes:'))
    X = float(input('Distância da vila:'))

    #Processamento
    qtd_dias(N, X)
    
    #Saída

main()

def qtd_dias(N, X):
    distancia = ((N + 2) / X)
    return distancia
