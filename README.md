# Expense Tracker Web Application

A full-stack financial tracking application built using the MERN stack. It allows users to log daily income and expenses, monitor real-time net balances, and manage transaction records through an intuitive dashboard.

---

## 🚀 Features

- **Financial Overview:** Real-time calculation of Total Balance, Total Income, and Total Expense.
- **Transaction Logging:** Modal-based form to log new incomes or expenses with custom titles, amounts, categories, and dates.
- **Recent Activity Feed:** Displays the latest transactions directly on the main dashboard.
- **Transaction History:** Dedicated view to search, filter (All, Income, Expense), and delete past transactions.
- **Responsive Interface:** Clean UI built with React, Tailwind CSS, and custom UI components.
- **RESTful API:** Node.js/Express backend integrated with MongoDB for persistent data storage.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **HTTP Client:** Axios

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Environment Management:** dotenv, CORS

---

## 📁 Project Structure

Expense Tracker/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   └── authController.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── models/
│   │   │   ├── Transaction.js
│   │   │   └── User.js
│   │   ├── routes/
│   │   │   ├── AuthRoutes.js
│   │   │   └── transactionRoutes.js
│   │   ├── utils/
│   │   │   └── generateTokens.js
│   │   └── server.js
│   ├── package-lock.json
│   └── package.json
│
└── Frontend/
    └── my-react-app/
        ├── public/
        │   └── logo.png
        ├── src/
        │   ├── components/
        │   │   ├── AddTransaction.jsx
        │   │   ├── Footer.jsx
        │   │   ├── Navbar.jsx
        │   │   └── ProtectedRoute.jsx
        │   ├── context/
        │   │   └── AuthContext.jsx
        │   ├── pages/
        │   │   ├── Analytics.jsx
        │   │   ├── Dashboard.jsx
        │   │   ├── Home.jsx
        │   │   ├── Login.jsx
        │   │   ├── Signup.jsx
        │   │   └── Transactions.jsx
        │   ├── services/
        │   │   └── api.js
        │   ├── App.jsx
        │   ├── index.css
        │   └── main.jsx
        ├── .gitignore
        ├── .oxlintrc.json
        ├── index.html
        ├── package-lock.json
        ├── package.json
        └── vite.config.js
