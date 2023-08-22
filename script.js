// Lógica para crear pedidos y cobrar los pedidos del usuario

const user = {
    name: "Denis",
    age : 28,
    debt: 0
}

let order     = [];
let costOrder = 0;

// Muestra todos los productos del menú en un formato amigable
const showMenu = () => {
    console.log(`CÓDIGO - NOMBRE PRODUCTO - COSTO`);
    
    for (const product of products) {
        console.log(`${product.code} - ${product.name} - $${product.price}`);
    }
}

// Ingresar los pedidos
const orderProduct = (cod) => {
    if (!cod) return "Ingrese un código válido";

    const productFound = products.find(product => product.code === cod);
    if(!productFound) return "El producto no existe";

    order.push(productFound);
    console.log("EL producto ha sido agregado a su pedido. Su pedido es:");
    return seeOrder();
}

const seeOrder = () => order

// Calcular el total del pedido
const calculateCost = () => {
    let cost = 0;
    for (const product of order) {
        cost += product.price;
    }
    costOrder = cost;
    return costOrder;
}

// Finalizar la orden y mostrar cuánto pagar
const finishOrder = () => {
    calculateCost();
    user.debt = costOrder;

    order = [];
    costOrder = 0;

    return `${user.name}, debes pagar ${user.debt} dólares`;
}

// Permite pagar el pedido y entrega vuelto si es necesario
const payOrder = (amountDelivered) => {
    if (amountDelivered < user.debt) {
        return `No te alcanza para pagar tu pedido`;
    } else if (amountDelivered === user.debt) {
        user.debt = 0;
        return `Tu pedido ha sido pagado`;
    } else {
        user.debt = 0;
        return `Tu pedido ha sido pagado y tu vuelto es de ${amountDelivered - user.debt}`;
    }
}