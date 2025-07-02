# 🌍 TriGo – Tour Booking Web App

**TriGo** is a modern, responsive, and user-friendly **tour booking application** built with **React.js**, **Firebase**, and **Tailwind CSS**. It allows users to explore various tours, check details, and book them in a smooth and seamless way.

---

## 🚀 Live Demo

👉 [Click here to view the live app](https://tri-go.vercel.app/)

---

## 📸 Screenshots

Coming soon...
![image](https://github.com/user-attachments/assets/e93666b1-2c5a-476e-9dcc-689b072d057c)
![image](https://github.com/user-attachments/assets/bb6654af-84fa-4101-8d1c-448929485d73)


---

## 🛠️ Features

- 🏞️ View all available tours
- 📋 Book tours with real-time Firebase integration
- 🔐 User login (optional)
- ⚡ Fast and responsive UI with Tailwind CSS
- ✅ Toast notifications for success & errors
- 🌐 Deployed using Netlify / Vercel

---

## 🧰 Tech Stack

| Frontend | Backend / DB | Styling    | Build Tool |
|----------|--------------|------------|------------|
| React.js | Firebase DB  | TailwindCSS| Vite       |

---

## 📁 Folder Structure
TriGo/
│
├── public/
│   └── index.html               # Main HTML template
│
├── src/
│   ├── assets/                  # Images, icons, and static assets
│   ├── components/              # Reusable UI components (Navbar, Footer, TourCard, etc.)
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── TourCard.jsx
│   │
│   ├── pages/                   # Page-level components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Tours.jsx
│   │   ├── Login.jsx
│   │   ├── Booking.jsx          # If not here, move it from components/
│   │   ├── SuccessPage.jsx      # Optional - after booking success
│   │   └── NotFound.jsx         # Optional - for undefined routes
│   │
│   ├── App.jsx                  # Main component with routing
│   └── main.jsx                 # Entry point for React
│
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md

