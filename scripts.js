const select_persona = document.querySelector('.select-persona')

let persons = [
    'Marcius leadman',
    'lana devoult'
]

let personImage = [
    'media/berserk.jpg',
]

let itens = [
    'colar de artros',
    'pistola a laser'
]

let itensImage = [
    'media/download-removebg-preview.png',
    ''
]

function createPersonaArea(name, photoPath, repeat) {
    const personaName = document.createElement('h2')
    const conditionToRepeat = repeat < persons.length 
    personaName.innerHTML = `<img src="${photoPath}" class="player-thumb"></img> ${name}`
    personaName.setAttribute('class','persona-abe')
    personaName.setAttribute('id', name)
    select_persona.appendChild(personaName)
    createSlots(name, itens[repeat], itensImage[repeat], repeat)

    if(conditionToRepeat){
        repeat++
        console.log(repeat, persons.length)
        if (repeat == persons.length){
            return
        }

        createPersonaArea(persons[repeat], personImage[repeat], repeat)
        
    }
    
    
}

createPersonaArea(persons[0], personImage[0], 0)

function createSlots(character, itensName, itensImg, count){
    //const inventoryArea = document.querySelector('#inventory-area')
    const Inventory = document.querySelector('#inventory')
    const Slot = document.createElement('li')
    const SlotsNumber = 18

    Inventory.appendChild(Slot)
    Slot.setAttribute('class', 'slot hidden')
    Slot.setAttribute('id', `${character}-${count}`)
    Slot.innerHTML = `<img src="${itensImg}" alt="" class="thumb-item"> <p id="name">${itensName}</p>`

    if (itensName == undefined){
        Slot.innerHTML = ``
    }
    
    count++
    console.log(count)
    if (count == SlotsNumber) {
        return 
    }

    createSlots(character, itens[count], itensImage[count], count)
}

function viewCharacterInventory(event, count){

    const characterSelect = event.getAttribute('id')   
    count++
    let slot = document.querySelector(`#${characterSelect}-${count}`)
    console.log(characterSelect)
    slot.classList.remove('hidden') //está apresentado erros na class...
    
}


select_persona.addEventListener('click', event => event.target = viewCharacterInventory(event.target, 0))