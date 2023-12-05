const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 700,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1600,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// A) las pizzas que tengan un id impar

let pizzasImpares = pizzas.filter((pizza) => pizza.id % 2 !== 0);
console.log("Pizzas con id impar:");
console.log(pizzasImpares);

// B) Responder: ¿Hay alguna pizza que valga menos de $600?

const hayPizzaBarata = pizzas.some((pizza) => pizza.precio < 600);
console.log("Hay alguna pizza que valga menos de $600:", hayPizzaBarata);

// C) El nombre de cada pizza con su respectivo precio.
console.log("Nombre de cada pizza con su respectivo precio:");
pizzas.forEach((pizza) =>
  console.log(`La pizza ${pizza.nombre}, tiene un valor de $${pizza.precio}`)
);

// D) Todos los ingredientes de cada pizza.
console.log("Ingredientes de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(`La pizza ${pizza.nombre} tiene los siguientes ingredientes:`);
  pizza.ingredientes.forEach((ingrediente) => console.log(ingrediente));
});
