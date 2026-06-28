# 🤖 AI Document Assistant

An AI-powered document assistant built using the MERN stack that allows users to upload PDF documents, securely manage them, and interact with their content using Google's Gemini AI.

## 🚀 Features

- 🔐 User Authentication (JWT)
- 👤 Secure Login & Registration
- 📄 Upload PDF Documents
- ☁️ Store Document Information in MongoDB
- 🔒 Protected Routes
- 📂 Personal Document Dashboard
- 🤖 AI-powered document analysis (Upcoming)
- 💬 Chat with uploaded PDFs (Upcoming)
- 📝 AI-generated summaries (Upcoming)
- ❓ Ask questions from documents (Upcoming)

---

## 🛠 Tech Stack

### Frontend

- React (Vite)
- React Router
- Axios
- Tailwind CSS
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- bcryptjs
- dotenv

### AI

- Google Gemini API *(Integration in Progress)*

---

## 📁 Project Structure

```
AI-Document-Assistant/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── uploads/
│   │   └── server.js
│   │
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/<your-username>/AI-Document-Assistant.git
```

---

### Install Backend

```bash
cd server
npm install
```

---

### Install Frontend

```bash
cd ../client
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key
```

---

## ▶️ Run Backend

```bash
cd server
npm run dev
```

---

## ▶️ Run Frontend

```bash
cd client
npm run dev
```

---

## 📸 Screenshots

> Screenshots will be added after UI completion.

---

## 🗺 Roadmap

### ✅ Completed

- User Authentication
- JWT Authorization
- Protected Routes
- PDF Upload API
- Dashboard UI
- MongoDB Integration

### 🚧 In Progress

- Recent Documents
- PDF Text Extraction
- AI Chat
- Chat History
- AI Summaries
- AI Question Answering

### 🔜 Planned

- Vector Database Integration
- Semantic Search
- Conversation Memory
- Multi-document Chat
- Dark Mode
- User Profile
- Document Sharing
- Deployment

---

## 📚 Learning Outcomes

This project demonstrates experience with:

- Full Stack MERN Development
- REST API Design
- JWT Authentication
- Secure Route Protection
- File Upload Handling with Multer
- MongoDB & Mongoose
- React Component Architecture
- State Management
- AI Integration using Gemini API

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**N.G.S.R.S. Prasad**

B.Tech Information Technology

Passionate about

- Full Stack Development
- Artificial Intelligence
- Cybersecurity

GitHub: https://github.com/<your-username>

LinkedIn: https://linkedin.com/in/<your-profile>
