# WanderOn - Secure Backend API

This is the backend service for WanderOn, a robust authentication system. It focuses on security, performance, and scalable API architecture using Node.js, Express, and MongoDB.

## 🚀 Features

- **JWT-Based Authentication**: Stateless authentication using JSON Web Tokens.
- **Secure Cookie Management**: Uses `httpOnly` and `secure` cookies to prevent XSS and CSRF attacks.
- **Scalable MVC Pattern**: Organized structure with dedicated routes, controllers, and models.
- **Input Validation**: Robust request body validation using `express-validator`.
- **Security Headers**: Integrated `helmet` for enhanced HTTP header security.
- **Error Handling**: Centralized error management for consistent API responses.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Security**: BcryptJS (Hashing), JWT, Helmet, Cookie-Parser
- **Validation**: Express-Validator

## 📂 Folder Structure

```text
backend/
├── config/        # Database and configuration files
├── controllers/   # Business logic for API endpoints
├── middleware/    # Authentication and security middlewares
├── models/        # Mongoose schemas (User)
├── routes/        # API route definitions
└── index.js       # Entry point
```

## 🔐 Environment Variables

Create a `.env` file in the root of the `backend` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=24h
COOKIE_EXPIRE=1
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## 🛤️ API Endpoints

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Authenticate user & get cookie | No |
| GET | `/api/auth/logout` | Clear auth cookie | Yes |
| GET | `/api/auth/me` | Get current user profile | Yes |

## ⚡ Setup & Run

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Production Mode**
   ```bash
   npm start
   ```

---
*Developed with focus on modern security standards.*
