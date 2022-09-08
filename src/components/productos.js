let Productos = [
  {
    id: 1,
    nombre: "monitor",
    precio: 1000,
    stock: 10,
    cantidad: 0,
    img: "./assets/1.png",
  },
  {
    id: 2,
    nombre: "mouse",
    precio: 500,
    stock: 10,
    cantidad: 0,
    img: "./assets/2.png",
  },
  {
    id: 3,
    nombre: "teclado",
    precio: 1000,
    stock: 10,
    cantidad: 0,
    img: "./assets/3.png",
  },
  {
    id: 4,
    nombre: "auriculares",
    precio: 1000,
    stock: 10,
    cantidad: 0,
    img: "./assets/4.png",
  },
];

export const getFetch = new Promise((resolve, reject) => {
  let url = "productosinformatica.com.ar";

  if (url) {
    setTimeout(() => {
      resolve(Productos);
    }, 2000);
  } else {
    reject("error");
  }
});
