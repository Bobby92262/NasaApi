# 🚀 NASA APOD API Wrapper

This is a lightweight Express.js API that wraps NASA's Astronomy Picture of the Day (APOD) service. It provides a clean RESTful interface and Swagger documentation for developers to explore space imagery and descriptions.

## 🌌 Features

- `GET /apod/today`: Fetches today's Astronomy Picture of the Day
- `GET /apod/date?date=YYYY-MM-DD`: Fetches APOD for a specific date
- Swagger UI available at `/docs`
- Error handling for NASA API downtime
- Environment-based configuration using `.env`

## 🛠️ Tech Stack

- Node.js
- Express.js
- Axios
- Swagger UI Express
- dotenv

## 📦 Installation

```bash
git clone https://github.com/Bobby92262/NasaApi.git
cd NasaApi
npm install
