var arrayPokemon = [];
document.addEventListener('DOMContentLoaded', ()=> {

for (let index = 0; index < 10; index++) {
let random = arrayPokemon.push(getRandomInt(1,151))
fetchData(arrayPokemon[index]) 
}
})

const getRandomInt = (min,max) => {
return Math.floor(Math.random()*(max -min))+min;
}
const fetchData = async (id)=>{
try{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    console.log(data)
    const pokemon = {
        img: data.sprites.other.dream_world.front_default,
        nombre: data.name,
        hp: data.stats[0].base_stat,
        index: data.id,
        ataque:data.stats[1].base_stat,
        defensa:data.stats[2].base_stat,
        especial:data.stats[3].base_stat,
        tipo:data.types[0].type.name
    }
    pintarTabla(pokemon)
}catch(error){
    console.log(error);
}
}

var contenido = document.querySelector('#contenido')

function pintarTabla(datos){
        contenido.innerHTML += `
        <tr>
              <th scope="row" class="index">${datos.index}</th>
              <td><img class="sprite" src="${datos.img}" alt="pokemon"></td>
              <td class="name">${datos.nombre}</td>
              <td class="tipo">${datos.tipo}</td>
              <td class="atack">${datos.ataque}</td>  
              <td class="hp">${datos.hp}</td>
            </tr>
            `
    }
