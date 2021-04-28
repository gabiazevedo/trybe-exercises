const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
const deliveryPerson = order.order.delivery.deliveryPerson;
const orderName = order.name;
const phoneNumber = order['phoneNumber']; 
const street = order.address['street'];
const numberOfStreet = order.address['number'];
const number = order.address['apartment'];

console.log(`Olá ${deliveryPerson}, entrega para: ${orderName}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${numberOfStreet}, AP: ${number}.`);
}
customerInfo(order);

const orderModifier = (order) => {
const name = order.name = 'Luiz Silva'
let pizza = Object.keys(order.order.pizza);
const drink = order.order.drinks.coke.type;
const money = order.payment.total = '50';
pizza = ['muzarella', 'calabresa'];

console.log(`Olá ${name}, o total do seu pedido de ${pizza} e ${drink} é R$ ${money},00.`)
}
orderModifier(order);
