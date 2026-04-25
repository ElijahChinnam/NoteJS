# NoteJS 📝

NoteJS is a modern, full-stack note-taking application built with the MERN stack (MongoDB, Express, React, Node.js). It provides a seamless experience for users to manage their personal notes and share public ones.

## 🚀 Features

- **User Authentication**: Secure signup and login using JWT and Bcrypt.
- **Note Management**: Create, Read, Update, and Delete (CRUD) personal notes.
- **Public Notes**: Share notes publicly for others to see.
- **Dashboard**: A personalized space to view and manage all your notes.
- **User Profile**: Manage account details and preferences.
- **Responsive Design**: Built with Tailwind CSS for a beautiful experience on all devices.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router Dom](https://reactrouter.com/)

### Backend
- **Environment**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **ORM**: [Mongoose](https://mongoosejs.com/)
- **Security**: [JSON Web Tokens (JWT)](https://jwt.io/) & [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)

---

## 📂 Project Structure

```text
NoteJS/
├── backend/            # Express server & API endpoints
│   ├── APIs/           # Route handlers (User, Notes)
│   ├── Middlewares/    # Custom middlewares (Auth, etc.)
│   ├── Models/         # Mongoose schemas
│   └── server.js       # Entry point
├── frontend/           # React application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Application views
│   │   └── contexts/   # State management
│   └── index.html      # Main HTML file
└── README.md           # Project documentation
```

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/NoteJS.git
   cd NoteJS
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory and add:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   SECRET_KEY=your_jwt_secret
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the Frontend**
   ```bash
   cd frontend
   npm run dev
   ```

The application should now be running at `http://localhost:5173` (Frontend) and `http://localhost:3000` (Backend).

