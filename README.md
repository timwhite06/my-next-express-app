# Example of using Next and Express with an SQLite database

This project exemplifies the synergy of client-side and server-side processing using Next.js. It incorporates Node.js, Express.js, and an SQLite database for efficient data management. This concise demonstration showcases the integration of these technologies, offering practical insights for building dynamic web applications with a modern tech stack.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Clone the Repository

```bash
git clone https://github.com/timwhite06/my-next-express-app.git
cd my-next-express-app
```
## Install Dependencies
Install frontent and backend dependencies.

### Install frontend dependencies
cd frontend
npm install

### Install backend dependencies
```bash
cd ../backend
npm install
```
Go back into the root of the directory:
```bash
cd ..
```
...and install the root dependencies:

```bash
npm install   # Install root dependencies
```

## Start both frontend and backend concurrently

npm run dev

## File structure
- backend
  - db.js (the database connection)
  - server.js (where the database is hosted: http://localhost:3001)

- frontend
  - src
    - app (Next.js routing area)
