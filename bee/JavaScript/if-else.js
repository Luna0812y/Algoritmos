import prompt from 'prompt-sync'
const input = prompt()

function main()
{
    const valor_a = Number(input('Valor A: '))
    const valor_b = Number(input('Valor B: '))
    const valor_c = Number(input('Valor C: '))
    const valor_d = Number(input('Valor D: '))
    const valor_e = Number(input('Valor E: '))
    
    //Processamento
    const media = (valor_a + valor_b + valor_c + valor_d + valor_e) / 5

    //Saída
    

}

function media_a(media, valor_a, valor_b, valor_c, valor_d, valor_e)
{
    if(valor_a > media)
    {
        console.log(valor_a)
    } else 
    {

    }if(valor_b > media)
    {
        console.log(valor_b)
    } else
    {

    }if(valor_c > media)
    {
        console.log(valor_c)
    } else 
    {

    }if(valor_d > media)
    {
        console.log(valor_d)
    } else
    {
    }if(valor_e > media)
    {
        console.log(valor_e)
    } else
    {
    
    }

    return 
}

main()

/*
function main()
{
//Entrada
const valor_a = Number(input('Valor A: '))
const valor_b = Number(input('Valor B: '))
const valor_c = Number(input('Valor C: '))
const valor_d = Number(input('Valor D: '))
const valor_e = Number(input('Valor E: '))

//Processamento
const media = (valor_a + valor_b + valor_c + valor_d + valor_e) / 5
const a = media_a(media, valor_a, valor_b, valor_c, valor_d, valor_e)

//Saída
console.log('Essa é a média: ', media)

}

function media_a(media, valor_a, valor_b, valor_c, valor_d, valor_e)
{
    if(valor_a > media)
    {
        const valor = media_b(media, valor_a, valor_b, valor_c, valor_d, valor_e)
        console.log(valor)
        return valor_a
    } else 
    {
        const valor = media_b(media, valor_a, valor_b, valor_c, valor_d, valor_e)
        console.log(valor)
    }
}

function media_b(media, valor_a, valor_b, valor_c, valor_d, valor_e)
{
    if(valor_b > media)
    {
        const valor1 = media_c(media, valor_a, valor_b, valor_c, valor_d, valor_e)
        console.log(valor1)
        return valor_b
    } else
    {
        const valor1 = media_c(media, valor_a, valor_b, valor_c, valor_d, valor_e)
        console.log(valor1)  
    }
}

function media_c(media, valor_a, valor_b, valor_c, valor_d, valor_e)
{
    if(valor_c > media)
    {
        const valor2 = media_d(media, valor_a, valor_b, valor_c, valor_d, valor_e)
        console.log(valor2)
        return valor_c
    } else 
    {
        const valor2 = media_d(media, valor_a, valor_b, valor_c, valor_d, valor_e)
        console.log(valor2)
    } 
}

function media_d(media, valor_a, valor_b, valor_c, valor_d, valor_e)
{
    if(valor_d > media)
    {
        const valor3 = media_e(media, valor_a, valor_b, valor_c, valor_d, valor_e)
        console.log(valor3)
        return valor_d
    } else
    {
        const valor3 = media_e(media, valor_a, valor_b, valor_c, valor_d, valor_e)
        console.log(valor3)
    }
}

function media_e(media, valor_a, valor_b, valor_c, valor_d, valor_e)
{
    if(valor_e > media)
    {
        return valor_e
    } else
    {
        return 
    }
}

main()
*/