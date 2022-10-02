const select_persona = document.querySelector('.select-persona')

let persons = [
    'Marcius leadman'
]

let personImage = [
    'media/berserk.jpg'
]

function createPersonaArea(name, photoPath) {
    let personaName = document.createElement('h2')
    personaName.innerHTML = `<img src="${photoPath}" class="player-thumb"></img> ${name}`
    personaName.setAttribute('class','persona-abe')
    select_persona.appendChild(personaName)
}

createPersonaArea(persons[0], personImage[0])