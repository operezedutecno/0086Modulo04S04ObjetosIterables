const curso1 = {
    id: "0086",
    nombre: "Fullstack Javascript",
    anio: 2024,
    cantidad_participantes: 28
}

const curso1Adicionales = {
    anio: 2025,
    cantidad_modulos: 10
}


// const id = curso1.id
// const nom = curso1.nombre
// const anio = curso1.anio
// const cp = curso1.cantidad_participantes

// Ejemplo de destructuring en objetos.
const { id, nombre:nom, anio, cantidad_participantes:cp } = curso1
// console.log(`${id} - ${nom} - ${anio} -${cp}`);


const animales = ["Perro", "Gato", "León", "Elefante","Tigre"]
const otrosAnimales = ["Ratón","Canguro","Perro"]
const [primero, segundo, ...resto] = animales
// console.log(primero);
// console.log(segundo);
// console.log(resto);


// const curso2 = JSON.parse(JSON.stringify(curso1))
const curso2 = { ...curso1 }

curso2.id = "0088"

// console.log("curso1",curso1);
// console.log("curso2",curso2);

const animales2 = [...animales]
animales2.push("Oso")

// console.log("animales", animales);
// console.log("animales2", animales2);




const objetoMezclado = {
    ...curso1,
    ...curso1Adicionales
}


// console.log("curso1",curso1);
// console.log("curso1Adicionales",curso1Adicionales);
// console.log("objetoMezclado",objetoMezclado);

const animalesMezclados = [
    ...animales,
    ...otrosAnimales
]

// console.log("animales", animales);
// console.log("otrosAnimales", otrosAnimales);
// console.log("animalesMezclados", animalesMezclados);


const objetoSet = new Set([5,8,9,1,2,1,2,3])

console.log("objetoSet",objetoSet);

objetoSet.add(4)
objetoSet.add(1)

console.log("objetoSet",objetoSet);

objetoSet.delete(9)
console.log("objetoSet",objetoSet);

console.log("setSize", objetoSet.size);
console.log("setValues", objetoSet.values());

console.log("setHas 1", objetoSet.has(1));
console.log("setHas 15", objetoSet.has(15));


// objetoSet.clear()

console.log("objetoSet",objetoSet);


const objetoMap = new Map();


objetoMap.set("12345678", {nombre: "Osman"})
objetoMap.set("1111111", {nombre: "José"})

console.log("objetoMap",objetoMap);

console.log(objetoMap.get("12345678"));

console.log("mapHas 12345678", objetoMap.has("12345678"));
console.log("mapHas 22222222", objetoMap.has("22222222"));

objetoMap.delete("12345678")

console.log("objetoMap",objetoMap);
