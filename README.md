# Simple Express.js REST API

A minimal, clean Express.js REST API application.

## Project Structure

```text
express-app/
├── server.js        # Main application file (routes, middleware, server listener)
├── package.json     # Project metadata and dependencies
├── .gitignore       # Files excluded from git
└── README.md        # Documentation
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
npm start
```
The server will start at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Welcome message |
| `GET` | `/health` | Health check status |
| `GET` | `/api/users` | List of sample users |
