import https from 'https';

function getData(k) {
    return new Promise((resolve, reject) => {
        let url = "https://api.openweathermap.org/data/2.5/weather?q="+k+"&appid=83a2f5a45c19983b1525d29e7e6af42d"
        console.log(url)
        https.get(url, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                const obj = JSON.parse(data);
                const temperatureInCelsius = fahrenheitToCelsius(obj.main.temp);
                resolve(temperatureInCelsius);
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 273.15);
}

export default { getData };
