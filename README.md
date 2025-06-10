# TypeScript Express Server

A backend server built with Node.js, Express, and TypeScript.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd eg-server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add:
```
PORT=3000
NODE_ENV=development
```

## Available Scripts

- `npm run dev`: Start the development server with hot-reload
- `npm run build`: Build the TypeScript code
- `npm start`: Run the built code in production
- `npm test`: Run the test suite

## Project Structure

```
src/           # Source files
├── index.ts   # Main application entry point
dist/          # Compiled JavaScript files
```

## API Endpoints

- `GET /`: Welcome message 