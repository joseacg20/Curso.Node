function saludar(nombre) {
    let mensaje = `Hola ${ nombre }`;
    return mensaje;
}

let saludo = saludar('Angel');

console.log(saludo);