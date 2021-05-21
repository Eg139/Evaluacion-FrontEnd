document.addEventListener('DOMContentLoaded', ()=> {

    for (let index = 0; index < 6; index++) {
        const random = getRandomInt(1,151)
        fetchData(random)
        
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

const pintarTabla = (pokemon) => {
    const flex = document.querySelector('.flex')
    const template = document.querySelector('#table').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    clone.querySelector('.index').textContent = pokemon.index
    clone.querySelector('.sprite').setAttribute('src', pokemon.img)
    clone.querySelector('.name').textContent =  pokemon.nombre
    clone.querySelector('.atack').textContent = pokemon.ataque
    clone.querySelector('.tipo').textContent = pokemon.tipo
    clone.querySelector('.hp').textContent = pokemon.hp

    fragment.appendChild(clone)
    flex.appendChild(fragment)
}