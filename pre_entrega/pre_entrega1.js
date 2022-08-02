console.log('Carrito');


let productos = [
    {
      "nombre": "pan",
      "precio": 50
      
    },
    {
      "nombre": "jabon",
      "precio": 25
    
    },
    {
      "nombre": "agua",
      "precio": 15
    },
    {
      "nombre": "papas fritas",
      "precio": 10

    }

  ]


elegirModoPago();



function contado() {
    alert ('Valor de contado: $' + sumaProductos)
}



function cuotas(valor) {
    cantidadCuotas = parseInt (prompt ('Inserte cantidad de cuotas'))
    console.log('Cuotas: ' + cantidadCuotas);
    alert ('Calculando valor por cuota...')
    alert ('Valor por cuota: $' + valor / cantidadCuotas)
}


function elegirModoPago() {
    
    let total = 0

    for (let i = 0; i < productos.length; i++ ) {
        valor = productos[i].precio
        console.log('Valor $' + valor);
        total = total + valor
    }

    let precioTotal = total   

    let comando = prompt ('¿Como quiere pagar? (Contado o Cuotas)')

    switch (comando) {
        case 'Contado':

            alert ('Calculando valor de contado...')
            alert ('Precio de contado: $' + precioTotal)
            
            
            
            break;
        case 'Cuotas':
            
            cuotas(precioTotal)
        


            break;
    }

    }