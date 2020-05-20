

const weatherform = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#err')
const messageTwo = document.querySelector('#resp')


weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchElement.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
        messageOne.textContent = data.error
    } else {
       messageOne.textContent = data.location
       messageTwo.textContent = data.forecast
    }

    })
})
})