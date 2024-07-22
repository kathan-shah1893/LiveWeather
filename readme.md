# 🌤️ LiveWeather Discord Bot

Welcome to **LiveWeather**, a Discord bot that provides real-time weather updates! Whether you're planning your day or just curious about the weather, this bot has you covered. 🌦️

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Commands](#commands)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- 🌍 Get current weather information for any city in the world.
- 🕰️ Receive real-time updates with accurate weather data.
- 📊 Detailed weather reports including temperature, humidity, wind speed, and more.
- 💬 Easy-to-use commands directly from your Discord server.

## 🛠️ Installation

Follow these steps to set up the LiveWeather bot on your local machine:

1. **Clone the Repository:**

    ```sh
    git clone https://github.com/kathan-shah1893/LiveWeather.git
    cd LiveWeather
    ```

2. **Install Dependencies:**

    ```sh
    npm install
    ```

3. **Create a `.env` File:**

    Create a `.env` file in the root directory and add your Discord bot token and weather API key:

    ```env
    DISCORD_TOKEN=your_discord_token
    WEATHER_API_KEY=your_weather_api_key
    ```

4. **Run the Bot:**

    ```sh
    npm start
    ```

## ⚙️ Configuration

Make sure to configure the following environment variables in your `.env` file:

- `DISCORD_TOKEN`: Your Discord bot token.
- `WEATHER_API_KEY`: Your weather API key from a weather service like OpenWeatherMap.

## 🚀 Usage

Invite the bot to your server using the OAuth2 URL generated from the Discord Developer Portal. Once invited, use the bot commands to get weather updates.

## 📜 Commands

Here are some of the commands you can use with LiveWeather:

- `!weather [city]` - Get the current weather for the specified city.
  - Example: `!weather London`
- `!forecast [city]` - Get a weather forecast for the specified city.
  - Example: `!forecast New York`

## 🤝 Contributing

We welcome contributions to enhance the LiveWeather bot! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.


## 📞 Support

For any questions or support, please open an issue in this repository.

---

Enjoy using LiveWeather and stay updated with the latest weather reports! 🌈☀️🌧️
