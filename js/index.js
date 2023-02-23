const cardTop = document.querySelector('#cardTop').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment()
let topTwoHundred = [] 

document.addEventListener('DOMContentLoaded', () => {
    loadMusicData()
})

const loadMusicData = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '627dfa4f0cmsha72478184782062p12c805jsn819646800b5e',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = response
            creaCards()
        console.log('canciones', topTwoHundred)
        } )
        .catch(err => console.error(err));

}

const creaCards = () => {
    topTwoHundred.forEach((song) => {
        cardTop.querySelector('img').setAttribute('src', song.trackMetadata.displayImageUri)
        cardTop.querySelector('.songname').textContent = song.trackMetadata.trackName

    
        const clone = cardTop.cloneNode(true)
        fragment.appendChild(clone)
    })
    
        contenido.appendChild(fragment)
}