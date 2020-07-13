const messages = [
    "Julio",
    "Saul" ,
    "Gilberto",
    "Doraida",
    "Esteban"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages .length)];
    console.log(message)
}


module.export = { randomMsg };