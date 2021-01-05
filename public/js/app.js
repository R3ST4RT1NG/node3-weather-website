const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    const location = searchElement.value

    fetch('/weather?address='+ location).then((response) => {
        response.json().then((data) => {
            if (!data.error)
            {
                const weather = 'It is currently '+ data.forecastData.Weather +
                                ' with a temperature of ' + data.forecastData.Temperature +
                                ' °C and feels like ' + data.forecastData.feelsLike + 
                                ' °C in'
                messageOne.textContent = weather
                messageTwo.textContent = data.location + "."
            } else {
                messageOne.textContent = data.error
            }
        })
    })
})