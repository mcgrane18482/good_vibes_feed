# Good Vibes Feed - README

Welcome to the Good Vibes Feed project! This is a web application built using React for the frontend and Node.js with Express and MongoDB for the backend. The project aims to provide a platform where users can read and comment on positive and inspiring articles. Below, you'll find information about the project structure, setup, and key components.

## Table of Contents
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Backend](#backend)
- [Frontend](#frontend)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
The project consists of both frontend and backend components. The frontend is built using React, and the backend utilizes Node.js with Express for creating APIs and MongoDB for database storage.

## Getting Started


### Prerequisites
To run the Good Vibes Feed app locally, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (running instance or access to a remote instance)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/mcgrane18482/good_vibes_feed
   cd good-vibes-feed
   ```

2. Install backend and frontend dependencies:
   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

### Running the App
1. Start the backend server:
   ```sh
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```sh
   cd frontend
   npm start
   ```

3. Open your web browser and navigate to `ADD LINK HERE` to use the Good Vibes Feed app.

## Backend
The backend is built using Node.js and Express. It provides APIs for user authentication, registration, login, and article management. MongoDB is used as the database to store articles and user information. The backend code is located in the `backend` directory.

Key files and folders:
- `backend/api_routes.js`: Contains APIs for managing articles and comments.
- `backend/user_routes.js`: Provides user authentication and authorization APIs.
- `backend/models/Article.js`: Defines the MongoDB schema for articles.
- `backend/models/User.js`: Defines the MongoDB schema for users.
- `backend/auth.js`: Implements JWT token creation and validation.

## Frontend
The frontend is built using React and showcases the Good Vibes Feed interface. Users can read articles and leave comments. The frontend code is located in the `frontend` directory.

Key files and folders:
- `frontend/src/App.js`: The main React component rendering the app's UI.
- `frontend/src/components/Article.js`: Renders individual articles with details and comments.
- `frontend/src/components/Comment.js`: Displays comments for an article.
- `frontend/src/components/LoginForm.js`: Provides a login form for users.
- `frontend/src/components/RegisterForm.js`: Offers a registration form for new users.

## Contributing
Contributions to the Good Vibes Feed project are welcome! Feel free to submit issues, suggestions, or pull requests. When contributing code changes, please follow the existing coding style and conventions.

## License
The Good Vibes Feed project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code according to the terms of the license.

---

Thank you for checking out the Good Vibes Feed project! We hope you enjoy using the app and find it a source of positivity and inspiration. If you have any questions or feedback, please don't hesitate to contact us.

Created with ❤️ by the Good Vibes Feed Team (Thomas Szentirmay, Ryan Wysocki, Erin McGrane, John Paul King & Brandon Lumar).
