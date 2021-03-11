(function () {
    var items = [ // array con los precios de cada item
        {
            price: 20
        },
        {
            price: 50
        },
        {
            price: 70
        }
    ]
    var prices = []; //array con el que vamos a sumar el precio total
    
    var showTotal = document.getElementById('total'); //botton que va a mostrar el precio total
    var addButtons = document.getElementsByClassName('add');// los botones para añadir al carrito cada item
    var toggle = document.getElementById('toggle');
    var total = 0;
    var numOfItems = 0;
    var measure = document.getElementById('measure');
    measure.innerHTML = numOfItems;


    for (let i = 0; i < addButtons.length; i++) {// para cada botton crea un evento donde se añadira el precio por cada item
        const el = addButtons[i];
        el.addEventListener('click', function () {
            let price = items[i].price; //obten el valor del precio correspondiente al item
            prices.push(price); //añade el respectivo precio al array prices
            // console.log(price);
            numOfItems++;
            measure.innerHTML = numOfItems;
        });
    }

    showTotal.addEventListener('click', showTotalprice);

    //funciones


    //// funcion en donde se va a mostrar el total del precio en pantalla; es llamado cuado se clickea el boton Show total
    function showTotalprice() {
        for (let i = 0; i < prices.length; i++) {
            const price = prices[i];
            total += price //cada precio en el array precios se suma para obtener el total que se va a mostrar en pantalla
        }

        toggle.innerHTML = '$' + total;
        toggle.className = '';
    }
}());