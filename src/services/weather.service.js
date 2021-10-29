const API_KEY = "faea2edda3807ea5ea4589ae6dbc6f64";

const getWeather = (cityId) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((jsonResponse) => {
            console.log(jsonResponse)
            return jsonResponse
        })
        .catch(err => {
            console.log(err)
        })
}

export default getWeather;