# WanderOn - Secure Backend API#@

This is the backend service for WanderOn, a robust authentication system. It focuses on security, performance, and scalable API architecture using Node.js, Express, and MongoDB.

## 🚀 Features

- **JWT-Based Authentication**: Stateless authentication using JSON Web Tokens.
- **Secure Cookie Management**: Uses `httpOnly` and `secure` cookies to prevent XSS and CSRF attacks.
- **Scalable MVC Pattern**: Organized structure with dedicated routes, controllers, and models.
- **Data Validation**: Schema-based request validation using **Zod** for type safety and robust error reporting.
- **Security Headers**: Integrated `helmet` for enhanced HTTP header security.
- **Error Handling**: Centralized error management for consistent API responses.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Security**: BcryptJS (Hashing), JWT, Helmet, Cookie-Parser
- **Validation**: Zod (Type-safe schemas)

## 📂 Folder Structure

```text
backend/
├── config/        # Database and configuration files
├── controllers/   # Business logic for API endpoints
├── middleware/    # Authentication and validation middlewares
├── models/        # Mongoose schemas (User)
├── routes/        # API route definitions
├── validations/   # Zod validation schemas
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

## ✅ Input Validation with Zod

The backend uses **Zod** for schema-based validation. This ensures that all incoming request data is validated against a strict schema before being processed by the controllers.

### How it works:
1. **Define Schemas**: Schemas are defined in `validations/authSchema.js`.
2. **Apply Middleware**: The `validate` middleware in `middleware/validate.js` is used in the routes.
3. **Automatic Error Handling**: If validation fails, the middleware automatically returns a `400 Bad Request` with detailed error messages.

**Example Usage in Routes:**
```javascript
const { registerSchema } = require('../validations/authSchema');
const validate = require('../middleware/validate');

router.post('/register', validate(registerSchema), register);
```

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
